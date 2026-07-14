import React from "react";
import styles from "./Hero.module.css";
import heroImage from "../../assets/hero/heroImage.png";

export const Hero = () => (
  <section className={styles.container}>
    <div className={styles.content}>
      <h1 className={styles.title}>Hi, I'm Vanshika</h1>
      <p className={styles.description}>
        Generative AI Analyst and Software Engineer building reliable AI
        workflows, APIs, and full-stack products.
      </p>
      <a href="mailto:vanshieverma@gmail.com" className={styles.contactBtn}>Contact Me</a>
    </div>
    <img src={heroImage} className={styles.heroImg} alt="Vanshika Verma" />
  </section>
);
