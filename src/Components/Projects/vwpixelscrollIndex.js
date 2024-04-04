import { react, useState, useEffect, useRef } from "react";
import styles from "./Projects.module.css";
import coc from "../Images/coc1.png";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { PiArrowSquareLeftThin, PiArrowSquareRightThin } from "react-icons/pi";

const Projects = () => {
  const scrollRef = useRef();

  const vw = scrollRef.current.offsetWidth/100;
  const fullW = scrollRef.current.offsetWidth;
  const scroll = (scrollOffset) => {
    scrollRef.current.scrollLeft += scrollOffset;
  };

  const forwardArrow = useRef();
  const backArrow = useRef();
  let initialBack = 0;
  let initialForward = 0;
 
  const handleBack = () => {
    backArrow.current.style.left = `${
      initialBack + scrollRef.current.scrollLeft / vw
    }%`;
  };

  useEffect(() => {
    initialBack = parseInt(backArrow.current.style.left, 10);
    scrollRef.current.addEventListener("scroll", handleBack);

    return () => {
      scrollRef.current.removeEventListener("scroll", handleBack);
    };
  }, []);

  const handleForward = () => {
    forwardArrow.current.style.left = `${
      initialForward + scrollRef.current.scrollLeft /vw
    }%`;
  };

  useEffect(() => {
    initialForward = parseInt(forwardArrow.current.style.left, 10);
    scrollRef.current.addEventListener("scroll", handleForward);

    return () => {
      scrollRef.current.removeEventListener("scroll", handleForward);
    };
  }, []);

  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    const position = window.scrollY;
    if (position > 300 && position < 1350) {
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

  /* const [isArrowScrolled1, setArrowScrolled1] = useState(false);
  const handleArrowScroll1 = () => {
    xPosition = ref.current.scrollLeft;
    if (xPosition > 1800) {
      setArrowScrolled1(true);
    } };*/

  {
    /*In this example, the isScrolled state is initially set to false. When the page is scrolled more than 100 pixels,
     the isScrolled state is set to true. If the scroll position is less than 100 pixels, the isScrolled state is set back to false.
      The component will re-render each time the state changes, and the message in the div will update accordingly.

Please replace 100 in position > 100 with the amount of pixels you want to be scrolled before the state toggles
  <div>
  {isScrolled ? 'You have scrolled!' : 'Start scrolling...'}
</div>

*/
  }

  return (
    <>
      <div className={styles.scrolling} ref={scrollRef} id="scrolling">
        <div
          ref={backArrow}
          style={{
            left: "5%",
            top: "50%",
            zIndex: "99999",

            height: "content-fit",
            position: "absolute",
            color: "aliceblue",
            fontSize: "80px",
            width: "auto",
          }}
        >
          <PiArrowSquareLeftThin
            className={styles.backarrow}
            onClick={() => scroll(-{fullW})}
          />
        </div>
        <div
          ref={forwardArrow}
          style={{
            left: "1420px",
            top: "50%",
            zIndex: "99999",

            height: "content-fit",
            position: "absolute",
            color: "aliceblue",
            fontSize: "80px",
            width: "auto",
          }}
        >
          <PiArrowSquareRightThin
            className={styles.forwardarrow}
            onClick={() => scroll({fullW})}
         
          />
        </div>
        <div className={styles.card} id='1'>
          <div className={styles.cardbox}>
            <div className={styles.cardcontainer}>
              <div className={styles.textcontainer}>
                <div className={styles.textdiv}>
                  <div className={styles.header}>
                    Portfolio Site for <br></br>
                    Chane of Command
                  </div>
                  <div className={styles.p}>
                    Portfolio site built for founder of NYC based <br></br>
                    events production company Chane of Command.
                  </div>
                </div>

                <div className={styles.buttondiv}>
                  <a href="https:\\www.chaneofcommand.com">
                    <button className={styles.button}>VISIT SITE</button>
                  </a>
                </div>
              </div>
              <img
                alt="Chane of Command Website"
                className={styles.img}
                src={coc}
              />
            </div>
          </div>
        </div>

        <div className={styles.card} id='2'>
        <div className={styles.cardbox}>
            <div className={styles.cardcontainer}>
              <div className={styles.textcontainer}>
                <div className={styles.textdiv}>
                  <div className={styles.header}>
                    Portfolio Site for <br></br>
                    Chane of Command
                  </div>
                  <div className={styles.p}>
                    Portfolio site built for founder of NYC based <br></br>
                    events production company Chane of Command.
                  </div>
                </div>

                <div className={styles.buttondiv}>
                  <a href="https:\\www.chaneofcommand.com">
                    <button className={styles.button}>VISIT SITE</button>
                  </a>
                </div>
              </div>
              <img
                alt="Chane of Command Website"
                className={styles.img}
                src={coc}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
