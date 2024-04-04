import React, { useState, useEffect, useRef } from "react";
import styles from "./Projects.module.css";
import AnimatedCoC from "../AnimatedCoC";

const Card1 = () => {
  return (
    <>
      <div className={styles.card} >
        <div className={styles.cardbox}>
          <div className={styles.cardcontainer}>
            <div className={styles.textcontainer}>
              <div className={styles.textdiv}>
                <div className={styles.header}>
                  Portfolio Site <br></br>
                  Chane of Command
                </div>
                <div className={styles.p}>
                  Portfolio site built for founder of NYC based <br></br>
                  events production company Chane of Command.
                </div>
              </div>

              <div className={styles.buttondiv}>
                <a href="https:\\www.chaneofcommand.com">
                  <button className={styles.button}>VISIT SITE</button>
                </a>
              </div>
            </div>
            <AnimatedCoC />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card1;
