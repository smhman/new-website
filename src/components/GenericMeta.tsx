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
			<meta property="og:image" content="https://media.discordapp.net/attachments/390233585317052419/1107301875629428807/Bojan_lick.gif">
			<meta content="#f0a1b3" data-react-helmet="true" name="theme-color">
			</meta>
		</Head>
	);
}
