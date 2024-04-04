import {React, useState, useEffect} from "react";
import styles from './Homepage.module.css';
import headshot from '../Images/headshot.jpg'
import { IoMdArrowDown } from "react-icons/io";
import { Link, animateScroll as scroll } from "react-scroll";
import ParticlesComponent from "../ParticlesComponent/ParticlesComponent.js.js";

const Homepage =()=>{

    const [isScrolled, setIsScrolled] = useState(false);
    const handleScroll = () => {
      const position = window.scrollY;
      if (position < 300 || position == null ) {
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
    return(
        <>
        <div className={styles.container} id='home'>
        <ParticlesComponent />
        <div className={ styles.flexitem1}>
        <div className={styles.h1}>Erik Dalland</div>
        <p className={styles.p }>New York City based web developer and programmer, with experience
            building business and portfolio websites. Let's work together
            to bring your ideas into reality.
        </p>
        </div>
        <div className={styles.flexitem2}>
        <img src={headshot} alt ="Erik" className={styles.img} />
        </div>

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
       
        </>
    )
}
export default Homepage