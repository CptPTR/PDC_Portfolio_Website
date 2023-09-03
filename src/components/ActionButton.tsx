"use client";

import styles from "@/styles/ActionButton.module.css";
import { motion } from "framer-motion";
import { Livvic } from "next/font/google";
import React from "react";

type ActionButtonPropTypes = {
  text: string;
};

const livvic400 = Livvic({
  subsets: ["latin"],
  weight: "400",
});

const ActionButton: React.FC<ActionButtonPropTypes> = ({ text }) => {
  const handleButtonClick = (e: any) => {
    e.preventDefault();
    // if (type === "download") {
    //   const link = document.createElement("a");
    //   link.href = "cv.pdf";

    //   link.download = "PDC_CV_2023.pdf";
    //   document.body.appendChild(link);
    //   link.click();
    //   document.body.removeChild(link);
    // }
  };

  return (
    <div className={styles.buttonWrapper}>
      <motion.button
        type="submit"
        className={styles.button + " " + livvic400.className}
        whileHover={{ scale: 1.1 }}
      >
        {text}
      </motion.button>
    </div>
  );
};

export default ActionButton;
