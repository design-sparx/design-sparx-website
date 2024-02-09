"use client";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

import {
	ColorSchemeScript,
	createTheme,
	MantineProvider,
	rem,
	AppShell,
	ActionIcon,
} from "@mantine/core";
import { Inter } from "next/font/google";
import { Footer, Navbar, TransitionProvider } from "@/components";
import { useHeadroom } from "@mantine/hooks";
import { theme } from "@/theme";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pinned = useHeadroom({ fixedAt: 120 });

	return (
		<html lang="en" className={inter.className}>
			{/*@ts-ignore*/}
			<head>
				<ColorSchemeScript />
			</head>
			<body>
				<MantineProvider theme={theme}>
					<AppShell
						header={{ height: 60, collapsed: !pinned, offset: false }}
						padding={0}
					>
						<AppShell.Header style={{ border: "none" }}>
							<Navbar />
						</AppShell.Header>

						<AppShell.Main>
							<TransitionProvider>{children}</TransitionProvider>
						</AppShell.Main>
						<AppShell.Footer>
							<Footer />
						</AppShell.Footer>
					</AppShell>
				</MantineProvider>
			</body>
		</html>
	);
}
