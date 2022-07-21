import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import "./App.css";

import TopBar from "./components/TopBar";
import Home from "./pages/Home";
import Single from "./pages/Single";
import Write from "./pages/Write";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Page404 from "./pages/Page404";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
  const { user } = useContext(Context);

  return (
    <div className="App">
        <Router>
          <TopBar />
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/register" element={user ? <Home/> : <Register />} />
                <Route path="/login" element={user ? <Home/> : <Login />} />
                <Route path="/write" element={user ? <Write /> : <Register />} />
                <Route path="/settings" element={user ? <Settings /> : <Register/>} />
                <Route path="/post/:postId" element={<Single />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Page404 />} />
                </Routes>
          < Footer />
        </Router>
    </div>
  );
}

export default App;
