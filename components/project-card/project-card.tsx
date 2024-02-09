import { Badge, Card, Group, Image, Paper, Text } from "@mantine/core";
import Link from "next/link";
import { Carousel } from "@mantine/carousel";
import classes from "./project-card.module.css";

type ProjectCardProps = {
	data: {
		media: string[];
		name: string;
		description: string;
		skills: string[];
		link: string;
		projectActive: boolean;
		startDate: string;
		endDate: string | null;
	};
};

export const ProjectCard = ({ data }: ProjectCardProps) => {
	const slides = data.media.map((image) => (
		<Carousel.Slide key={image}>
			<Image src={image} height={220} alt="image" />
		</Carousel.Slide>
	));

	return (
		<Card padding="md" withBorder shadow="md">
			<Card.Section>
				<Carousel
					withIndicators
					loop
					classNames={{
						root: classes.carousel,
						controls: classes.carouselControls,
						indicator: classes.carouselIndicator,
					}}
				>
					{slides}
				</Carousel>
			</Card.Section>
			<Text fw={600} fz="md" mt="md">
				{data.name}
			</Text>
			<Text fz="md" c="dimmed">
				{data.skills[0]}
			</Text>
		</Card>
	);
};
