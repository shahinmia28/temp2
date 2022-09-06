import { useEffect, useState } from "react";
import "./Portfolio.scss";
import { webDesign, webDevelop } from "../../../data";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [menuItem, setMenuItem] = useState("webDesign");
  const [cardItem, setCardItem] = useState([]);

  useEffect(() => {
    switch (menuItem) {
      case "Web Design":
        setCardItem(webDesign);
        break;
      case "Web Develop":
        setCardItem(webDevelop);
        break;
      default:
        setCardItem(webDesign);
    }
  }, [menuItem]);

  return (
    <div className="portfolio" id="portfolio">
      <div className="title-container">
        <div className="title">
          <div className="title-text">
            <h1 className="p-2 text-center">My Services</h1>
            <div className="button-container">
              <button
                className="btn btn-outline-light m-1"
                onClick={() => {
                  setMenuItem("Web Design");
                }}
              >
                Web design
              </button>
              <button
                className="btn btn-outline-light m-1"
                onClick={() => {
                  setMenuItem("Web Develop");
                }}
              >
                Web develop
              </button>
            </div>
          </div>
        </div>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 190">
          <path
            fill="#009760c2"
            fillOpacity="1"
            d="M0,192L80,186.7C160,181,320,171,480,144C640,117,800,75,960,74.7C1120,75,1280,117,1360,138.7L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg> */}
      </div>
      <div className="container d-flex">
        <div className="items-lists row d-flex m-auto">
          {cardItem.map((list, index) => (
            <Link to={`/${list.id}`} className="card m-3" key={index}>
              <img src={list.img} alt="" />
              <h3>{list.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
