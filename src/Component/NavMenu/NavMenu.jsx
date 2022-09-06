import { useEffect, useState } from "react";
import { NavMenuLists } from "../../data";
import { Link } from "react-router-dom";
import "./NavMenu.scss";

const NavMenu = () => {
  const [navBar, setNavBar] = useState(false);
  const [click, setClick] = useState(false);

  const changeBackground = () => {
    if (window.scrollY > 100) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <nav className={navBar ? "navigation-bar scroll" : "navigation-bar"}>
      <h1>
        <Link to={"/"} className="nav-link">
          Shahin M.
        </Link>
      </h1>

      <ul
        id={click ? "mobile" : ""}
        className={
          navBar ? "navigation-bar-list scroll" : "navigation-bar-list"
        }
      >
        {NavMenuLists.map((d, i) => (
          <li key={i}>
            <a className="nav-link" href="">
              {d.name}
            </a>
          </li>
        ))}
      </ul>

      <div className="right d-block d-md-none ">
        <div className="toggle-menu">
          <i
            className={click ? "fas fa-times" : "fas fa-bars"}
            onClick={() => setClick(!click)}
          ></i>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;

// <div
// className="toggle-menu d-flex"
// onClick={() => {
//   setMenuOpen(!menuOpen);
// }}
// >
// <span className="line-1"></span>
// <span className="line-2"></span>
// <span className="line-3"></span>
// </div>
