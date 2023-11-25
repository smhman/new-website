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
				title="sundei.ee"
				description="Welcome!"
			/>

			<h1 className="heading mb-2">
				sundei! <HomeIcon className="ml-4 h-12 w-12 text-orange-400" />
			</h1>

			<p className="mb-4">
				Hi! I&apos;m sundei, a{" "}
				<span className="text-blue-400">{age}-year-old developer & IT-specialist</span>{" "}
				from <span className="text-rose-400">Tartu</span>, Estonia.
			</p>
			<p className="mb-4">
			I am currently studying at{" "}<span className="text-blue-400">Tartu Vocational College</span>.
			</p>
			<p className="mb-4">
			I am unofficial tech support at{" "}<span className="text-blue-400">Universal Music Estonia</span>.
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
			<iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/track/7aiGJOMa4E2qr3l7wRCnLt?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
			<br/>
			<br/>
		</>
	);
}
