// app.js
import React from "react";
import HomePage from "./components/homepage.jsx";
import About from "./components/about.jsx";
import NavBar from "./components/navbar.jsx";
import SocialLinks from "./components/socialLinks";
import MyWorks from "./components/works";
import ContactMe from "./components/contatctMe.jsx";

export default function app() {
  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <SocialLinks />
      <HomePage />
      <About />
      <MyWorks />
      <ContactMe />
    </div>
  );
}
