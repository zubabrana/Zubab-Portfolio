import React from "react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { imageUrl } from "../utils/media.js";

export function Gulab() {
  return (
    <section
      className="brand-feature"
      id="gulab"
      aria-labelledby="gulab-heading"
    >
      <div className="brand-feature-title">
        <p className="eyebrow">A PERSONAL VENTURE</p>
        <h2 id="gulab-heading">Gulab.</h2>
        <img
          className="gulab-art"
          src={imageUrl(321)}
          alt="Gulab in Urdu, beside a red rose"
          loading="lazy"
        />
        <p className="brand-byline">A brand by Zubab Rana.</p>
      </div>
      <div className="brand-feature-copy">
        <p>Another chapter, beyond the frame.</p>
        <p>
          Discover Gulab, Zubab Rana’s own brand, and explore its world on
          Instagram.
        </p>
        <a
          href="https://www.instagram.com/gulabofficialpk/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-link"
        >
          Discover Gulab <ArrowUpRight size={22} />
        </a>
        <span className="brand-handle">@gulabofficialpk</span>
      </div>
    </section>
  );
}
