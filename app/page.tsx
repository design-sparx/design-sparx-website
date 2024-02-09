"use client";

import { BoxProps, Container, Divider, Stack } from "@mantine/core";
import {
	HeroSection,
	ProjectsSection,
	SolutionsSection,
	TechStackSection,
} from "@/sections/landing";
import ContactSection from "@/sections/contact/contact";
import { motion } from "framer-motion";

const BOX_PROPS: BoxProps = {
	pt: 80,
	pb: 120,
};

export default function Home() {
	return (
		<>
			<head>
				<title>Design Sparx</title>
			</head>
			<motion.div
				initial={{ y: "-200vh" }}
				animate={{ y: "0%" }}
				transition={{ duration: 1 }}
			>
				<HeroSection />
				<Container>
					<Stack>
						<ProjectsSection {...BOX_PROPS} />
						<Divider />
						<SolutionsSection {...BOX_PROPS} />
						<Divider />
						<TechStackSection {...BOX_PROPS} />
					</Stack>
				</Container>
				<ContactSection />
			</motion.div>
		</>
	);
}
