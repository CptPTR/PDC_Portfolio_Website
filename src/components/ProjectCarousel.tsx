"use client";

import styles from "@/styles/ProjectCarousel.module.css";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { MdOutlineClose } from "react-icons/md";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";

type ProjectCarouselPropTypes = {
  image: string;
  title: string;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
};

const ProjectCarousel: React.FC<ProjectCarouselPropTypes> = ({
  image,
  title,
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
        <h4 className={styles.projectTitle}>{title}</h4>
        <div className={styles.modalCloseBtn} onClick={handleOnCloseClick}>
          <MdOutlineClose fill="white" size={24} />
        </div>
      </div>

      <div>
        <div ref={emblaRef} className={styles.embla}>
          <div className={styles.container}>
            <div className={styles.slide}>
              <Image src={image} alt="NextJS logo" />
            </div>
            <div className={styles.slide}>
              <Image src={image} alt="ReactJS logo" />
            </div>
            <div className={styles.slide}>
              <Image src={image} alt="VueJS logo" />
            </div>
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
