import { React, useState, useEffect } from "react";
import styles from "./HomepageV2.module.css";
import headshot from "../Images/headshotcropped.jpg";
import { IoMdArrowDown } from "react-icons/io";
import { Link, animateScroll as scroll } from "react-scroll";
import ParticlesComponent from "../ParticlesComponent/ParticlesComponent.js.js";

const HomepageV2 = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftdiv}>
          <div className={styles.topcontainer}>
            <div className={styles.leftcontainer}>
              <div className={styles.headercontainer}>
              <div className={styles.h1}>Erik Dalland</div>
              <div className={styles.h2}> Web Developer</div>
              </div>
              <div className={styles.pcontainer}>
              <div className={styles.p}>
            {" "}
            New York City based freelance web developer, with experience
            building responsive business and portfolio websites. Skilled in
            html, css, and ReactJs
          </div>
          </div>
            </div>
            <div className={styles.rightcontainer}>
              <img className={styles.img} src ={headshot}></img>
               </div>
          </div>

        <div className={styles.arrowdiv}>
        <div className={styles.projectslink}>
        <Link 
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}
        >
        <div className={styles.linkheader}>View My Work</div>
    
        <IoMdArrowDown className={styles.arrowdown} />
         </Link>
        </div>
        </div>
        </div>
      </div>
    </>
  );
};
export default HomepageV2;
