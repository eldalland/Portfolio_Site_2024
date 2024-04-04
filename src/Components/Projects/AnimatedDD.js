import React, { useState, useEffect, useRef } from "react";
import styles from "./Projects.module.css";
import coc from "../Images/Frame1.png";
import DFrame1 from "../Images/ddframe1.png";
import DFrame2 from "../Images/ddframe2.png";
import DFrame3 from "../Images/ddframe4.png";
import DFrame4 from "../Images/ddframe5.png";
import DFrame5 from "../Images/ddframe6.png";
import DFrame6 from "../Images/ddframe7.png";

const AnimatedDD = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const hoverRef = useRef(null);

  const images = [
    DFrame1,
    DFrame2,
    DFrame3,
    DFrame4,
    DFrame5,
    DFrame6
  
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
        alt="Dungeon Dweller Web Game"
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

export default AnimatedDD;
