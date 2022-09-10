import About from "./About/About";
import Contact from "./Contact/Contact";
import Intro from "./Intro/Intro";
import NavMenu from "./NavMenu/NavMenu";
import Services from "./Services/Services";
import Testimonial from "./Testimonial/Testimonial";
const Home = () => {
  return (
    <>
      <NavMenu />
      <Intro />
      <Services />
      <About />
      <Contact />
      <Testimonial />
    </>
  );
};

export default Home;
