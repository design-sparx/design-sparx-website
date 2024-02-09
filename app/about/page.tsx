"use client";

import { motion } from "framer-motion";
import React from "react";

const Page = () => {
	return (
		<motion.div
			initial={{ y: "-200vh" }}
			animate={{ y: "0%" }}
			transition={{ duration: 1 }}
		>
			about
		</motion.div>
	);
};

export default Page;
