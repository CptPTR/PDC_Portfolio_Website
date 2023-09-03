"use client";

import Logo from "@/assets/images/logo.svg";
import styles from "@/styles/AboutMe.module.css";
import { motion } from "framer-motion";
import { Livvic } from "next/font/google";
import Moramit from "next/font/local";
import Image from "next/image";
import { useState } from "react";
import Asset2 from "@/assets/images/asset2.svg";
import ActionButton from "./ActionButton";

const moramit = Moramit({ src: "./../assets/fonts/Moramit.otf" });

const livvic400 = Livvic({
  subsets: ["latin"],
  weight: "400",
});

const tabs = ["Education", "Life", "Nice-to-knows"];

const AboutMe = () => {
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  return (
    <div
      id="aboutme"
      style={{
        scrollMarginTop: "60px",
      }}
    >
      <article className={styles.aboutmeWrapper}>
        <div className={styles.aboutmeContent}>
          <div className={styles.bg}>
            <Image src={Asset2} alt="Asset 2" />
          </div>
          <motion.div
            className={styles.image}
            initial={{ opacity: 0, translateX: -100 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            viewport={{ once: true }}
          >
            <Image src={Logo} alt="Logo pdc" width={320} height={320} />
          </motion.div>
          <div className={styles.aboutmeTextContent}>
            <motion.p
              className={livvic400.className + " " + styles.preTitle}
              initial={{ opacity: 0, translateX: 100 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              A bit
            </motion.p>
            <motion.h1
              className={moramit.className}
              initial={{ opacity: 0, translateX: 100 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              about me
            </motion.h1>
            <motion.ul
              className={styles.tabs}
              initial={{ opacity: 0, translateX: 100 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <li
                onClick={() => setCurrentTab("Education")}
                style={
                  currentTab === "Education"
                    ? { borderBottom: "2px solid #3b43f2" }
                    : {}
                }
              >
                Education
              </li>
              <li
                onClick={() => setCurrentTab("Life")}
                style={
                  currentTab === "Life"
                    ? { borderBottom: "2px solid #3b43f2" }
                    : {}
                }
              >
                Life
              </li>
              <li
                onClick={() => setCurrentTab("Nice-to-knows")}
                style={
                  currentTab === "Nice-to-knows"
                    ? { borderBottom: "2px solid #3b43f2" }
                    : {}
                }
              >
                Nice-to-knows
              </li>
            </motion.ul>
            <motion.div
              className={livvic400.className + " " + styles.text}
              initial={{ opacity: 0, translateX: 100 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ delay: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {currentTab === "Education" ? (
                <motion.p
                  initial={{ opacity: 0, translateX: 100 }}
                  whileInView={{ opacity: 1, translateX: 0 }}
                  transition={{ ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  I&apos;ve had 5 years of experience studying Applied
                  Informatics - with a heavy focus on front-end development.
                  Right before finishing my final internship, I had doubts about
                  continuing this path, so I took a break from it all. I took a
                  1 year break to think about it, only to realize that starting
                  a career as a front-end developer is truly where my passion
                  lies. I have no degree, but I have tons of enthusiasm and
                  know-how to get back into the game!
                </motion.p>
              ) : null}
              {currentTab === "Life" ? (
                <motion.p
                  initial={{ opacity: 0, translateX: 100 }}
                  whileInView={{ opacity: 1, translateX: 0 }}
                  transition={{ ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  Life text
                </motion.p>
              ) : null}
              {currentTab === "Nice-to-knows" ? (
                <motion.p
                  initial={{ opacity: 0, translateX: 100 }}
                  whileInView={{ opacity: 1, translateX: 0 }}
                  transition={{ ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  They say the human body is 80% water. Well, mine is a little
                  different. It&apos;s 79% water, 1% titanium, and 20% sheer
                  determination to never back down. Because who needs a flexible
                  spine when you&apos;ve got a titanium one, right?
                </motion.p>
              ) : null}
            </motion.div>
            <motion.div
              className={styles.buttonWrapper}
              initial={{ opacity: 0, translateX: 100 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ delay: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <a
                className={styles.button}
                href="https://drive.google.com/uc?export=download&id=1i0xDKTci6SUYoqeVndAMgkHFMss_9cx0"
              >
                Download CV
              </a>
            </motion.div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default AboutMe;
