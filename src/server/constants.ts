function env(key: string) {
	const value = process.env[key];

	if (!value) {
		throw new Error(`Missing environment variable ${key}`);
	}

	return value;
}

export const DISCORD_WEBHOOK = env('https://discord.com/api/webhooks/1119021857937576018/9dDsuq9DbIZ3l7k5muc0njA6QvUw1ADgu2b-8BdeR1TiM1FVEQtgyLhhlmWrlmqaU9zA');