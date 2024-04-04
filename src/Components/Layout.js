import react from "react";
import Navbar from "./Navbar/index";
import Homepage from "./Homepage";
import Projects from "./Projects";
import Contact from "./Contact/Index";
import Footer from "./Footer/Footer";

import HomepageV3 from "./Homepage/HomepageV3";
const Layout = () => {
  return (
    <>
      <Navbar />
      <HomepageV3></HomepageV3>
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Layout;
