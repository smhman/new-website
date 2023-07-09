import { HomeIcon } from "@heroicons/react/solid";
import differenceInYears from "date-fns/differenceInYears";
import type { InferGetServerSidePropsType } from "next";
import Image from "next/future/image";

import { Clock } from "../components/Clock";
import Discord from "../components/Discord";
import GenericMeta from "../components/GenericMeta";
import Spotify from "../components/Spotify";
import { socials } from "../data/socials";

const birthday = new Date(2006, 6, 6);

export async function getStaticProps() {
	return {
		props: {
			age: differenceInYears(Date.now(), birthday).toString()
		}
	};
}

export default function Home({
	age
}: InferGetServerSidePropsType<typeof getStaticProps>) {
	return (
		<>
			<GenericMeta
				title="sundei 👋"
				description="My portfolio and personal website."
			/>

			<h1 className="heading mb-2">
				sundei! <HomeIcon className="ml-4 h-12 w-12 text-orange-400" />
			</h1>

			<p className="mb-4">
				Hi! I&apos;m sundei, a{" "}
				<span className="text-blue-400">{age}-year-old developer</span>{" "}
				from <span className="text-rose-400">Tartu</span>, Estonia.
			</p>

			<p className="mb-2 flex flex-wrap gap-2 items-center">
				{socials.map(({ name, image, url }) => (
					<a
						key={name}
						href={url}
						target="_blank"
						rel="noopener noreferrer"
						className="w-6 h-6 hover:opacity-80 transition"
					>
						<Image
							src={image}
							alt={name}
							width={64}
							height={64}
							priority={true}
						/>
					</a>
				))}
			</p>

			<p className="mb-4 text-base text-gray-300">
				<Clock />
			</p>
			<p className="mb-4 text-base text-gray-300"><span id="weather"><i
                className="fa-regular fa-spinner-third animate-spin text-gray-500 inline-flex ml-1 mr-2"></i>Loading</span>
       		</p>
			<hr className="mb-4 bg-slate-800 border-none h-0.5" />

			<Discord />
			<Spotify />
			<br/>
			<br/>
		</>
	);
}
