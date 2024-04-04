import React from "react";
import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import styles from "./Navbar.module.css";
import { Link, animateScroll as scroll } from "react-scroll";
import { FaBars, FaRegWindowClose } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768 ) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  


  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };
  const [isMobileL, setIsMobileL] = useState(window.innerHeight <=430 && window.innerWidth <=932);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileL(window.innerHeight <=430 && window.innerWidth <=932);
      if (window.innerWidth > 932 ) {
        setIsOpenL(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [isOpenL, setIsOpenL] = useState(false);

  const toggleL = () => {
    if (!isOpenL) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };


  return (
    <>
      <div className={isOpen ? styles.mobilemenu : styles.hidden}>
        <div className={styles.mobilenav}>
          <div className={styles.namediv}>
          <div className={styles.h1}> </div>
          </div>
          <div className={styles.xdiv}>
          <div onClick={toggle} className={styles.closediv}>
            <IoClose />
            </div>
          </div>
        </div>
        <div className={styles.mobilenav2}>
          <div className={styles.namediv}>
          <div className={styles.h1}> Erik Dalland</div>
          </div>
          <div className={styles.xdiv}>
        
          </div>
        </div>
        <div className={styles.linkbox}>
          <Link
            onClick={toggle}
            to="home"
            spy={true}
            smooth={true}
            className={styles.link}
            duration={500}
            activeClass={styles.mobileactive}
          >
            <div className={styles.link}>Home</div>
          </Link>

          <Link
           className={styles.link}
            onClick={toggle}
            to="projects"
            spy={true}
            smooth={true}
            offset={0.5}
            duration={500}
            activeClass={styles.mobileactive}
          >
            <div className={styles.link} >Projects</div>
          </Link>

          <Link
           className={styles.link}
            onClick={toggle}
            to="contact"
            spy={true}
            smooth={true}
            offset={1.5}
            duration={500}
            activeClass={styles.mobileactive}
          >
            <div className={styles.link} >Contact</div>
          </Link>
        </div>
      </div>
      <div className={styles.nav}>
        <div
          onClick={toggle}
          className={isMobile ? styles.bars : styles.hidden}
        >
          <FaBars />
        </div>

        <ul className={isMobile ? styles.hidden : styles.ul}>
          <Link
            activeClass={styles.active}
            to="home"
            spy={true}
            smooth={true}
            className={styles.link}
            duration={500}
          >
            <li className={styles.li}>Home</li>
          </Link>
          <Link
            activeClass={styles.active}
            to="projects"
            spy={true}
            smooth={true}
            offset={0.5}
            duration={500}
          >
            <li className={styles.li}>Projects</li>
          </Link>
          <Link
            activeClass={styles.active}
            to="contact"
            spy={true}
            smooth={true}
            offset={1.5}
            duration={500}
          >
            <li className={styles.li}>Contact</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
