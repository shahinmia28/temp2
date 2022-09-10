import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Component/Home/Home";
import Footer from "./Component/Footer/Footer";
import WebDesign from "./Component/webDesign/WebDesign";
import UnderConstruction from "./Component/UnderConstruction/UnderConstruction";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path={"/web/:id"} element={<WebDesign />} />
          <Route path={"/underConstruction"} element={<UnderConstruction />} />
        </Routes>
        <div className="bottom">
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
