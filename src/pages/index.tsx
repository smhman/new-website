import { HomeIcon } from "@heroicons/react/solid";
import differenceInYears from "date-fns/differenceInYears";
import type { InferGetServerSidePropsType } from "next";
import Image from "next/future/image";

import { Clock } from "../components/Clock";
import Discord from "../components/Discord";
import GenericMeta from "../components/GenericMeta";
import Spotify from "../components/Spotify";
import Weather from "../components/Weather";
import { socials } from "../data/socials";

const birthday = new Date(2006, 6, 19);

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
				Hi there! I&apos;m sundei, a <span className="text-cyan-400">{age}-year-old developer and IT specialist</span> from <span className="text-teal-400">Tartu, Estonia</span>. Currently enrolled at <span className="text-lime-400">Tartu Vocational College</span> and unofficially serving as tech support at <span className="text-emerald-400">Universal Music Estonia</span>.
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
			<p className="mb-4 text-base text-gray-300">
			<Weather />
       		</p>
			<hr className="mb-4 bg-slate-800 border-none h-0.5" />

			<Discord />
			<Spotify />
			<div>
			<hr className="mb-4 bg-slate-800 border-none h-0.5" />
			<p className="mb-4">
			Currently my favorite album is <span className="text-violet-800">&ldquo;ALIKA&rdquo;</span> by <span className="text-blue-800">Alika Milova</span> and my favourite song from <span className="text-rose-600">&ldquo;ALIKA&rdquo;</span> is <span className="text-rose-400">&ldquo;Ты Расскажи Мне&rdquo;</span>.
			</p>
			<p className="mb-4">
			Listen to it and other songs from album down below!
			</p>
			<iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/album/2qGwXvw1kIv5zPpwqXVLjR?utm_source=generator" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
			</div>
			<br/>
			<br/>
		</>
	);
}
