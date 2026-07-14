import React from "react";
import styles from "./About.module.css";
import aboutImage from "../../assets/about/aboutImage.png";

export const About = () => (
  <section className={styles.container} id="about">
    <h2 className={styles.title}>About Me</h2>
    <div className={styles.content}>
      <img src={aboutImage} className={styles.aboutImage} alt="Developer at work" />
      <div className={styles.aboutItem}>
        <h3>Engineer. AI practitioner. Problem solver.</h3>
        <p>
          I work at the intersection of generative AI and software engineering.
          My experience spans LLM evaluation and prompt engineering, AI voice
          automation, REST APIs, and full-stack applications built with Python,
          FastAPI, C#, ASP.NET Core, and React. I enjoy turning complex workflows
          into useful, dependable products.
        </p>
        <div className={styles.resumeBtn}>
          <a href={`${process.env.PUBLIC_URL}/Vanshika_Verma_Resume.pdf`}
            className={styles.contactBtn} target="_blank" rel="noreferrer">View my resume</a>
        </div>
      </div>
    </div>
  </section>
);
