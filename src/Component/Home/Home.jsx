import About from "./About/About";
import Contact from "./Contact/Contact";
import Intro from "./Intro/Intro";
import Portfolio from "./Portfolio/Portfolio";
import Testimonial from "./Testimonial/Testimonial";
const Home = () => {
  return (
    <>
      <Intro />
      <Portfolio />
      <About />
      <Contact />
      <Testimonial />
    </>
  );
};

export default Home;
