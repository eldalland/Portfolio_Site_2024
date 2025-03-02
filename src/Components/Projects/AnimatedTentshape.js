import React, { useState, useEffect, useRef } from "react";
import styles from "./Projects.module.css";

import Frame1 from "../Images/tentshape1.png";

import Frame3 from "../Images/tentshape2.png";

import Frame6 from "../Images/tentshape3.png";

import Frame9 from "../Images/tentshape4.png";
import Frame10 from "../Images/tentshape5.png";

import diffFrame12 from "../Images/tentshapediff1.png";
import diffFrame15 from "../Images/tentshapediff2.png";
import diffFrame19 from "../Images/tentshapediff3.png";

const AnimatedTentshape = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const hoverRef = useRef(null);

  const images = [
    Frame1,

    Frame3,

    Frame6,

    Frame9,
    Frame10,
    diffFrame12,

    diffFrame15,

    diffFrame19,
  ];

  useEffect(() => {
    let intervalId;
    if (hoverRef.current && direction === 1 && index < images.length - 1) {
      intervalId = setInterval(() => {
        setIndex((prevIndex) => prevIndex + 1);
      }, 1);
    } else if (!hoverRef.current && direction === -1 && index > 0) {
      intervalId = setInterval(() => {
        setIndex((prevIndex) => prevIndex - 1);
      }, 1);
    }
    return () => clearInterval(intervalId);
  }, [index, direction, images.length]);

  return (
    <>
      <div
        alt="Chane of Command Website"
        className={styles.img}
        style={{
          backgroundImage: `url(${images[index]})`,
          transition: "background-image 0.5s",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
        onMouseEnter={() => {
          hoverRef.current = true;
          setDirection(1);
        }}
        onMouseLeave={() => {
          hoverRef.current = false;
          setDirection(-1);
        }}
      />
    </>
  );
};

export default AnimatedTentshape;
