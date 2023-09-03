"use client";

import styles from "@/styles/Project.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import ProjectCarousel from "./ProjectCarousel";

type ProjectPropTypes = {
  image: any;
  date: string;
  title: string;
};

const Project: React.FC<ProjectPropTypes> = ({ image, date, title }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOnProjectClick = () => {
    setModalOpen(true);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  return (
    <>
      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <ProjectCarousel
              image={image}
              title={title}
              setModalOpen={setModalOpen}
            />
          </div>
        </div>
      )}
      <motion.div
        className={styles.project}
        whileHover={{ scale: 1.1 }}
        onClick={handleOnProjectClick}
      >
        <div className={styles.image}>
          <Image src={image} alt={title} />
        </div>
        <motion.div className={styles.info} whileHover={{}}>
          <span className={styles.date}>{date}</span>
          <motion.span className={styles.title}>{title}</motion.span>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Project;
