import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Blog from "../components/Sections/Blog";
import Pricing from "../components/Sections/Pricing";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer";
import Courses from "../components/Sections/Courses";

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Services />
      <Courses />
      <Blog />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}
