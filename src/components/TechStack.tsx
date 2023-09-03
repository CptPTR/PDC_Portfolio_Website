"use client";

import styles from "@/styles/TechStack.module.css";
import { Livvic } from "next/font/google";
import Moramit from "next/font/local";
import TechCarousel from "./TechCarousel";
import { motion } from "framer-motion";

const moramit = Moramit({ src: "./../assets/fonts/Moramit.otf" });

const livvic400 = Livvic({
  subsets: ["latin"],
  weight: "400",
});

const TechStack = () => {
  return (
    <div
      id="techstack"
      style={{
        scrollMarginTop: "60px",
      }}
    >
      <article className={styles.techStackWrapper}>
        <div id="techstack" className={styles.techStackContent}>
          <div className={styles.techStackTextContent}>
            <motion.p
              className={livvic400.className + " " + styles.preTitle}
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
              className={livvic400.className + " " + styles.text}
              initial={{ opacity: 0, translateY: 100 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              This list is the tech stack I currently use to tackle frontend
              web/app
              <br /> development challenges. Although, I am always on the
              lookout for
              <br /> new tech and deep dive into anything noteworthy!
            </motion.p>
          </div>
          <TechCarousel />
        </div>
      </article>
    </div>
  );
};

export default TechStack;
