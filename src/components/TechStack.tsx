"use client";

import styles from "@/styles/TechStack.module.css";
import { motion } from "framer-motion";
import Moramit from "next/font/local";
import TechCarousel from "./TechCarousel";

const moramit = Moramit({ src: "./../assets/fonts/Moramit.otf" });

const TechStack = () => {
  return (
    <article id="techstack" className={styles.techStackWrapper}>
      <div className={styles.techStackContent}>
        <div className={styles.techStackTextContent}>
          <motion.p
            initial={{ opacity: 0, translateY: 100 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ ease: "easeOut" }}
            viewport={{ once: true }}
          >
            My current
          </motion.p>
          <motion.h1
            className={moramit.className}
            initial={{ opacity: 0, translateY: 100 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            tech stack
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, translateY: 100 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            This list is the tech stack I currently use to tackle frontend web/app development challenges. Although, I am always on the lookout for new tech and deep dive into anything noteworthy!
          </motion.p>
        </div>
        <TechCarousel />
      </div>
    </article>
  );
};

export default TechStack;
