import {
	Box,
	Button,
	Group,
	List,
	Paper,
	SimpleGrid,
	Stack,
	Flex,
	Text,
	TextInput,
	Title,
	Textarea,
	BoxProps,
	Container,
	ActionIcon,
	ActionIconProps,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { randomId } from "@mantine/hooks";
import classes from "./contact.module.css";
import {
	IconAt,
	IconBrandBehance,
	IconBrandDribbble,
	IconBrandGithub,
	IconBrandInstagram,
	IconBrandLinkedin,
	IconBrandTwitter,
	IconBrandX,
	IconPhoneCall,
	IconSun,
} from "@tabler/icons-react";

const ICON_SIZE = 18;

type ContactSectionProps = Partial<BoxProps>;

const ContactSection = ({ ...others }: ContactSectionProps) => {
	const form = useForm({
		initialValues: {
			name: "",
			email: "",
		},
	});

	return (
		<Box id="contact" className={classes.root} {...others}>
			<Box className={classes.inner}>
				<Container>
					<SimpleGrid
						cols={{ base: 1, lg: 2 }}
						spacing={{ base: 10, sm: "xl" }}
						verticalSpacing={{ base: "md", sm: "xl" }}
					>
						<Stack>
							<Title>Contact us</Title>
							<Text>
								Book a free consultation call with one of our experts and get
								help with your next moves. It&apos;s always good to talk to an
								expert. It&apos;s free!
							</Text>
							<Flex
								direction={{ base: "row", sm: "column" }}
								gap={{ base: "sm", sm: "lg" }}
								wrap="wrap"
							>
								<Flex gap="md">
									<IconAt />
									<Stack gap={2}>
										<Text fz="sm">Email</Text>
										<Text>kelvin.kiprop96@gmail.com</Text>
									</Stack>
								</Flex>
								<Flex gap="md">
									<IconPhoneCall />
									<Stack gap={2}>
										<Text fz="sm">Phone</Text>
										<Text>+254 (737) 088 605</Text>
									</Stack>
								</Flex>
								<Flex gap="md">
									<IconSun />
									<Stack gap={2}>
										<Text fz="sm">Working hours</Text>
										<Text>8 a.m. - 11 p.m.</Text>
									</Stack>
								</Flex>
								<Flex
									gap="md"
									justify={{ base: "center", md: "flex-start" }}
									w="100%"
								>
									<ActionIcon
										component="a"
										href="https://twitter.com/kelvink_96"
										target="_blank"
										color="black"
									>
										<IconBrandX size={ICON_SIZE} />
									</ActionIcon>
									<ActionIcon
										component="a"
										href="https://www.instagram.com/kelvink_96/"
										target="_blank"
										color="black"
									>
										<IconBrandInstagram size={ICON_SIZE} />
									</ActionIcon>
									<ActionIcon
										component="a"
										href="https://www.linkedin.com/in/kelvink96/"
										target="_blank"
										color="black"
									>
										<IconBrandLinkedin size={ICON_SIZE} />
									</ActionIcon>
									<ActionIcon
										component="a"
										href="https://www.behance.net/kelvink96"
										target="_blank"
										color="black"
									>
										<IconBrandBehance size={ICON_SIZE} />
									</ActionIcon>
									<ActionIcon
										component="a"
										href="https://dribbble.com/kelvink96"
										target="_blank"
										color="black"
									>
										<IconBrandDribbble size={ICON_SIZE} />
									</ActionIcon>
									<ActionIcon
										component="a"
										href="https://github.com/kelvink96"
										target="_blank"
										color="black"
									>
										<IconBrandGithub size={ICON_SIZE} />
									</ActionIcon>
								</Flex>
							</Flex>
						</Stack>
						<Paper p="md" shadow="md" withBorder>
							<Box mx="auto">
								<Stack>
									<Flex
										gap="md"
										w="100%"
										direction={{ base: "column", md: "row" }}
									>
										<TextInput
											label="First name"
											placeholder="first name"
											{...form.getInputProps("firstName")}
										/>
										<TextInput
											label="Last name"
											placeholder="last name"
											{...form.getInputProps("lastName")}
										/>
									</Flex>

									<TextInput
										label="Email"
										placeholder="Email"
										{...form.getInputProps("email")}
									/>

									<Textarea
										label="Message"
										placeholder="message"
										{...form.getInputProps("message")}
									/>

									<Group justify="center">
										<Button
											fullWidth
											onClick={() =>
												form.setValues({
													name: randomId(),
													email: `${randomId()}@test.com`,
												})
											}
										>
											Let&apos; work together
										</Button>
									</Group>
								</Stack>
							</Box>
						</Paper>
					</SimpleGrid>
				</Container>
			</Box>
		</Box>
	);
};

export default ContactSection;
