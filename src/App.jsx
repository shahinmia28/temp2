import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Component/Home/Home";
import Footer from "./Component/Footer/Footer";
import NavMenu from "./Component/NavMenu/NavMenu";

function App() {
  return (
    <div className="app">
      <Router>
        <div className="header">
          <NavMenu />
        </div>
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
        <div className="bottom">
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
