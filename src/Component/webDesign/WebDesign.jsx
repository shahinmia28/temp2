import "./webDesign.scss";
import { Link, useLocation } from "react-router-dom";

const WebDesign = () => {
  const d = useLocation().state.data;

  return (
    <div className="web-design ">
      <div className="back-home">
        <h1>
          <Link to={"/"}>
            <i className="fa-solid fa-reply-all"></i> Back to Home
          </Link>
        </h1>
      </div>
      <div className="container">
        <div className="m-auto d-flex">
          <div className="jumbotron">
            <h1 className="display-4">{d.title}</h1>
            <img src={d.img} alt={d.img} />
            <p className="lead">{d.docs}</p>
            <ul className="list-group">
              {d.list.map((l, i) => (
                <li className="list-group-item list-group-item-light" key={i}>
                  {l}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDesign;
