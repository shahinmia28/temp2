import "./Intro.scss";
import Typewriter from "typewriter-effect";
import { webDesign } from "../../../data";

const Intro = () => {
  const typeData = webDesign.map((d) => d.title);
  return (
    <div className="intro" id="intro">
      <div className="overlay"></div>
      <div className="intro-container">
        <div className="left">
          <h1>Spend More To Get The Quality Work</h1>
          <div className="blue-ray"></div>
        </div>
        <div className="content">
          <h2>There, I'm </h2>
          <h1>Shahin Mia</h1>
          <h3>
            <p> Freelancer of</p>
            <Typewriter
              options={{
                strings: typeData,
                autoStart: true,
                loop: true,
              }}
            />
          </h3>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 260">
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,256L80,256C160,256,320,256,480,229.3C640,203,800,149,960,133.3C1120,117,1280,139,1360,149.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Intro;
