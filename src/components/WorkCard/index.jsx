import React from "react";
import styles from "./index.module.css";

const WorkCard = ({ src, title, heading, para, span1, span2, span3, icon }) => {
  return (
    <>
      <div className={styles.WorkCard}>
        <div className={styles.workCont}>
          <div className={styles.imgCont}>
            <img src={src} alt={title} />
            <div className={styles.hideCont}>
              <div className={styles.icon}>
                <div className={styles.brouser}>{icon}</div>
              </div>
              <div className={styles.text}>
                <div className={styles.heading}>{heading}</div>
                <div className={styles.para}>{para}</div>
                <span>{span1}</span>
                <span>{span2}</span>
                <span>{span3}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.hoverName}>Hover to play</div>
    </>
  );
};

export default WorkCard;
