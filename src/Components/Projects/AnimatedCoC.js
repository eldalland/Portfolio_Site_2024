import React, { useState, useEffect, useRef } from "react";
import styles from "./Projects.module.css";
import coc from "../Images/Frame1.png";
import Frame1 from "../Images/Frame1.png";
import Frame2 from "../Images/Frame2.png";
import Frame3 from "../Images/Frame3.png";
import Frame4 from "../Images/Frame4.png";
import Frame5 from "../Images/Frame5.png";
import Frame6 from "../Images/Frame6.png";
import Frame7 from "../Images/Frame7.png";
import Frame8 from "../Images/Frame8.png";
import Frame9 from "../Images/Frame9.png";
import Frame10 from "../Images/Frame10.png";
import Frame11 from "../Images/Frame1.png";
import Frame12 from "../Images/Frame2.png";
import Frame13 from "../Images/Frame3.png";
import Frame14 from "../Images/Frame4.png";
import Frame15 from "../Images/Frame5.png";
import Frame16 from "../Images/Frame6.png";
import Frame17 from "../Images/Frame7.png";
import Frame18 from "../Images/Frame8.png";
import Frame19 from "../Images/Frame9.png";
import Frame20 from "../Images/Frame10.png";
import Frame21 from "../Images/Frame10.png";
import diffFrame12 from "../Images/cocdiff12.png";
import diffFrame15 from "../Images/cocdiff15.png";
import diffFrame19 from "../Images/cocdiff19.png";

const AnimatedCoC = () => {
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

export default AnimatedCoC;
