import React from "react";
import styles from "./index.module.css";
import img1 from "../../assets/card/img1.png";
import img2 from "../../assets/card/img2.png";
import img3 from "../../assets/card/img3.png";
import img4 from "../../assets/card/img4.png";

export const cardData = [
  { id: 1, img: img1, title: "logo", text: "Web Developer" },
  { id: 1, img: img2, title: "logo", text: "React Developer" },
  { id: 1, img: img3, title: "logo", text: "Backend Developer" },
  { id: 1, img: img4, title: "logo", text: "MongoDB Developer" },
];

const AboutCard = ({ img, title, text, cardData }) => {
  return (
    <div className={styles.card}>
      <div className={styles.animateBox}>
        <div className={styles.box}>
          <div className={styles.content}>
            <img src={img} alt={title} />
            <h3>{text}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
