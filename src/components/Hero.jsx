import { SectionLink } from "./SectionLink.jsx";
import React from "react";
import { ArrowRight } from "@phosphor-icons/react";
import { imageUrl } from "../utils/media.js";

export function Hero() {
  return (
    <>
      <div className="masthead">
        <h1>ZUBAB RANA</h1>
        <p className="eyebrow">
          STORIES
          <br />
          PEOPLE
          <br />
          CHARACTERS
          <br />A WORLD
          <br />
          WITHIN
        </p>
      </div>
      <section className="hero" aria-label="Introduction">
        <div className="intro">
          <p className="eyebrow accent">THE ART OF BECOMING</p>
          <h2>
            Presence,
            <br />
            in every frame.
          </h2>
          <p className="intro-copy">
            An exploration of performance,
            <br className="desktop-break" /> expression and personal style.
          </p>
          <SectionLink className="text-link" href="#editorial">
            Explore portfolio <ArrowRight size={23} weight="thin" />
          </SectionLink>
          <p className="eyebrow intro-foot">
            SAME SOUL
            <br />
            DIFFERENT FRAMES
          </p>
        </div>
        <div className="hero-image">
          <img
            src={imageUrl(205)}
            alt="Zubab Rana beside a window overlooking the city"
            fetchPriority="high"
          />
        </div>
        <div className="hero-aside">
          <div className="aside-crop">
            <img
              src={imageUrl(207)}
              alt="Zubab Rana in afternoon light beside a brick wall"
              fetchPriority="high"
            />
          </div>
          <h2>Beyond the frame.</h2>
          <span className="short-rule" />
          <p className="eyebrow">
            MORE
            <br />
            THAN
            <br />A ROLE
          </p>
        </div>
      </section>
    </>
  );
}
