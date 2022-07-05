import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
        {/* <Navbar /> */}
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="*" element={<Page404 />} /> */}
          </Routes>
        </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
