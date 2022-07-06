import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import TopBar from "./components/TopBar";
import Home from "./pages/Home";
import Single from "./pages/Single";
import Write from "./pages/Write";
import Settings from "./pages/Settings";


function App() {
  return (
    <div className="App">
        <TopBar />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Single" element={<Single />} />
            <Route path="/Write" element={<Write />} />
            <Route path="/Setting" element={<Settings />} />
            {/* <Route path="*" element={<Page404 />} /> */}
          </Routes>
        </Router>
    </div>
  );
}

export default App;
