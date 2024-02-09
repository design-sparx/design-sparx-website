import { Box, BoxProps, Image, SimpleGrid, Text, Title } from "@mantine/core";

type TechStackSectionProps = Partial<BoxProps>;

export const TechStackSection = ({ ...others }: TechStackSectionProps) => {
	return (
		<Box id="tech-stack" {...others}>
			<Text tt="uppercase" c="dimmed">
				modern tech stack
			</Text>
			<Title my="md">Building the web</Title>
			<Text mb="md">
				We work with cutting-edge technologies designed to solve your product
				requirements. Focus on finding solutions for your business needs while
				we handle the technical aspect.
			</Text>
			<SimpleGrid
				cols={{ base: 2, md: 3, lg: 4 }}
				spacing={{ base: 10, sm: "xl" }}
				verticalSpacing={{ base: "md", sm: "xl" }}
			>
				<Image
					src="/logos/GitHub_Logo.png"
					alt="github logo"
					h={48}
					fit="contain"
				/>
				<Image
					src="/logos/logo-storybook-default.png"
					alt="storybook logo"
					h={48}
					fit="contain"
				/>
				<Image
					src="/logos/netlify-logos.png"
					alt="netlify logo"
					h={48}
					fit="contain"
				/>
				<Image
					src="/logos/nextjs-logotype-light-background.png"
					alt="nextjs logo"
					h={48}
					fit="contain"
				/>
				<Image
					src="/logos/ts-lettermark-blue.png"
					alt="typescript logo"
					h={48}
					fit="contain"
				/>
				<Image
					src="/logos/vercel-logotype-dark.png"
					alt="vercel logo"
					h={48}
					fit="contain"
				/>
				<Image
					src="/logos/vite-seeklogo.svg"
					alt="vite logo"
					h={48}
					fit="contain"
				/>
				<Image
					src="/logos/react-resources-logos.png"
					alt="react logo"
					h={48}
					fit="contain"
				/>
			</SimpleGrid>
		</Box>
	);
};
