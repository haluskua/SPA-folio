//functional component

import React from "react";
import {
  Footer,
  Blog,
  Contact,
  Features,
  AboutOmpa,
  Header,
} from "./containers";

import { CTA, Brand, Navbar } from "./component";
import "./App.css";

const App = () => {
  return (
    <div>
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>
        <Brand />
        <AboutOmpa />
        <Features />
        <Contact />
        <CTA />
        <Blog />
        <Footer />
      </div>
    </div>
  );
};

export default App;
