"use client"

import styles from "@/styles/Navigation.module.css";
import { Dispatch, FC, SetStateAction } from "react";

type NavigationProps = {
  setMobileMenuOpen?: Dispatch<SetStateAction<boolean>>
}

const Navigation: FC<NavigationProps> = ({ setMobileMenuOpen }) => {
  const handleClick = () => {
    if (setMobileMenuOpen) {
      setMobileMenuOpen(false)
    }
  }
  return (
    <nav className={styles.navigation}>
      <a onClick={handleClick} className={styles.link} href="#aboutme">About</a>
      <a onClick={handleClick} className={styles.link} href="#experience">Experience</a>
      <a onClick={handleClick} className={styles.link} href="#portfolio">Portfolio</a>
      <a onClick={handleClick} className={styles.link} href="#form">Contact</a>
    </nav>
  );
};

export default Navigation;
