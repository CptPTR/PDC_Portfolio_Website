import AboutMe from "@/components/AboutMe";
import Divider from "@/components/Divider";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import TechStack from "@/components/TechStack";
import { Livvic } from "next/font/google";
import styles from "./page.module.css";

const livvic400 = Livvic({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <>
      <Header />
      <main className={livvic400.className}>
        <div className={styles.mainWrapper}>
          <Hero />
          <AboutMe />
          <Divider />
          <Experiences />
          <Portfolio />
          <TechStack />
          <Divider />
          <Form />
          <Footer />
        </div>
      </main>
    </>
  );
}
