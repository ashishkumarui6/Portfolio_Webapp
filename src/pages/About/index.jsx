import React from "react";
import Container from "../../ui/container";
import styles from "./index.module.css";
import AboutCard, { cardData } from "../../components/Aboutcard";
import Work_Comp from "../../components/Work_Comp";
import Skill from "../../components/Skill";
import MiniTitle from "../../shared/SectionTitle/MiniTitle";
import SectionTitle from "../../shared/SectionTitle";
import Content from "../../shared/Content";
import CustomContaienr from "../../ui/container/CustomContainer";

const data = [
  {
    id: 1,
    name: "I'm a skilled software developer with experience in Javascript and expertise in technologies like React, Node.js, Express and Three.js. I'm a quick learner and create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life",
  },
];

const About = () => {
  return (
    <Container>
      <CustomContaienr>
        <div className={styles.container}>
          <div>
            <MiniTitle name="Introduction" />
          </div>
          <div>
            <SectionTitle name="Overview." />
          </div>
          <Content
            width="66%"
            name="I'm a skilled software developer with experience in Javascript and expertise in technologies like React, Node.js, Express and Three.js. I'm a quick learner and create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life"
          />
          <div className={styles.card}>
            {cardData.map((it, index) => {
              return (
                <AboutCard
                  key={index}
                  img={it.img}
                  title={it.title}
                  text={it.text}
                />
              );
            })}
          </div>
        </div>
        <Work_Comp />
        <Skill />
      </CustomContaienr>
    </Container>
  );
};

export default About;
