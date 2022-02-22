import React from "react";
import {
  Navbar,
  Hero,
  SectionTwo,
  SectionThree,
  Contact,
  Footer,
} from "./../../components";
function Home() {
  return (
    <div
      style={{
        backgroundColor: "#cbbeff",
      }}
    >
      <Navbar />
      <Hero />
      <SectionTwo />
      <SectionThree />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
