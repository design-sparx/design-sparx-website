import {
	Box,
	BoxProps,
	Button,
	Container,
	Group,
	SimpleGrid,
	Text,
	Title,
} from "@mantine/core";
import { ProjectCard } from "@/components";

const PROJECTS = [
	{
		media: [
			"https://github.com/design-sparx/mantine-analytics-dashboard/blob/master/public/thumbnail-img-b.jpg?raw=true",
			"https://github.com/design-sparx/mantine-analytics-dashboard/blob/master/public/showcase/dashboard-default-dark.png?raw=true",
			"https://github.com/design-sparx/mantine-analytics-dashboard/blob/master/public/showcase/dashboard-default.png?raw=true",
			"https://github.com/design-sparx/mantine-analytics-dashboard/blob/master/public/showcase/dashboard-saas.png?raw=true",
			"https://github.com/design-sparx/mantine-analytics-dashboard/blob/master/public/showcase/dashboard-analytics.png?raw=true",
		],
		name: "Mantine analytics dashboard",
		description:
			"A professional admin & and dashboard template built using Mantine 7 has hundreds of UI components, forms, tables, charts, pages and icons. This template uses Next 14, React 18, Apex Charts, Mantine DataTable and Storybook.",
		skills: [
			"Front-End Development",
			"Next.js",
			"Typescript",
			"React.js",
			"Mantine",
			"Apex Charts",
		],
		link: "https://mantine-analytics-dashboard.netlify.app/",
		projectActive: true,
		startDate: "Sept, 2023",
		endDate: null,
	},
	{
		media: [
			"https://mir-s3-cdn-cf.behance.net/project_modules/1400/378398184027331.654a642f36f27.jpg",
			"https://github.com/design-sparx/antd-multipurpose-dashboard/blob/main/public/landing-frame.jpg?raw=true",
			"https://github.com/design-sparx/antd-multipurpose-dashboard/blob/main/public/showcase/dashboard/projects.png?raw=true",
			"https://github.com/design-sparx/antd-multipurpose-dashboard/blob/main/public/showcase/dashboard/ecommerce.png?raw=true",
			"https://github.com/design-sparx/antd-multipurpose-dashboard/blob/main/public/showcase/dashboard/marketing.png?raw=true",
			"https://github.com/design-sparx/antd-multipurpose-dashboard/blob/main/public/showcase/dashboard/social.png?raw=true",
			"https://github.com/design-sparx/antd-multipurpose-dashboard/blob/main/public/showcase/dashboard/bidding.png?raw=true",
			"https://github.com/design-sparx/antd-multipurpose-dashboard/blob/main/public/showcase/dashboard/learning.png?raw=true",
			"https://github.com/design-sparx/antd-multipurpose-dashboard/blob/main/public/showcase/dashboard/logistics.png?raw=true",
		],
		name: "Antd multipurpose dashboard",
		description:
			"A professional Admin & Dashboard template based on Ant design 5 that comes with hundreds of UI components, forms, tables, charts, pages and icons. This template is built using React, Vite, Ant Design Charts, Ant Design Icons and Storybook.",
		skills: [
			"Front-End Development",
			"Typescript",
			"React.js",
			"Ant Design",
			"Vite",
		],
		link: "https://antd-multipurpose-dashboard.netlify.app/",
		projectActive: true,
		startDate: "Nov, 2023",
		endDate: null,
	},
	{
		media: [
			"https://mir-s3-cdn-cf.behance.net/project_modules/1400/8830b1175929503.65aea9d6a9820.jpg",
			"https://mir-s3-cdn-cf.behance.net/project_modules/1400/eea51e175929503.64bc06994aa44.png",
			"https://mir-s3-cdn-cf.behance.net/project_modules/1400/b7f20c175929503.64bc069946805.jpg",
			"https://mir-s3-cdn-cf.behance.net/project_modules/1400/16bf80175929503.64bc06994b5d2.jpg",
			"https://mir-s3-cdn-cf.behance.net/project_modules/1400/f54d41175929503.64bc069948e3c.jpg",
		],
		name: "GlobGoer Website - UI/UX Case Study",
		description:
			"GlobGoer is an online travel booking website that helps you plan and book travel arrangements.",
		skills: [
			"UI/UX",
			"Figma",
			"User Experience Design",
			"User Interface Design",
		],
		link: "https://www.behance.net/gallery/175929503/GlobGoer-Flight-Booking-Website-UIUX-Case-Study",
		projectActive: false,
		startDate: "Aug, 2023",
		endDate: "Aug, 2023",
	},
];

type ProjectSectionProps = Partial<BoxProps>;

export const ProjectsSection = ({ ...others }: ProjectSectionProps) => {
	return (
		<Box id="projects" {...others}>
			<Text c="dimmed">PROJECTS WE DONE</Text>
			<Title tt="capitalize" my="md">
				featured work
			</Title>
			<Text mb="md" w={600}>
				We&apos;re a web design agency creating next‑level websites by
				strategically blending user experience and brand storytelling.
			</Text>
			<SimpleGrid
				cols={{ base: 1, sm: 1, lg: 3 }}
				spacing={{ base: 10, sm: "xl" }}
				verticalSpacing={{ base: "md", sm: "xl" }}
				mb="md"
			>
				{PROJECTS.map((project) => (
					<ProjectCard key={project.name} data={project} />
				))}
			</SimpleGrid>
			<Group justify="center">
				<Button>View more projects</Button>
			</Group>
		</Box>
	);
};
