import { Link } from "react-router-dom";
import { footerMenuData } from "../../data";
import CopyWrite from "./CopyRight";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160">
        <path
          fill="#00c57d"
          fillOpacity="1"
          d="M0,160L120,138.7C240,117,480,75,720,58.7C960,43,1200,53,1320,58.7L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>

      <div className="info ">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 footer-logo text-center ">
              <h1>
                <a href="#intro" className="nav-link">
                  Shahin M.
                </a>
              </h1>
            </div>
            <div className="footer-contact col-12 col-md-8">
              <ul className="contact-details">
                <li>
                  <i className="fa-solid fa-location-dot"></i>
                  <span>Bhuapur, Tangail, Dhaka, Bangladesh</span>
                </li>
                <li>
                  <i className="fa-solid fa-envelope-open"></i>
                  <span>shahin.lokerpara@gmail.com</span>
                </li>
                <li>
                  <i className="fa-solid fa-mobile-screen-button"></i>
                  <span>+880 1777 2969 33</span>
                </li>
              </ul>

              <ul className="footer-menu">
                {footerMenuData.map((d, i) => (
                  <li key={i}>
                    <i className={d.icon}></i>
                    <Link to={"/underConstruction"}>{d.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <CopyWrite />
    </div>
  );
};

export default Footer;
