import Head from "next/head";

interface GenericMetaProps {
	title: string;
	description: string;
}

export default function GenericMeta({ title, description }: GenericMetaProps) {
	return (
		<Head>
			<title>{title}</title>
			<meta property="og:title" content={title} />
			<meta name="description" content={description} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content="https://media.discordapp.net/attachments/1097585822414409792/1107305649383149759/Bojan_lick_DCB.gif">
			<meta content="#f0a1b3" data-react-helmet="true" name="theme-color">
			</meta>
		</Head>
	);
}
