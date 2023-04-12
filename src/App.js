import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import Preloader from "./components/Pre";
import Cursor from "./components/Cursor"
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import Linkedin from "./components/Linkedin";
import ID from "./components/ID";
import NotFound from "./components/NotFound";

import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.config({ nullTargetWarn: false });

  const [isDesktop, setIsDesktop] = useState(true);
  const [load, upadateLoad] = useState(true);
  const [notfound, setNotfound] = useState(false);
  const handleSetNotfound = (page) => {
    if (notfound) {
      window.location.href = `/${page}`;
      return
    }
    const pageArray = ["/", "/project", "/about", "/resume", "/linkedin", "/id"];
    let { pathname } = window.location;
    const found = pageArray.includes(pathname);
    found ? setNotfound(false) : setNotfound(true);
  }
  useEffect(() => {
    const result =
      typeof window.orientation === "undefined" &&
      navigator.userAgent.indexOf("IEMobile") === -1;

    setIsDesktop(result);
    handleSetNotfound("");
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <Cursor isDesktop={isDesktop} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar handleSetNotfound={handleSetNotfound} />
        <ScrollToTop />
        {!notfound ?
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/project" component={Projects} />
            <Route path="/about" component={About} />
            <Route path="/resume" component={Resume} />
            <Route path="/linkedin" component={Linkedin} />
            <Route path="/id" component={ID} />
          </Switch> : <NotFound />
        }
        {!notfound && <Footer />}
      </div>
    </Router>
  );
}

export default App;
