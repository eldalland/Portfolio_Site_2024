import React, { useState, useEffect, useRef } from "react";
import styles from "./Projects.module.css";
import AnimatedCoC from "./AnimatedCoC";
import AnimatedDD from "./AnimatedDD";
import AnimatedEB from "./AnimatedEB";
import Aos from "aos";
import "aos/dist/aos.css";
import { PiArrowSquareLeftThin, PiArrowSquareRightThin } from "react-icons/pi";
import { IoMdArrowDown } from "react-icons/io";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { Link, animateScroll as scroll } from "react-scroll";
import AnimatedTentshape from "./AnimatedTentshape";

const Projects = () => {
  {
    /*ref to scroller, used by a few functions */
  }
  const scrollRef = useRef(null);

  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    const position = window.scrollY;
    if (position > 300 && position < 1350) {
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
  {
    /*code to scroll to next and previous cards within scroller */
  }
  const [currentIndex, setCurrentIndex] = useState(0);
  const refs = ["card1", "card2", "card3"].reduce((acc, value) => {
    acc[value] = React.createRef();
    return acc;
  }, {});

  const scrollToElement = (offset) => {
    const elementIds = Object.keys(refs);
    let newIndex =
      (currentIndex + offset + elementIds.length) % elementIds.length;
    refs[elementIds[newIndex]].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setCurrentIndex(newIndex);
    console.log(newIndex);
  };



  useEffect(() => {
    Aos.init({ duration: 1000, mirror: true });
    Aos.refresh();
  }, []);

  
  return (
    <>
      <div
       
        className={styles.scrolling}
        ref={scrollRef}
        id="projects"
      >
        <div  data-aos="fade-left"  className={styles.card} id="card1" ref={refs.card1}>
          <div className={styles.cardbox}>
            <div className={styles.arrowboxB}>
              <div className={styles.arrowdivback}>
                <PiArrowSquareLeftThin
                  className={styles.arrow}
                  onClick={() => scrollToElement(-1)}
                />
              </div>
            </div>

            <div className={styles.arrowboxmb}>
              {" "}
              <div className={styles.mobileback}>
                <IoMdArrowDropleft
                  className={styles.arrow}
                  onClick={() => scrollToElement(-1)}
                />
              </div>
            </div>
            <div className={styles.cardcontainer}>
              <div className={styles.textcontainer}>
                <div className={styles.textdiv}>
                  <div className={styles.header}>
                    <span className={styles.span}>Tentshape</span>
                    <br></br>
                    Portfolio Site
                  </div>
                  <div className={styles.p}>
                    Portfolio site and life's work of a talented tensile photovoltaic arhcitect. 
                  </div>
                </div>

                <div className={styles.buttondiv}>
                  <a 
                       target="_blank"
                  href="https:\\www.tentshape.com" className={styles.a}>
                    <button className={styles.button}>VISIT SITE</button>
                  </a>
                </div>
              </div>
              <div className={styles.imgdiv}>
                <AnimatedTentshape />
              </div>
            </div>

            <div className={styles.arrowboxF}>
              <div className={styles.arrowdivforward}>
                <PiArrowSquareRightThin
                  className={styles.arrow}
                  onClick={() => scrollToElement(1)}
                />
              </div>{" "}
            </div>
            <div className={styles.arrowboxmf}>
              <div className={styles.mobileforward}>
                <IoMdArrowDropright
                  className={styles.arrow}
                  onClick={() => scrollToElement(1)}
                />
              </div>
            </div>
          </div>
        </div>
        <div  data-aos="fade-left"  className={styles.card} id="card2" ref={refs.card2}>
          <div className={styles.cardbox}>
            <div className={styles.arrowboxB}>
              <div className={styles.arrowdivback}>
                <PiArrowSquareLeftThin
                  className={styles.arrow}
                  onClick={() => scrollToElement(-1)}
                />
              </div>
            </div>

            <div className={styles.arrowboxmb}>
              {" "}
              <div className={styles.mobileback}>
                <IoMdArrowDropleft
                  className={styles.arrow}
                  onClick={() => scrollToElement(-1)}
                />
              </div>
            </div>
            <div className={styles.cardcontainer}>
              <div className={styles.textcontainer}>
                <div className={styles.textdiv}>
                  <div className={styles.header}>
                    <span className={styles.span}>Chane of Command</span>
                    <br></br>
                    Portfolio Site
                  </div>
                  <div className={styles.p}>
                    Portfolio site built for founder of NYC based events
                    production company Chane of Command.
                  </div>
                </div>

                <div className={styles.buttondiv}>
                  <a 
                       target="_blank"
                  href="https:\\www.chaneofcommand.com" className={styles.a}>
                    <button className={styles.button}>VISIT SITE</button>
                  </a>
                </div>
              </div>
              <div className={styles.imgdiv}>
                <AnimatedCoC />
              </div>
            </div>

            <div className={styles.arrowboxF}>
              <div className={styles.arrowdivforward}>
                <PiArrowSquareRightThin
                  className={styles.arrow}
                  onClick={() => scrollToElement(1)}
                />
              </div>{" "}
            </div>
            <div className={styles.arrowboxmf}>
              <div className={styles.mobileforward}>
                <IoMdArrowDropright
                  className={styles.arrow}
                  onClick={() => scrollToElement(1)}
                />
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-left" className={styles.card} id="card3" ref={refs.card3}>
          <div className={styles.cardbox}>
            <div className={styles.arrowboxB}>
              <div className={styles.arrowdivback}>
                <PiArrowSquareLeftThin
                  className={styles.arrow}
                  onClick={() => scrollToElement(-1)}
                />
              </div>
            </div>

            <div className={styles.arrowboxmb}>
              {" "}
              <div className={styles.mobileback}>
                <IoMdArrowDropleft
                  className={styles.arrow}
                  onClick={() => scrollToElement(-1)}
                />
              </div>
            </div>
            <div className={styles.cardcontainer}>
              <div className={styles.textcontainer}>
                <div className={styles.textdiv}>
                  <div className={styles.header}>
                    <span className={styles.span}>Dungeon Dweller</span>
                    <br></br>
                    Web Game
                  </div>
                  <div className={styles.p}>
                    RPG Platformer game built using p5Js.<br></br>
                    Uploaded to itch.io.
                  </div>
                </div>

                <div className={styles.buttondiv}>
                  <a
                     target="_blank"
                    href="https://eldalland.itch.io/dungeon-dweller"
                    className={styles.a}
                  >
                    <button className={styles.button}>VISIT SITE</button>
                  </a>
                </div>
              </div>
              <div className={styles.imgdiv2}>
                <AnimatedDD />
              </div>
            </div>

            <div className={styles.arrowboxF}>
              <div className={styles.arrowdivforward}>
                <PiArrowSquareRightThin
                  className={styles.arrow}
                  onClick={() => scrollToElement(1)}
                />
              </div>{" "}
            </div>
            <div className={styles.arrowboxmf}>
              <div className={styles.mobileforward}>
                <IoMdArrowDropright
                  className={styles.arrow}
                  onClick={() => scrollToElement(1)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* <div data-aos="fade-left" className={styles.card} id="card4" ref={refs.card4}>
          <div className={styles.cardbox}>
            <div className={styles.arrowboxB}>
              <div className={styles.arrowdivback}>
                <PiArrowSquareLeftThin
                  className={styles.arrow}
                  onClick={() => scrollToElement(-1)}
                />
              </div>
            </div>

            <div className={styles.arrowboxmb}>
              {" "}
              <div className={styles.mobileback}>
                <IoMdArrowDropleft
                  className={styles.arrow}
                  onClick={() => scrollToElement(-1)}
                />
              </div>
            </div>
            <div className={styles.cardcontainer}>
              <div className={styles.textcontainer}>
                <div className={styles.textdiv}>
                  <div className={styles.header}>
                    <span className={styles.span}>Egg Bounce</span> <br></br>
                    Web Game
                  </div>
                  <div className={styles.p}>
                    Simple and fun egg bouncing physics game. <br></br>
                    Built using Unity Player and C#.
                  </div>
                </div>

                <div className={styles.buttondiv}>
                  <a
                    target="_blank"
                    href="https://eldalland.itch.io/egg-bounce"
                    className={styles.a}
                  >
                    <button className={styles.button}>VISIT SITE</button>
                  </a>
                </div>
              </div>
              <div className={styles.imgdiv2}>
                <AnimatedEB />
              </div>
            </div>

            <div className={styles.arrowboxF}>
              <div className={styles.arrowdivforward}>
                <PiArrowSquareRightThin
                  className={styles.arrow}
                  onClick={() => scrollToElement(1)}
                />
              </div>{" "}
            </div>
            <div className={styles.arrowboxmf}>
              <div className={styles.mobileforward}>
                <IoMdArrowDropright
                  className={styles.arrow}
                  onClick={() => scrollToElement(1)}
                />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Projects;
