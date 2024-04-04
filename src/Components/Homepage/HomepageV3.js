import { React, useState, useEffect, useRef } from "react";
import styles from "./HomepageV3.module.css";
import headshot from "../Images/headshot.jpg";
import headshotCropped from "../Images/headshotcropped3.jpg";
import { IoMdArrowDown } from "react-icons/io";
import { Link, animateScroll as scroll } from "react-scroll";
import Aos from "aos";
import "aos/dist/aos.css";
import ParticlesComponent from "../ParticlesComponent/ParticlesComponent.js.js";
import { useInView } from "react-intersection-observer";

const HomepageV3 = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    const position = window.scrollY;
    if (position < 300 || position == null) {
      // replace 100 with the amount of pixels you want
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false, // Change this to false if you want the animation to trigger again whenever it comes in view
  });

  useEffect(() => {
    const setSectionHeight = () => {
      console.log("setSectionHeight called"); // New log statement
      if (ref.current) {
        ref.current.style.height = `${window.innerHeight}px`;
        console.log("ref.current after setting height:", ref.current); // New log statement
      } else {
        console.log("ref.current is null"); // New log statement
      }
    };

    setSectionHeight();
    window.addEventListener("resize", setSectionHeight);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", setSectionHeight);
    };
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1000, mirror: true });
  }, []);

  return (
    <>
      <div  data-aos="fade" className={styles.container} id="home" ref={ref}>
        <div className={styles.flexcontainer}>
          {" "}
          <div className={styles.flexitem1}>
            <div className={styles.h1}>Erik Dalland</div>
            <div className={styles.h2}> Web</div>
            <div className={styles.h2}>
              <span className={styles.underspan}>Developer </span>
            </div>
            <div className={styles.h2}>
              <span className={styles.mobilespan}>Game</span>
            </div>
            <div className={styles.h2}>
              <span className={styles.underspan}>Developer </span>
            </div>
            <div className={styles.h2}>
              {" "}
              <span className={styles.mobilespan}>
                <span className={styles.underspan}> Programmer </span>
              </span>
            </div>
            <div className={styles.h2mobile}>Web </div>
            <div className={styles.h2mobile}>Developer</div>
            <div className={styles.h2mobile}>Game </div>
            <div className={styles.h2mobile}>Developer</div>
            <div className={styles.h2mobile}>Programmer</div>
            <div className={styles.pdiv}>
              <p className={styles.p}>
                New York City based web developer and programmer, specializing
                in building dynamic business & portfolio websites. Let's work
                together to bring your vision into reality.
              </p>
            </div>
          </div>
          <div className={styles.flexitem2}>
            <div className={styles.imgdiv}>
              <img src={headshot} alt="Erik" className={styles.img} />
              <img className={styles.img2} src={headshotCropped}></img>
            </div>
          </div>
        </div>

        <div className={styles.projectslink}>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IoMdArrowDown className={styles.arrowdown} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomepageV3;
