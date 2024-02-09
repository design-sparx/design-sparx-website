import React, { createElement } from "react";
import {
	Flex,
	Paper,
	PaperProps,
	Stack,
	ThemeIcon,
	Text,
	Title,
} from "@mantine/core";

type ISkill = PaperProps & { icon: any; title: string; description: string };

export const SkillsCard = ({ description, icon, title, ...others }: ISkill) => {
	return (
		<Paper p="md" withBorder shadow="md" {...others}>
			<Flex gap="md">
				<ThemeIcon variant="light" size="xl" radius="50%">
					{createElement(icon)}
				</ThemeIcon>
				<Stack gap="xs">
					<Title order={5}>{title}</Title>
					<Text fz="sm">{description}</Text>
				</Stack>
			</Flex>
		</Paper>
	);
};
