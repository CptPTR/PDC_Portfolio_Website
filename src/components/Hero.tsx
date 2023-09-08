"use client";

import Me from "@/assets/images/Me.png";
import Asset1 from "@/assets/images/asset1.svg";
import styles from "@/styles/Hero.module.css";
import { motion } from "framer-motion";
import { Livvic } from "next/font/google";
import Moramit from "next/font/local";
import Image from "next/image";
import { useEffect, useState } from "react";
import { TbTriangleInverted } from "react-icons/tb";

const moramit = Moramit({ src: "./../assets/fonts/Moramit.otf" });

const livvic400 = Livvic({
  subsets: ["latin"],
  weight: "400",
});

const Hero = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [seeMoreOpacity, setSeeMoreOpacity] = useState(1);

  useEffect(() => {
    const handleSeeMoreVisibilityOnScroll = () => {
      const currentScrollPos = window.scrollY;

      const newOpacity = Math.max(1 - currentScrollPos / 650, 0);
      setSeeMoreOpacity(newOpacity);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleSeeMoreVisibilityOnScroll);
    return () => {
      window.removeEventListener("scroll", handleSeeMoreVisibilityOnScroll);
    };
  }, [prevScrollPos, seeMoreOpacity]);

  return (
    <article className={styles.heroWrapper}>
      <a
        className={styles.seeMore}
        href="#aboutme"
        style={{ opacity: seeMoreOpacity }}
      >
        <p className={livvic400.className}>Get to know me better</p>
        <TbTriangleInverted size={30} />
      </a>

      <div className={styles.heroContent}>
        <div className={styles.bg}>
          <Image src={Asset1} alt="Asset 1" width={990} />
        </div>

        <div id="hero" className={styles.hero}>
          <div>
            <motion.p
              className={livvic400.className + " " + styles.preTitle}
              initial={{ opacity: 0, translateX: -100 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Hello
            </motion.p>
            <motion.h1
              className={moramit.className}
              initial={{ opacity: 0, translateX: -100 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              I&apos;m Peter
            </motion.h1>
            <motion.p
              className={livvic400.className + " " + styles.text}
              initial={{ opacity: 0, translateX: -100 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              I&apos;m a self-thought Frontend Web/App Developer looking for a
              junior position where I can help craft solid frontend products
              with great user experiences.
            </motion.p>
            <motion.div
              className={styles.buttonWrapper}
              initial={{ opacity: 0, translateX: -100 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.a
                className={styles.button}
                href="#form"
                whileHover={{ scale: 1.1 }}
              >
                Contact Me
              </motion.a>
            </motion.div>
          </div>
          <motion.div
            className={styles.heroPicture}
            initial={{ opacity: 0, translateX: 100 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image
              src={Me}
              alt="Profile picture of Peter De Clercq"
              width={375}
              height={375}
              style={{
                marginLeft: "30px",
                borderRadius: 420,
                boxShadow: "40px 2px 80px #00000080",
              }}
            />
          </motion.div>
        </div>
      </div>
    </article>
  );
};

export default Hero;
