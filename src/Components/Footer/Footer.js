import React from "react";
import styles from "./Footer.module.css";
import { Link, animateScroll as scroll } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.textBox}>
          <div className={styles.nameBox}>
            <div className={styles.h2}>Erik Dalland</div>
            <div className={styles.h2}>
              {" "}
              <span>Email:</span> <br className={styles.namebreak}></br>
              <span className={styles.namespan}>eldalland@gmail.com</span>
            </div>
            <div className={styles.h2}>
              {" "}
              <span>Telephone:</span>{" "}
              <span className={styles.numspan}>917-391-8567</span>
            </div>
          </div>

          <div className={styles.contentsBox}>
            <ul className={styles.ul}>
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                duration={500}
              >
                <li className={styles.li}>Home</li>
              </Link>
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
              >
                <li className={styles.li}>Projects</li>
              </Link>

              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
              >
                <li className={styles.li}>Contact</li>
              </Link>
            </ul>
          </div>
          <div className={styles.socialBox}>
            <a
              className={styles.a}
              target="_blank"
              href="https://github.com/eldalland/Erik-Dalland"
            >
              <FaGithub className={styles.icon} />
            </a>
            <a
              target="_blank"
              className={styles.a}
              href="https://www.linkedin.com/in/erikdalland/"
            >
              <FaLinkedin className={styles.icon} />
            </a>
          </div>
          {/*
          <div className={styles.nameBox}>
            <div className={styles.quote}>
              "To be yourself in a world that is constantly trying to make you
              something else is the greatest accomplishment." -Ralph Waldo
              Emerson
            </div>
          </div>
          */}
        </div>
      </div>
    </>
  );
};

export default Footer;
