import React from "react";
import styles from "./index.module.css";

const Home_rightCard = ({ src, title }) => {
  return (
    <div className={styles.Home_rightCard}>
      <div className={styles.imgCont}>
        <img src={src} alt={title} />
      </div>
    </div>
  );
};

export default Home_rightCard;
