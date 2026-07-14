import React from "react";
import styles from "./Contact.module.css";
import emailIcon from "../../assets/contact/emailIcon.png";
import linkedinIcon from "../../assets/contact/linkedinIcon.png";
import githubIcon from "../../assets/contact/githubIcon.png";

export const Contact = () => (
  <footer id="contact" className={styles.container}>
    <div className={styles.text}><h2>Let's connect</h2><p>Have an idea or opportunity? Reach out.</p></div>
    <ul className={styles.links}>
      <li className={styles.link}><img src={emailIcon} alt="Email" /><a href="mailto:vanshieverma@gmail.com">vanshieverma@gmail.com</a></li>
      <li className={styles.link}><img src={linkedinIcon} alt="LinkedIn" /><a href="https://www.linkedin.com/in/vanshieverma" target="_blank" rel="noreferrer">linkedin.com/in/vanshieverma</a></li>
      <li className={styles.link}><img src={githubIcon} alt="GitHub" /><a href="https://www.github.com/vanshieverma" target="_blank" rel="noreferrer">github.com/vanshieverma</a></li>
    </ul>
  </footer>
);
