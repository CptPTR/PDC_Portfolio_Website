import Buffl_1 from "@/assets/images/buffl_1.png";
import Oishii_1 from "@/assets/images/oishii_1.png";
import Personal_Portfolio_1 from "@/assets/images/personal_portfolio_1.png";
import styles from "@/styles/Portfolio.module.css";
import Moramit from "next/font/local";
import Project from "./Project";

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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              magnam asperiores consequuntur vero, illum fugit possimus
              repellendus ea!
            </p>
          </div>
        </div>
        <div className={styles.projects}>
          <Project
            image={Oishii_1}
            date={new Date(2023, 12, 8).toDateString()}
            title="Oishii"
          />
          <Project
            image={Buffl_1}
            date={new Date(2023, 12, 8).toDateString()}
            title="BUFFL"
          />
          <Project
            image={Buffl_1}
            date={new Date(2023, 12, 8).toDateString()}
            title="WoonExpertVlaanderen"
          />
          <Project
            image={Personal_Portfolio_1}
            date={new Date(2023, 7, 28).toDateString()}
            title="Personal Portfolio"
          />
        </div>
      </article>
    </div>
  );
};

export default Portfolio;
