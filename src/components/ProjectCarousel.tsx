"use client";

import styles from "@/styles/ProjectCarousel.module.css";
import useEmblaCarousel from "embla-carousel-react";
import Image, { StaticImageData } from "next/image";
import { Dispatch, SetStateAction } from "react";
import { MdOutlineClose } from "react-icons/md";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { GoClock, GoPerson, GoGear } from "react-icons/go";
import { FaPaintBrush } from "react-icons/fa";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import { Livvic } from "next/font/google";
import { HiOutlineLink } from "react-icons/hi";
import Link from "next/link";

const livvic400 = Livvic({
  subsets: ["latin"],
  weight: "400",
});

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
  frontImage,
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

      <div>
        <div ref={emblaRef} className={styles.embla}>
          <div className={styles.container}>
            {carouselImages.map((image, index) => (
              <div key={index} className={styles.slide}>
                <Image src={image} alt="" priority />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.modalFooter}>
        <div className={styles.projectInfo}>
          <div className={livvic400.className}>
            <GoPerson size={20} />
            <p>{client}</p>
          </div>
          <div className={livvic400.className}>
            <GoClock size={20} />
            <p>{time}</p>
          </div>
          <div className={livvic400.className}>
            <GoGear size={20} />
            <p>{type}</p>
          </div>
          <div className={livvic400.className + " " + styles.mainTech}>
            <Image src={mainTech.logo} alt={title} />
            <p>{mainTech.name}</p>
          </div>
          <div className={livvic400.className + " " + styles.mainTech}>
            <FaPaintBrush size={18} />
            <p>{designedBy}</p>
          </div>
        </div>
      </div>

      <div className={styles.emblaButtons}>
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
      <div className={styles.emblaDots}>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={
              (index === selectedIndex ? styles.emblaDotSelected : "") +
              " " +
              styles.emblaDot
            }
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
