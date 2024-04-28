"use client";

import { sendMail } from "@/app/actions";
import Asset4 from "@/assets/images/asset4.svg";
import styles from "@/styles/Form.module.css";
import { motion } from "framer-motion";
import { Livvic } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import ActionButton from "./ActionButton";

const livvic400 = Livvic({
  subsets: ["latin"],
  weight: "400",
});

const livvic700 = Livvic({
  subsets: ["latin"],
  weight: "700",
});

const Form = () => {
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = () => {
    setFormSent(true);
  };

  return (
    <div
      style={{
        scrollMarginTop: "200px",
      }}
    >
      <article id="form" className={`${styles.contactFormWrapper}`}>
        <div className={styles.contactFormContent}>
          <div className={styles.bg}>
            <Image src={Asset4} alt="asset 4" />
          </div>

          <h3 className={livvic700.className}>
            Feel free to contact me and say hello!
          </h3>

          <motion.form
            action={sendMail}
            onSubmit={handleSubmit}
            className={styles.contactForm}
            initial={{ opacity: 0, translateY: 100 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.1, x: { duration: 1 } }}
          >
            {!formSent ? (
              <>
                <input
                  type="text"
                  name="sender_name"
                  placeholder="Your name"
                  className={livvic400.className}

                />
                <input
                  type="email"
                  name="sender_email"
                  placeholder="E-mail address"
                  className={livvic400.className}


                />
                <textarea
                  id="message"
                  name="sender_message"
                  placeholder="Your message here.."
                  className={livvic400.className}

                ></textarea>
                <ActionButton text="Send Message" />
              </>
            ) : (
              <p className={styles.formSentText}>
                Thank you for reaching out! <br />I will get back to you very
                soon!
              </p>
            )}
          </motion.form>
        </div>
      </article>
    </div>
  );
};

export default Form;
