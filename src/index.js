import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Location from "./components/pages/Location";
import Error from "./components/pages/Error";
import Header from "./components/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path=":location/:id" element={<Location />}/>
        <Route path=":location/*" element={<Error />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
    </Router>
  </React.StrictMode>
);
