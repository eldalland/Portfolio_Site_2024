import React, { useState, useEffect, useRef } from "react";
import styles from "./Projects.module.css";
import coc from "../Images/Frame1.png";
import EFrame1 from "../Images/ebframe1.png";
import EFrame2 from "../Images/ebframe2.png";
import EFrame3 from "../Images/ebframe4.png";
import EFrame4 from "../Images/ebframe5.png";
import EFrame5 from "../Images/ebframe6.png";
import EFrame6 from "../Images/ebframe7.png";

const AnimatedEB = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const hoverRef = useRef(null);

  const images = [
    EFrame1,
    EFrame2,
    EFrame3,
    EFrame4,
    EFrame5,
    EFrame6
  
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
        alt="Egg Bounce Web Game"
        className={styles.img2}
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

export default AnimatedEB;
