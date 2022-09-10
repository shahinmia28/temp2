import "./Services.scss";
import { webDesign } from "../../../data";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="my-title">
          <h2>Services</h2>
          <div className="title-underLine"></div>
        </div>
        <div className="items-lists row d-flex m-auto">
          {webDesign.map((d, i) => (
            <Link
              to={{
                pathname: `/web/${d.id}`,
              }}
              state={{ data: d }}
              className="card m-3"
              key={i}
            >
              <img src={d.img} alt="" />
              <h3>{d.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
