import React from "react";
import styles from "./Ver2.module.css";

const Ver2 = () => {
  return (
    <>
      <div className={styles.nav}>
        <div className={styles.div1}>
          <ul className={styles.ul}>
            <li className={styles.li}>About</li>
            <li className={styles.li}>Contact</li>
          </ul>
        </div>
        <div className={styles.div2}>
          <ul className={styles.ul}>
            <li className={styles.li}>Projects</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Ver2;
