"use client";

import {
	Burger,
	Center,
	Container,
	Drawer,
	Group,
	Menu,
	rem,
	ScrollArea,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons-react";
import { Logo } from "@/components";
import { Scrollchor } from "react-scrollchor";
import classes from "./navbar.module.css";

type ILink = {
	link: string;
	label: string;
	links?: { link: string; label: string }[];
};

const links: ILink[] = [
	{ link: "#projects", label: "Projects" },
	{ link: "#solutions", label: "Solutions" },
	{ link: "#tech-stack", label: "Tech Stack" },
	{ link: "#contact", label: "Contact" },
];

export const Navbar = () => {
	const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
		useDisclosure(false);
	const [opened, { toggle }] = useDisclosure(false);

	const items = links.map((link: ILink) => {
		const menuItems = link.links?.map((item) => (
			<Menu.Item key={item.link}>{item.label}</Menu.Item>
		));

		if (menuItems) {
			return (
				<Menu
					key={link.label}
					trigger="hover"
					transitionProps={{ exitDuration: 0 }}
					withinPortal
				>
					<Menu.Target>
						<Scrollchor to={link.link} className={classes.link}>
							<Center>
								<span className={classes.linkLabel}>{link.label}</span>
								<IconChevronDown size="0.9rem" stroke={1.5} />
							</Center>
						</Scrollchor>
					</Menu.Target>
					<Menu.Dropdown>{menuItems}</Menu.Dropdown>
				</Menu>
			);
		}

		return (
			<Scrollchor key={link.label} to={link.link} className={classes.link}>
				{link.label}
			</Scrollchor>
		);
	});

	return (
		<header className={classes.header}>
			<Container size="md">
				<div className={classes.inner}>
					<Logo height={40} width={40} />
					<Group gap={5} visibleFrom="md">
						{items}
					</Group>
					<Burger
						opened={drawerOpened}
						onClick={toggleDrawer}
						size="sm"
						hiddenFrom="sm"
					/>
				</div>
			</Container>
			<Drawer
				opened={drawerOpened}
				onClose={closeDrawer}
				size="md"
				padding="md"
				title={<Logo height={32} width={32} />}
				hiddenFrom="md"
				zIndex={1000000}
			>
				<ScrollArea h={`calc(100vh - ${rem(80)})`} mx="0">
					{items}
				</ScrollArea>
			</Drawer>
		</header>
	);
};
