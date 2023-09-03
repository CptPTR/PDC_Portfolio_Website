"use client";

import styles from "@/styles/SocialMediaLink.module.css";
import { motion } from "framer-motion";
import React from "react";

type SocialMediaLinkPropTypes = {
  id: string;
  link: string;
  image: any;
};

const SocialMediaLink: React.FC<SocialMediaLinkPropTypes> = ({
  id,
  link,
  image,
}) => {
  return (
    <a id={id} href={link} className={styles.smLink} target="_blank">
      <motion.div
        className={styles.imageWrapper}
        whileHover={{
          scale: 1.15,
        }}
      >
        {image}
      </motion.div>
    </a>
  );
};

export default SocialMediaLink;
