import { skillData, webDesign } from "../../../data";
import { useState } from "react";
import "./About.scss";

const About = () => {
  const [animationStart, setAnimationStart] = useState(false);

  const animation = () => {
    if (window.scrollY > 1200) {
      setAnimationStart(true);
    } else {
      setAnimationStart(false);
    }
  };
  window.addEventListener("scroll", animation);

  return (
    <div className="about">
      <div className="container">
        <div className="about-container">
          <div className="info-box row">
            <div className="col-12 col-md-6 ">
              <div className="personal-info p-2 ">
                <img src="/image/shahin.png" alt="intro-img" />
                <h3 className="name">Shahin Mia</h3>
                <h5 className="title">Front-End web developer</h5>
                <div className="skill-container">
                  {skillData.map((d, i) => (
                    <div className="skill-box" key={i}>
                      <div className="skill-title">{d.title}</div>
                      <div className="skill-bar">
                        <span
                          className={
                            animationStart ? `anim ${d.class}` : ` ${d.class}`
                          }
                        >
                          <span className="tool">{d.tooltip}</span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <p></p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="personal-data p-2">
                <div className="about-title">
                  <h2>About Me</h2>
                  <div className="title-underLine"></div>
                </div>

                <p className="text-muted">
                  I'm Shahin mia, a professional and highly experienced web
                  designer with expertise in creating responsive websites and
                  web applications. I am using React JS to develop an
                  application, fast, functional and interactive website or web
                  application.
                </p>
                <div className="my-skill">
                  <h4 className="text-muted">Why choose me?</h4>
                  <ul className="list-group">
                    {webDesign.map((d, i) => (
                      <li className="list-group-item" key={i}>
                        {d.title}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
