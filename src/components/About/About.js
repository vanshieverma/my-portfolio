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
          className={styles.aboutImage}
        />
        <div className={styles.aboutItem}>
          <h3>About me</h3>
          <p>
            Hi there! I'm a 4th-year Computer Science and Engineering student who loves creating things—whether it's a sleek web app or a fun Android game.
            This portfolio is a little showcase of what I can do, and guess what? I made this entire site myself! I'm passionate about coding, always learning, and excited about the future. Thanks for stopping by!
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

