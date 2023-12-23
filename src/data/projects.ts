export interface StackIconItem {
	name: string;
	icon: string;
	src?: never;
}

export interface StackCustomItem {
	name: string;
	icon?: never;
	src: string;
}

export interface ProjectInfo {
	name: string;
	description: React.ReactNode;
	image: string;
	url: string;
	stack: (StackIconItem | StackCustomItem)[];
}

export const projects: ProjectInfo[] = [
	{
		name: "Crystal PS",
		description:
			"\"Crystal PS\" is a popular private server for the multiplayer sandbox game Growtopia. It offers an exclusive and customized gaming experience, providing players with unique features, events, and a vibrant community, enhancing the excitement and creativity of the Growtopia universe.",
		image: "/images/projects/projectmnt.png",
		url: "https://projectmnt.tech",
		stack: [
			{
				name: "C++",
				icon: "cpp"
			},
			{
				name: "HTML",
				icon: "html"
			},
			{
				name: "JavaScript",
				icon: "js"
			}
		]
	},
	{
		name: "Online Radio Player",
		description:
			"This is a very small project. It has no purpose at all",
		image: "/images/projects/alika.gif",
		url: "https://raadio.sundei.eu",
		stack: [
			{
				name: "HTML",
				icon: "html"
			},
			{
				name: "JavaScript",
				icon: "js"
			}
		]
	}
];
