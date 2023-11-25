import Link from "next/link";

export default function Custom404() {
	return (
		<>
			<h1 className="mb-2 heading text-amber-400">
				404 &ndash; page not found...
			</h1>
			<p>
				Seems like this page doesn&apos;t exist. Let&apos;s{" "}
				<Link href="/">
					<a className="border-b border-[#fff4] hover:border-white transition">
						go back... Or listen to "ALIKA".
					</a>
				</Link>
				<div>
					<iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/album/2qGwXvw1kIv5zPpwqXVLjR?utm_source=generator" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
				</div>
				!
			</p>
		</>
	);
}
