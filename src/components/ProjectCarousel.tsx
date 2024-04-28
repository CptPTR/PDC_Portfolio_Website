"use client";

import styles from "@/styles/ProjectCarousel.module.css";
import useEmblaCarousel from "embla-carousel-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import { FaPaintBrush } from "react-icons/fa";
import { GoClock, GoGear, GoPerson } from "react-icons/go";
import { HiOutlineLink } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";

enum PROJECT_INFO {
  CLIENT, TIME, TECH, DEV
}

type ProjectCarouselPropTypes = {
  frontImage: StaticImageData;
  carouselImages: StaticImageData[];
  link: string;
  title: string;
  time: string;
  client: string;
  mainTech: {
    name: string;
    logo: any;
  };
  type: string;
  designedBy: string;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
};

const ProjectCarousel: React.FC<ProjectCarouselPropTypes> = ({
  carouselImages,
  link,
  title,
  time,
  client,
  mainTech,
  type,
  designedBy,
  setModalOpen,
}) => {
  const [currentProjectInfo, setCurrentProjectInfo] = useState(PROJECT_INFO.CLIENT)
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    skipSnaps: true,
  });
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const handleOnCloseClick = () => {
    setModalOpen(false);
  };

  return (
    <div style={{ position: "relative" }}>
      <div className={styles.modalHeader}>
        <h4 className={styles.projectTitle}>
          <Link href={link} target="_blank">
            <HiOutlineLink size={18} />
          </Link>
          <p>{title}</p>
        </h4>
        <div className={styles.modalCloseBtn} onClick={handleOnCloseClick}>
          <MdOutlineClose fill="white" size={24} />
        </div>
      </div>

      <div className={styles.emblaWrapper}>
        <div className={styles.emblaButtons}>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
        <div className={styles.emblaDots}>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`${(index === selectedIndex ? styles.emblaDotSelected : '')} ${styles.emblaDot}`}
            />
          ))}
        </div>
        <div ref={emblaRef} className={styles.embla}>
          <div className={styles.container} >
            {carouselImages.map((image, index) => (
              <div key={index} className={styles.slide}>
                <Image src={image} alt="" priority />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.modalFooter}>
        <div className={styles.projectInfoButtons}>
          <div onClick={() => setCurrentProjectInfo(PROJECT_INFO.CLIENT)}>
            <GoPerson size={20} color={currentProjectInfo === PROJECT_INFO.CLIENT ? 'gold' : ''} />
          </div>
          <div onClick={() => setCurrentProjectInfo(PROJECT_INFO.TIME)}>
            <GoClock size={20} color={currentProjectInfo === PROJECT_INFO.TIME ? 'gold' : ''} />
          </div>
          <div onClick={() => setCurrentProjectInfo(PROJECT_INFO.TECH)}>
            <GoGear size={20} color={currentProjectInfo === PROJECT_INFO.TECH ? 'gold' : ''} />
          </div>
          <div onClick={() => setCurrentProjectInfo(PROJECT_INFO.DEV)}>
            <FaPaintBrush size={18} color={currentProjectInfo === PROJECT_INFO.DEV ? 'gold' : ''} />
          </div>
        </div>
        <div className={styles.projectInfo}>
          <div className={styles.content}>
            {
              currentProjectInfo === PROJECT_INFO.CLIENT ? (<p>{client}</p>) : null
            }
            {
              currentProjectInfo === PROJECT_INFO.TIME ? (<p>{time}</p>) : null
            }
            {
              currentProjectInfo === PROJECT_INFO.TECH ? (
                <span className={styles.tech}>
                  <span>
                    {`${type}`}
                  </span>
                  <div className={styles.mainTech}>
                    <Image src={mainTech.logo} alt="tech logo" width={20} height={20} />
                    <span>{mainTech.name}</span>
                  </div>
                </span>
              ) : null
            }
            {
              currentProjectInfo === PROJECT_INFO.DEV ? (<p>{designedBy}</p>) : null
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;
