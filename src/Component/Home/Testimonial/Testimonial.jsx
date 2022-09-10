import "./Testimonial.scss";
import { testimonial } from "../../../data";

const Testimonial = () => {
  return (
    <div className="testimonial" id="testimonial">
      <div className="my-title">
        <h2>Testimonial</h2>
        <div className="title-underLine"></div>
      </div>
      <div className="container row">
        {testimonial.map((data, index) => (
          <div
            className={data.featured ? "card featured m-3" : "card m-3"}
            key={index}
          >
            <div className="top">
              <img src={data.img} alt="" />
            </div>
            <div className="center">
              <p> {data.desc} </p>
              <h4>{data.name}</h4>
              <span>{data.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
