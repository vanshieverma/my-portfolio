import React from "react";
import styles from "./Contact.module.css";
import emailIcon from "../../assets/contact/emailIcon.png";
import linkedinIcon from "../../assets/contact/linkedinIcon.png";
import githubIcon from "../../assets/contact/githubIcon.png";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact me!</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} />
          <a href="mailto:vanshieverma@email.com">vanshieverma@email.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={linkedinIcon} />
          <a href="https://www.linkedin.com/vanshieverma">linkedin.com/vanshieverma</a>
        </li>
        <li className={styles.link}>
          <img src={githubIcon} />
          <a href="https://www.github.com/vanshieverma">github.com/vanshieverma</a>
        </li>
      </ul>
    </footer>
  );
};
