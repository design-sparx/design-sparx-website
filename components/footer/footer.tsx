import { ActionIcon, Container, Group } from "@mantine/core";
import {
	IconBrandBehance,
	IconBrandDribbble,
	IconBrandGithub,
	IconBrandInstagram,
	IconBrandLinkedin,
	IconBrandX,
} from "@tabler/icons-react";
import { Logo } from "@/components";
import classes from "./footer.module.css";

const ICON_SIZE = 20;

export const Footer = () => {
	return (
		<div className={classes.footer}>
			<Container className={classes.inner}>
				<Logo height={32} width={32} />
				<Group
					gap={0}
					className={classes.links}
					justify="flex-end"
					wrap="nowrap"
				>
					<ActionIcon
						component="a"
						href="https://twitter.com/kelvink_96"
						target="_blank"
						size="lg"
						color="gray"
						variant="subtle"
					>
						<IconBrandX size={ICON_SIZE} />
					</ActionIcon>
					<ActionIcon
						component="a"
						href="https://www.instagram.com/kelvink_96/"
						target="_blank"
						size="lg"
						color="gray"
						variant="subtle"
					>
						<IconBrandInstagram size={ICON_SIZE} />
					</ActionIcon>
					<ActionIcon
						component="a"
						href="https://www.linkedin.com/in/kelvink96/"
						target="_blank"
						size="lg"
						color="gray"
						variant="subtle"
					>
						<IconBrandLinkedin size={ICON_SIZE} />
					</ActionIcon>
					<ActionIcon
						component="a"
						href="https://www.behance.net/kelvink96"
						target="_blank"
						size="lg"
						color="gray"
						variant="subtle"
					>
						<IconBrandBehance size={ICON_SIZE} />
					</ActionIcon>
					<ActionIcon
						component="a"
						href="https://dribbble.com/kelvink96"
						target="_blank"
						size="lg"
						color="gray"
						variant="subtle"
					>
						<IconBrandDribbble size={ICON_SIZE} />
					</ActionIcon>
					<ActionIcon
						component="a"
						href="https://github.com/kelvink96"
						target="_blank"
						size="lg"
						color="gray"
						variant="subtle"
					>
						<IconBrandGithub size={ICON_SIZE} />
					</ActionIcon>
				</Group>
			</Container>
		</div>
	);
};
