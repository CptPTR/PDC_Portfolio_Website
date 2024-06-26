"use client";

import Logo_ChakraUI from "@/assets/icons/chakraui.svg";
import Logo_NextJS from "@/assets/icons/nextjs.svg";
import Logo_React from "@/assets/icons/react.svg";
import Logo_TypeScript from "@/assets/icons/typescript.svg";
import Logo_Vue from "@/assets/icons/vue.svg";
import Logo_MUI from "@/assets/icons/mui.svg";
import Logo_Vite from "@/assets/icons/vite.svg";
import Logo_GraphQL from "@/assets/icons/graphql.svg";
import Logo_Pinia from "@/assets/icons/pinia.svg";
import Logo_PrimeVue from "@/assets/icons/primevue.svg";
import Logo_TailwindCSS from "@/assets/icons/tailwindcss.png";
import styles from "@/styles/TechCarousel.module.css";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import Image from "next/image";

const TechCarousel = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: false, duration: 5, skipSnaps: true },
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
          <Image src={Logo_NextJS} alt="Next.js logo" height={50} title="Next.js" />
        </div>
        <div className={styles.slide}>
          <Image src={Logo_React} alt="React logo" height={50} title="React" />
        </div>
        <div className={styles.slide}>
          <Image src={Logo_Vue} alt="Vue.js logo" height={50} title="Vue.js" />
        </div>
        <div className={styles.slide}>
          <Image src={Logo_Pinia} alt="Pinia logo" height={50} title="Pinia" />
        </div>
        <div className={styles.slide}>
          <Image src={Logo_PrimeVue} alt="PrimeVue logo" height={50} title="PrimeVue" />
        </div>
        <div className={styles.slide}>
          <Image src={Logo_TailwindCSS} alt="TailwindCSS logo" width={50} title="TailwindCSS" />
        </div>
        <div className={styles.slide}>
          <Image src={Logo_TypeScript} alt="TypeScript logo" height={50} title="TypeScript" />
        </div>
        <div className={styles.slide}>
          <Image src={Logo_ChakraUI} alt="ChakraUI logo" height={50} title="ChakraUI" />
        </div>
        <div className={styles.slide}>
          <Image src={Logo_MUI} alt="MaterialUI logo" height={50} title="MaterialUI" />
        </div>
        <div className={styles.slide}>
          <Image src={Logo_Vite} alt="Vite logo" height={50} title="Vite" />
        </div>
        <div className={styles.slide}>
          <Image src={Logo_GraphQL} alt="GraphQL logo" height={50} title="GraphQL" />
        </div>
      </div>
    </motion.div>
  );
};

export default TechCarousel;
