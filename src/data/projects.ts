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
		name: "GTOS",
		description:
			"\"GTOS\" is a popular private server for the multiplayer sandbox game Growtopia. It offers an exclusive and customized gaming experience, providing players with unique features, events, and a vibrant community, enhancing the excitement and creativity of the Growtopia universe.",
		image: "/images/projects/gtos.jpg",
		url: "https://crystalps.eu",
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
	}
];
