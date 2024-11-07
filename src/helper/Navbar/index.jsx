import React from "react";
import styles from "./index.module.css";
import Item from "./Item";
import Container from "../../ui/container";

const Navbar = () => {
  return (
    <Container>
      <nav>
        <div className={styles.logo}>
          {/* <span>A</span> */}
          <p>Ashish|Protfolio</p>
        </div>
        <ul className={styles.ul}>
          <Item name="Home" />
          <Item name="About" />
          <Item name="Work" />
          <Item name="Contact" />
        </ul>
      </nav>
    </Container>
  );
};

export default Navbar;
