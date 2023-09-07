import Buffl_1 from "@/assets/images/buffl_1.png";
import Oishii_1 from "@/assets/images/oishii_1.png";
import Personal_Portfolio_1 from "@/assets/images/personal_portfolio_1.png";
import styles from "@/styles/Portfolio.module.css";
import Moramit from "next/font/local";
import Project from "./Project";
import Logo_React_White from "@/assets/icons/react_white.svg";
import Logo_Wordpress_White from "@/assets/icons/wordpress_white.svg";
import Logo_NextJS_White from "@/assets/icons/nextjs_white.svg";

import BUFFL_1 from "@/assets/screenshots/BUFFL/buffl_1.png";
import BUFFL_2 from "@/assets/screenshots/BUFFL/buffl_2.png";
import BUFFL_3 from "@/assets/screenshots/BUFFL/buffl_3.png";
import BUFFL_4 from "@/assets/screenshots/BUFFL/buffl_4.png";
import BUFFL_5 from "@/assets/screenshots/BUFFL/buffl_5.png";
import BUFFL_6 from "@/assets/screenshots/BUFFL/buffl_6.png";
import BUFFL_7 from "@/assets/screenshots/BUFFL/buffl_7.png";
import BUFFL_8 from "@/assets/screenshots/BUFFL/buffl_8.png";
import BUFFL_9 from "@/assets/screenshots/BUFFL/buffl_9.png";
import BUFFL_10 from "@/assets/screenshots/BUFFL/buffl_10.png";

import OISHII_1 from "@/assets/screenshots/OISHII/OISHII_1.png";
import OISHII_2 from "@/assets/screenshots/OISHII/OISHII_2.jpg";
import OISHII_3 from "@/assets/screenshots/OISHII/OISHII_3.png";
import OISHII_4 from "@/assets/screenshots/OISHII/OISHII_4.png";
import OISHII_5 from "@/assets/screenshots/OISHII/OISHII_5.png";

import WEV_1 from "@/assets/screenshots/WEV/WEV_1.png";
import WEV_2 from "@/assets/screenshots/WEV/WEV_2.png";
import WEV_3 from "@/assets/screenshots/WEV/WEV_3.png";
import WEV_4 from "@/assets/screenshots/WEV/WEV_4.png";

import PORTFOLIO_1 from "@/assets/screenshots/PORTFOLIO/PORTFOLIO_1.png";
import PORTFOLIO_2 from "@/assets/screenshots/PORTFOLIO/PORTFOLIO_2.png";
import PORTFOLIO_3 from "@/assets/screenshots/PORTFOLIO/PORTFOLIO_3.png";
import PORTFOLIO_4 from "@/assets/screenshots/PORTFOLIO/PORTFOLIO_4.png";
import PORTFOLIO_5 from "@/assets/screenshots/PORTFOLIO/PORTFOLIO_5.png";
import PORTFOLIO_6 from "@/assets/screenshots/PORTFOLIO/PORTFOLIO_6.png";

const moramit = Moramit({ src: "./../assets/fonts/Moramit.otf" });

const Portfolio = () => {
  return (
    <div
      id="portfolio"
      style={{
        scrollMarginTop: "60px",
      }}
    >
      <article className={styles.portfolioWrapper}>
        <div id="portfolio" className={styles.portfolioContent}>
          <div className={styles.portfolioTextContent}>
            <h1 className={moramit.className}>My portfolio</h1>
            <p>
              A collection of all my projects created for myself or for real
              businesses.
            </p>
          </div>
        </div>
        <div className={styles.projects}>
          <Project
            frontImage={Oishii_1}
            carouselImages={[OISHII_1, OISHII_2, OISHII_3, OISHII_4, OISHII_5]}
            link="https://oishii-ten.vercel.app"
            date={new Date(2023, 12, 8).toDateString()}
            title="Oishii restaurant website (fake)"
            time="School hours"
            client="Peter De Clercq"
            mainTech={{
              name: "React",
              logo: Logo_React_White,
            }}
            type="Wireframes/Frontend Development"
            designedBy="Peter De Clercq"
          />
          <Project
            frontImage={Buffl_1}
            carouselImages={[
              BUFFL_1,
              BUFFL_2,
              BUFFL_3,
              BUFFL_4,
              BUFFL_5,
              BUFFL_6,
              BUFFL_7,
              BUFFL_8,
              BUFFL_9,
              BUFFL_10,
            ]}
            link="http://landing.buffl.be"
            date={new Date(2023, 12, 8).toDateString()}
            title="BUFFL landing website"
            time="2 months"
            client="BUFFL"
            mainTech={{
              name: "Wordpress / PHP",
              logo: Logo_Wordpress_White,
            }}
            type="Frontend Development"
            designedBy="BUFFL design team"
          />
          <Project
            frontImage={WEV_1}
            carouselImages={[WEV_1, WEV_2, WEV_3, WEV_4]}
            link="/"
            date={new Date(2023, 12, 8).toDateString()}
            title="WoonExpertVlaanderen - EPC/Asbestos certificate application"
            time="2 months"
            client="WoonExpertVlaanderen"
            mainTech={{
              name: "NextJS",
              logo: Logo_NextJS_White,
            }}
            type="Frontend / Backend (Supabase)"
            designedBy="Peter De Clercq"
          />
          <Project
            frontImage={PORTFOLIO_1}
            carouselImages={[
              PORTFOLIO_1,
              PORTFOLIO_2,
              PORTFOLIO_3,
              PORTFOLIO_4,
              PORTFOLIO_5,
              PORTFOLIO_6,
            ]}
            link="/"
            date={new Date(2023, 7, 28).toDateString()}
            title="Personal Portfolio"
            time="1 week"
            client="Peter De Clercq"
            mainTech={{
              name: "NextJS",
              logo: Logo_NextJS_White,
            }}
            type="Frontend Development"
            designedBy="Peter De Clercq"
          />
        </div>
      </article>
    </div>
  );
};

export default Portfolio;
