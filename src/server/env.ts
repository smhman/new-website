import {envsafe, str, url} from 'envsafe';

export const env = envsafe({
	DISCORD_WEBHOOK: url(),
	TURNSTILE_SECRET_KEY: str(),
});