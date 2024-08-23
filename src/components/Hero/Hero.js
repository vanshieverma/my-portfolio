import React from "react";
import styles from "./Hero.module.css";
import heroImage from "../../assets/hero/heroImage.png";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Vanshika</h1>
        <p className={styles.description}>
          Coding enthusiast who built this portfolio from scratch—because why not make things fun and personal?
        </p>
        <a href="mailto:vanshieverma@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={heroImage}
        className={styles.heroImg}
      />
    </section>
  );
};
