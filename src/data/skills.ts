export interface SkillInfo {
	name: string;
	icon: string;
	href: string;
	bg?: string;
}

export const skills: SkillInfo[] = [
	{
		name: "TypeScript",
		icon: "ts",
		href: "https://www.typescriptlang.org/",
		bg: "#3279cc"
	},
	{
		name: "C++",
		icon: "cpp",
		href: "https://isocpp.org",
		bg: "#3279cc"
	},
	{
		name: "JavaScript",
		icon: "js",
		href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
		bg: "#ecdb4f"
	},
	{
		name: "HTML",
		icon: "html",
		href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
		bg: "#d55125"
	},
	{
		name: "CSS",
		icon: "css",
		href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
		bg: "#3076bd"
	},
	{
		name: "Discord API",
		icon: "bots",
		href: "https://discord.com/developers/docs/",
		bg: "#5663e9"
	},
	{
		name: "Node.js",
		icon: "nodejs",
		href: "https://nodejs.org/en/"
	},
	{
		name: "Python",
		icon: "python",
		href: "https://www.python.org/"
	},
	{
		name: "Tailwind CSS",
		icon: "tailwind",
		href: "https://tailwindcss.com/"
	},
	{
		name: "Next.js",
		icon: "nextjs",
		href: "https://nextjs.org/"
	}
];
