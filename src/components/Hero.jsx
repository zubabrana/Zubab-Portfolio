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
            Style,
            <br />
            in every angle.
          </h2>
          <p className="intro-copy">
            An off-duty study in shape,
            <br className="desktop-break" /> movement and personal style.
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
            src={imageUrl(327)}
            alt="Zubab Rana taking a side-profile mirror portrait in a black polka-dot top"
            fetchPriority="high"
          />
        </div>
        <div className="hero-aside">
          <div className="aside-crop">
            <img
              src={imageUrl(328)}
              alt="Zubab Rana taking a front-facing mirror portrait in a black polka-dot top"
              fetchPriority="high"
            />
          </div>
          <h2>A softer frame.</h2>
          <span className="short-rule" />
          <p className="eyebrow">
            POISE
            <br />
            IN
            <br />MOTION
          </p>
        </div>
      </section>
    </>
  );
}
