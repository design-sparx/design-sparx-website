import { Box, BoxProps, SimpleGrid, Text, Title } from "@mantine/core";
import { SkillsCard } from "@/components";
import { IconDevicesCode, IconUxCircle } from "@tabler/icons-react";

type SolutionSectionProps = Partial<BoxProps>;

export const SolutionsSection = ({ ...others }: SolutionSectionProps) => {
	return (
		<Box id="solutions" {...others}>
			<Text c="dimmed">OUR SOLUTIONS</Text>
			<Title my="md">Creating a high-performance website</Title>
			<Text mb="md" w={600}>
				Projects deep and still going deeper in the mobile & web app development
				space. From A to Z of building beautiful apps, we do everything
				in-house.
			</Text>
			<SimpleGrid
				cols={{ base: 1, sm: 1, lg: 2 }}
				spacing={{ base: 10, sm: "xl" }}
				verticalSpacing={{ base: "md", sm: "xl" }}
			>
				<SkillsCard
					title="UX/UI Design"
					description="UI/UX design is the process of creating digital experiences that are visually appealing and easy to use. UI/UX designers are responsible for the overall user satisfaction of a product."
					icon={IconUxCircle}
				/>
				<SkillsCard
					title="Front-end Web Development"
					description="Front-end web development is the process of creating the graphical user interface (UI) and user experience (UX) of a website or web application. This includes the visual and interactive elements that users directly interact with."
					icon={IconDevicesCode}
				/>
			</SimpleGrid>
		</Box>
	);
};
