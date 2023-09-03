"use client";

import WEV_Logo from "@/assets/images/WEV_Logo.jpg";
import BUFFL_Logo from "@/assets/images/buffl.svg";
import Minze_Logo from "@/assets/images/minze.png";
import styles from "@/styles/Experiences.module.css";
import { motion } from "framer-motion";
import { Livvic } from "next/font/google";
import Moramit from "next/font/local";
import Image from "next/image";

const moramit = Moramit({ src: "./../assets/fonts/Moramit.otf" });

const livvic400 = Livvic({
  subsets: ["latin"],
  weight: "400",
});

const livvic500 = Livvic({
  subsets: ["latin"],
  weight: "500",
});

const experiences: {
  id: number;
  business: string;
  as: string;
  description: string;
  logo: any;
}[] = [
  {
    id: 1,
    business: "BUFFL",
    as: "Internship",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, eius a natus placeat nostrum totam quod facere obcaecati eum aperiam, ad dicta? Eaque nostrum impedit quaerat aliquid, animi vero saepe.",
    logo: BUFFL_Logo,
  },
  {
    id: 2,
    business: "Minze",
    as: "Tester",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, eius a natus placeat nostrum totam quod facere obcaecati eum aperiam, ad dicta? Eaque nostrum impedit quaerat aliquid, animi vero saepe.",
    logo: Minze_Logo,
  },
  {
    id: 3,
    business: "WoonExpertVlaanderen",
    as: "Developer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, eius a natus placeat nostrum totam quod facere obcaecati eum aperiam, ad dicta? Eaque nostrum impedit quaerat aliquid, animi vero saepe.",
    logo: WEV_Logo,
  },
];

const Experiences = () => {
  return (
    <div
      id="experience"
      style={{
        scrollMarginTop: "60px",
      }}
    >
      <article className={styles.experiencesWrapper}>
        <div id="experiences" className={styles.experiencesContent}>
          <div className={styles.experiencesTextContent}>
            <motion.p
              className={livvic400.className + " " + styles.preTitle}
              initial={{ opacity: 0, translateY: 100 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Previous
            </motion.p>
            <motion.h1
              className={moramit.className}
              initial={{ opacity: 0, translateY: 100 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              experience
            </motion.h1>
            <motion.p
              className={livvic400.className + " " + styles.text}
              initial={{ opacity: 0, translateY: 100 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              I&apos;ve been fortunate to have learned from senior ex-colleagues
              <br />
              about creating meaningful digital experiences
            </motion.p>
          </div>
          <div className={styles.businesses}>
            {experiences.map((experience) => (
              <motion.div
                key={experience.id}
                className={styles.experience}
                initial={{ opacity: 0, translateY: 100 }}
                whileInView={{
                  opacity: 1,
                  translateY: experience.id == 2 ? -40 : 0,
                }}
                transition={{ delay: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className={styles.logoWrapper}>
                  <Image
                    src={experience.logo}
                    alt={experience.business}
                    width={150}
                  />
                </div>

                <h2 className={livvic500.className}>{experience.as}</h2>
                <p className={livvic400.className}>{experience.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};

export default Experiences;
