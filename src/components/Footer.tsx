import styles from "@/styles/Footer.module.css";
import { BiLogoGithub, BiLogoInstagram, BiLogoLinkedin } from "react-icons/bi";
import Navigation from "./Navigation";
import SocialMediaLink from "./SocialMediaLink";

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

      <div className={styles.bottom}>
        <p>
          Developed by myself.
        </p>
        <p>
          Designed by my brother.
        </p>
        <p>
          &copy; pdc 2023. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
