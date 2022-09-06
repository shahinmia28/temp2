import "./Menu.scss";
import { Link } from "react-router-dom";
import { NavMenuLists } from "../../data";

const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={menuOpen ? "menu active" : "menu"}>
      <ul>
        {NavMenuLists.map((list, index) => (
          <li key={index}>
            <Link
              to={`/${list.id}`}
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              {list.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
