"use client";

import Logo_ChakraUI from "@/assets/icons/chakraui.svg";
import Logo_NextJS from "@/assets/icons/nextjs.svg";
import Logo_React from "@/assets/icons/react.svg";
import Logo_TypeScript from "@/assets/icons/typescript.svg";
import Logo_Vue from "@/assets/icons/vue.svg";
import styles from "@/styles/TechCarousel.module.css";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import Image from "next/image";

const TechCarousel = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: false, duration: 25, skipSnaps: true },
    [Autoplay()]
  );

  return (
    <motion.div
      className={styles.embla}
      ref={emblaRef}
      initial={{ opacity: 0, translateY: 100 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ delay: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className={styles.container}>
        <div className={styles.slide}>
          <Image src={Logo_NextJS} alt="NextJS logo" width={100} />
        </div>
        <div className={styles.slide}>
          <Image src={Logo_React} alt="ReactJS logo" width={100} />
        </div>
        <div className={styles.slide}>
          <Image src={Logo_Vue} alt="VueJS logo" width={100} />
        </div>
        <div className={styles.slide}>
          <Image src={Logo_ChakraUI} alt="ChakraUI logo" width={100} />
        </div>
        <div className={styles.slide}>
          <Image src={Logo_TypeScript} alt="TypeScript logo" width={100} />
        </div>
        <div className={styles.slide}>
          <Image src={Logo_NextJS} alt="NextJS logo" width={100} />
        </div>
        <div className={styles.slide}>
          <Image src={Logo_React} alt="ReactJS logo" width={100} />
        </div>
        <div className={styles.slide}>
          <Image src={Logo_Vue} alt="VueJS logo" width={100} />
        </div>
        <div className={styles.slide}>
          <Image src={Logo_ChakraUI} alt="ChakraUI logo" width={100} />
        </div>
        <div className={styles.slide}>
          <Image src={Logo_TypeScript} alt="TypeScript logo" width={100} />
        </div>
      </div>
    </motion.div>
  );
};

export default TechCarousel;
