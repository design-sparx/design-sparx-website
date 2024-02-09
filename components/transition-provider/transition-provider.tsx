import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";
import classes from "./transition-provider.module.css";
import { usePathname } from "next/navigation";
import { randomId } from "@mantine/hooks";

export const TransitionProvider = ({ children }: { children: ReactNode }) => {
	const pathName = usePathname();
	const timestamp = Date.parse(new Date().toISOString());

	// notice keys have a plus 1,2,3 this is to escape duplicate key error
	return (
		<AnimatePresence mode="wait">
			<div className={classes.root}>
				<motion.div
					key={pathName + "1"}
					className={classes.blackScreen}
					animate={{ height: "0vh" }}
					exit={{ height: "140vh" }}
					transition={{ duration: 0.5, ease: "easeOut" }}
				/>
				<motion.div
					key={pathName + "2"}
					className={classes.pageName}
					initial={{ opacity: 1 }}
					animate={{ opacity: 0 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
				>
					{pathName.substring(1)}
				</motion.div>
				<motion.div
					key={pathName + "3"}
					className={classes.whiteScreen}
					initial={{ height: "140vh" }}
					animate={{ height: "0vh", transition: { delay: 0.5 } }}
				/>
				{children}
			</div>
		</AnimatePresence>
	);
};
