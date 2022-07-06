import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import TopBar from "./components/TopBar";
import Home from "./pages/Home";
import Single from "./pages/Single"


function App() {
  return (
    <div className="App">
        <TopBar />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Single" element={<Single />} />
            {/* <Route path="*" element={<Page404 />} /> */}
          </Routes>
        </Router>
    </div>
  );
}

export default App;
