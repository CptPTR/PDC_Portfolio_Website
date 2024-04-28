"use client";

import Logo from "@/assets/images/logo.svg";
import styles from "@/styles/Header.module.css";
import { motion, useScroll } from "framer-motion";
import { Livvic } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BiLogoGithub, BiLogoInstagram, BiLogoLinkedin } from "react-icons/bi";
import { MdClose, MdMenu } from "react-icons/md";
import Navigation from "./Navigation";
import SocialMediaLink from "./SocialMediaLink";

const livvic500 = Livvic({
  subsets: ["latin"],
  weight: "500",
});

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [prevScrollY, setPrevScrollY] = useState(0);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const newScrollY = window.scrollY;
      setScrollDirection(newScrollY > prevScrollY ? "down" : "up");
      setPrevScrollY(newScrollY);
      setScrollY(newScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  const headerHeight = scrollY === 0 || scrollDirection === "up" ? 60 : 30;

  const handleMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header id="header" className={livvic500.className}>
      <div
        className={styles.headerWrapper}
        style={{ height: `${headerHeight}px` }}
      >
        <div className={styles.logoNav}>
          <a href="#">
            <div className={styles.logo}>
              <Image
                src={Logo}
                alt="Logo pdc"
                height={scrollDirection === "up" ? 60 : 30}
              />
            </div>
          </a>
          <div className={styles.desktop}>
            {scrollDirection === "up" && <Navigation />}
          </div>
          <div className={styles.desktop}>
            {scrollDirection === "up" && (
              <div className={styles.socialMedia}>
                <SocialMediaLink
                  id="instagram"
                  link="https://www.instagram.com/pdc_2201/"
                  image={<BiLogoInstagram />}
                />
                <SocialMediaLink
                  id="github"
                  link="https://github.com/CptPTR"
                  image={<BiLogoGithub />}
                />
                <SocialMediaLink
                  id="linkedin"
                  link="https://www.linkedin.com/in/peter-de-clercq-888023206/"
                  image={<BiLogoLinkedin />}
                />
              </div>
            )}
          </div>
        </div>

        <div className={styles.hamburgerMenu}>
          {isMobileMenuOpen ? (
            <MdClose size={24} fill="lightseagreen" onClick={handleMenuToggle} />
          ) : (
            <MdMenu size={24} fill="lightseagreen" onClick={handleMenuToggle} />
          )}
        </div>
        {isMobileMenuOpen ? (
          <div
            className={styles.navMenuMobile}
            style={{ top: `${headerHeight}px` }}
          >
            <Navigation setMobileMenuOpen={setMobileMenuOpen} />
            <div className={styles.socialMedia}>
              <SocialMediaLink
                id="instagram"
                link="https://www.instagram.com/pdc_2201/"
                image={<BiLogoInstagram />}
              />
              <SocialMediaLink
                id="github"
                link="https://github.com/CptPTR"
                image={<BiLogoGithub />}
              />
              <SocialMediaLink
                id="linkedin"
                link="https://www.linkedin.com/in/peter-de-clercq-888023206/"
                image={<BiLogoLinkedin />}
              />
            </div>
          </div>
        ) : null}
      </div>
      <motion.div
        className={styles.progressBar}
        style={{
          scaleX: scrollYProgress,
          position: "absolute",
          top: headerHeight,
        }}
      />
    </header>
  );
};

export default Header;
