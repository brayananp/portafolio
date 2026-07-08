import { getImage } from "astro:assets";
import avatarSrc from "../assets/images/avatar.webp";

export async function getAvatarLcpPreloadUrl(): Promise<string> {
	const image = await getImage({
		src: avatarSrc,
		width: 288,
		height: 288,
		format: "webp",
		quality: 80,
	});

	return image.src;
}
