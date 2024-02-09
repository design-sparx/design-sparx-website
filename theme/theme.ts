import { ActionIcon, createTheme } from "@mantine/core";

export const theme = createTheme({
	primaryColor: "brand",
	colors: {
		brand: [
			"#e6e7ff",
			"#b5b9ff",
			"#858afb",
			"#545bf8",
			"#252cf5",
			"#0d14db",
			"#070fab",
			"#030a7b",
			"#00054c",
			"#00011e",
		],
	},
	fontFamily: "Inter, sans-serif",
	headings: {
		fontFamily: "Inter, sans-serif",
	},
	defaultRadius: "md",
	components: {
		ActionIcon: ActionIcon.extend({
			defaultProps: {
				variant: "subtle",
			},
		}),
	},
});
