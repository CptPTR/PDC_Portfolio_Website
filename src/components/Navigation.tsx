import styles from "@/styles/Navigation.module.css";
import { Livvic } from "next/font/google";

const livvic500 = Livvic({
  subsets: ["latin"],
  weight: "500",
});

const Navigation = () => {
  return (
    <nav className={styles.navigation + " " + livvic500.className}>
      <ul>
        <a href="#aboutme">About</a>
        <a href="#experience">Experience</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#form">Contact</a>
      </ul>
    </nav>
  );
};

export default Navigation;
