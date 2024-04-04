import { React, useState, useEffect, useRef } from "react";
import styles from "./Contact.module.css";
import ParticlesComponent from "../ParticlesComponent/ParticlesComponent.js";
import ParticlesComponent2 from "../ParticlesComponent/ParticlesComponent2";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [firstname, setFirstName] = useState();
  const [lastname, setLastName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);



    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      
      };
  
      window.addEventListener("resize", handleResize);
  
      // Cleanup the event listener on unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    
  
  
   
    const [isMobileL, setIsMobileL] = useState(window.innerHeight <=430 && window.innerWidth <=932);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobileL(window.innerHeight <=430 && window.innerWidth <=932);
      
      };
  
      window.addEventListener("resize", handleResize);
  
      // Cleanup the event listener on unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  

  return (
    <>
      <div className={styles.container} id="contact">
        {!isMobileL ? !isMobile ? <ParticlesComponent/> : <ParticlesComponent2/> :<ParticlesComponent2/>}
      
        <div ata-aos="fade" className={styles.h1}>
          Lets Connect!
        </div>
        <div data-aos="fade" className={styles.underlay1}>
          <div className={styles.formcontainer}>
            <form
              className={styles.form}
              target="_blank"
              action="https://formsubmit.co/eldalland@email.com"
              method="POST"
            >
              <div className={styles.firstlastcontainer}>
                <input
                  type="text"
                  name="name"
                  className={styles.first}
                  placeholder="  First Name"
                  required
                  value={firstname}
                  onChange={(e) => setFirstName(e.target.value)}
                />

                <input
                  type="text"
                  name="name"
                  className={styles.last}
                  placeholder="  Last Name"
                  required
                  value={lastname}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <input
                type="email"
                name="email"
                className={styles.email}
                placeholder="  Email Address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <textarea
                type="message"
                placeholder="Your Message"
                className={styles.message}
                name="message"
                rows="10"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>

              <button className={styles.button} type="submit">
                Submit Form
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
