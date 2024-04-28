"use client";

import Me from "@/assets/images/Me.png";
import Asset1 from "@/assets/images/asset1.svg";
import styles from "@/styles/Hero.module.css";
import { motion } from "framer-motion";
import Moramit from "next/font/local";
import Image from "next/image";
import { useEffect, useState } from "react";
import { TbTriangleInverted } from "react-icons/tb";

const moramit = Moramit({ src: "./../assets/fonts/Moramit.otf" });

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
      <div className={styles.heroContent}>
        <div className={styles.bg}>
          <Image src={Asset1} alt="Asset 1" width={990} />
        </div>
        <div className={styles.pictureWrapper}>
          <motion.div
            className={styles.heroPicture}
            initial={{ opacity: 0, translateX: 100 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ ease: "easeOut" }}
          >
            <Image
              className={styles.picture}
              src={Me}
              alt="Profile picture of Peter De Clercq"
              width={375}
              height={375}
            />
          </motion.div>
        </div>
        <div className={styles.text}>
          <motion.div
            className={`${styles.preTitle}`}
            initial={{ opacity: 0, translateX: -100 }}
            whileInView={{ opacity: 1, translateX: 0 }}
          >
            Hello
          </motion.div>
          <motion.div
            className={`${moramit.className} ${styles.name}`}
            initial={{ opacity: 0, translateX: -100 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ delay: 0.2 }}
          >
            I&apos;m Peter
          </motion.div>
          <motion.p
            initial={{ opacity: 0, translateX: -100 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ delay: 0.4 }}
          >
            I&apos;m a self-taught Frontend Web/App Developer looking for a
            junior position where I can help craft solid frontend products
            with great user experiences.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, translateX: -100 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.a
              href="#form"
              className={styles.button}
              whileHover={{ scale: 1.1 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </div>
      </div>
      <a
        className={styles.seeMore}
        href="#aboutme"
        style={{ opacity: seeMoreOpacity }}
      >
        <TbTriangleInverted size={20} />
      </a>
    </article>
  );
};

export default Hero;
