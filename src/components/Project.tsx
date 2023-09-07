"use client";

import styles from "@/styles/Project.module.css";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import ProjectCarousel from "./ProjectCarousel";

type ProjectPropTypes = {
  frontImage: StaticImageData;
  carouselImages: StaticImageData[];
  link: string;
  date: string;
  title: string;
  time: string;
  client: string;
  mainTech: {
    name: string;
    logo: any;
  };
  type: string;
  designedBy: string;
};

const Project: React.FC<ProjectPropTypes> = ({
  frontImage,
  carouselImages,
  link,
  date,
  title,
  time,
  client,
  mainTech,
  type,
  designedBy,
}) => {
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
              frontImage={frontImage}
              carouselImages={carouselImages}
              link={link}
              title={title}
              time={time}
              client={client}
              mainTech={mainTech}
              type={type}
              designedBy={designedBy}
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
          <Image src={frontImage} alt={title} />
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
