import {NextkitError} from 'nextkit';
import {z} from 'zod';
import {api} from '../../server/api';
import {DISCORD_WEBHOOK} from '../../server/constants';
import {codeblock} from '../../utils/discord';

const schema = z.object({
	email: z.string().email(),
	body: z.string().max(500).min(10),
	turnstile: z.string(),
});

export default api({
	async POST({req, res}) {
		const body = schema.parse(req.body);

		const ip = (req.headers['x-forwarded-for'] as string) ?? req.socket.remoteAddress ?? null;

		const result = await fetch(DISCORD_WEBHOOK, {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				content: 'contact form submission',
				embeds: [
					{
						description: body.body,
						author: {name: body.email},
						fields: [{name: 'ip', value: ip ?? 'unknown!?'}],
					},

					{
						title: 'turnstile',
						description: codeblock("Oy bruv, turnstile isnt working innit", 'json'),
					},
				],
			}),
		});

		if (result.status >= 400) {
			res.throw(result.status, 'Error sending notification');
		}

		if (req.headers['content-type'] === 'application/json') {
			return {sent: true};
		}

		return {
			_redirect: '/thanks',
		};
	},
});