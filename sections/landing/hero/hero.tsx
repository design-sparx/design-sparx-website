import {
	Box,
	Button,
	Flex,
	Text,
	Title,
	Container,
	Stack,
} from "@mantine/core";
import classes from "./hero.module.css";

export const HeroSection = () => {
	return (
		<Box className={classes.root} id="home">
			<Box ta="center" className={classes.inner}>
				<Container size={600}>
					<Stack>
						<Title fz={48}>We build fast sites and apps.</Title>
						<Text fz="lg" fw={500}>
							Block is an agency that designs and develops e-commerce, marketing
							websites, web applications, and mobile apps.
						</Text>
						<Flex justify="center" gap="md">
							<Button size="md">View our work</Button>
							<Button variant="default" size="md">
								Contact us
							</Button>
						</Flex>
					</Stack>
				</Container>
			</Box>
		</Box>
	);
};
