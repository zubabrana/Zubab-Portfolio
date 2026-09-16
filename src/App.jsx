import { SectionLink } from "./components/SectionLink.jsx";
import React from "react";
import { Header } from "./components/Header.jsx";
import { Hero } from "./components/Hero.jsx";
import { Gallery } from "./components/Gallery.jsx";
import { Reels } from "./components/Reels.jsx";
import { ScreenCredits } from "./components/ScreenCredits.jsx";
import { About } from "./components/About.jsx";
import { Gulab } from "./components/Gulab.jsx";
import { Enquiries } from "./components/Enquiries.jsx";
import { Footer } from "./components/Footer.jsx";
import { Analytics } from "@vercel/analytics/react";

export function App() {
  return (
    <>
      <SectionLink className="skip" href="#main">Skip to content</SectionLink>
      <div className="page" id="top">
        <Header />
        <main id="main">
          <Hero />
          <Gallery />
          <Reels />
          <ScreenCredits />
          <About />
          <Gulab />
          <Enquiries />
        </main>
        <Footer />
      </div>
      <Analytics />
    </>
  );
}
