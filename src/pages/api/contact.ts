import {NextkitError} from 'nextkit';
import {z} from 'zod';
import {api} from '../../server/api';
import {env} from '../../server/env';
import {codeblock} from '../../utils/discord';

const schema = z.object({
	email: z.string().email(),
	body: z.string().max(500).min(10),
	turnstile: z.string(),
});

export default api({
	async POST({req, res}) {
		const body = schema.parse(req.body);

		const result = await fetch(env.DISCORD_WEBHOOK, {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				content: 'contact form submission',
				embeds: [
					{
						description: body.body,
						author: {name: body.email},
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
