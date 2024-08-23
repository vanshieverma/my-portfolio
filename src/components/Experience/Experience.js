import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";
import serverIcon from "../../assets/history/serverIcon.png";
import cursorIcon from "../../assets/history/cursorIcon.png";
import uiIcon from "../../assets/history/uiIcon.png";
import html from "../../assets/skills/html.png";
import css from "../../assets/skills/css.png";
import javascript from "../../assets/skills/javascript.png";
import java from "../../assets/skills/java.png";
import kotlin from "../../assets/skills/kotlin.png";
import ireact from "../../assets/skills/ireact.png";
import php from "../../assets/skills/php.png";
import python from "../../assets/skills/python.png";
import sql from "../../assets/skills/sql.png";

export const Experience = () => {
  const skillImages = {
    html: html,
    css: css,
    python: python,
    php: php,
    kotlin: kotlin,
    java: java,
    javascript: javascript,
    sql: sql,
    ireact: ireact
  };

  const historyImages = {
    server: serverIcon,
    cursor: cursorIcon,
    ui: uiIcon
  };
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img
                    src={skillImages[skill.imageSrc]} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={historyImages[historyItem.imageSrc]} />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}`}</h3>
                  <p>{`${historyItem.description} `}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
