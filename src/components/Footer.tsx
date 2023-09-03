import styles from "@/styles/Footer.module.css";
import { Livvic } from "next/font/google";
import { BiLogoGithub, BiLogoInstagram, BiLogoLinkedin } from "react-icons/bi";
import Navigation from "./Navigation";
import SocialMediaLink from "./SocialMediaLink";

const livvic400 = Livvic({
  subsets: ["latin"],
  weight: "400",
});

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Navigation />
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
      <p className={livvic400.className + " " + styles.bottomtext}>
        Developed by myself. Designed by my brother. &copy; pdc 2023. All rights
        reserved
      </p>
    </footer>
  );
};

export default Footer;
