import Link from "next/link";
import Image, { ImageProps } from "next/image";
import { Flex, Text } from "@mantine/core";

type LogoProps = Partial<ImageProps>;

export const Logo = ({ ...others }: LogoProps) => {
	return (
		<Link href="/" style={{ textDecoration: "none" }}>
			<Flex align="center" gap="sm">
				<Image
					src="/img/logo-no-background.png"
					alt="design sparx logo"
					width={64}
					height={64}
					style={{ objectFit: "contain" }}
					{...others}
				/>
				<Text c="black" fw={500}>
					Design Sparx
				</Text>
			</Flex>
		</Link>
	);
};
