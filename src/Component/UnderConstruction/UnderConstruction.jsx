import { Link } from "react-router-dom";
import "./UnderConstruction.scss";

const UnderConstruction = () => {
  return (
    <div className="underConstruction">
      <div className="container text-center">
        <div className="text">
          <h1>Opsss!</h1>
          <h3>This page is building stage</h3>
          <Link to={"/"}>Back to home</Link>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
