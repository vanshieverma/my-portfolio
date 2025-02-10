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
          Hi there! As a developer at a software company, I am passionate about creating seamless digital experiences. Currently working with C# .NET Core for backend and React for frontend, I enjoy building both robust systems and intuitive user interfaces. My journey has given me the chance to tackle diverse projects and continuously grow my skills. I’m always excited to take on new challenges and create meaningful solutions through technology.
          </p><div className={styles.resumeBtn}>
            <a href="https://www.linkedin.com/in/vanshieverma"
              className={styles.contactBtn}>Visit my LinkedIn</a></div>
        </div>
      </div>
    </section>
  );
};

