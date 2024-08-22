import React from "react";
import styles from "./About.module.css";


import aboutImage from "../../assets/about/aboutImage.png";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={aboutImage}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <div className={styles.aboutItem}>
          <h3>About me</h3>
          <p>
            I am 21 year old software developer currently doing my B.Tech in Computer Science & Engineering.
            Click below to download my resume.
          </p><div className={styles.resumeBtn}>
            <a href="https://docs.google.com/document/d/1DU3qesTnvtBOxMY9b4ccouqYxIOWzZNaZP2aiVyKfvo/edit?usp=sharing"
              className={styles.contactBtn}>
              My Resume
            </a></div>
        </div>
      </div>
    </section>
  );
};

