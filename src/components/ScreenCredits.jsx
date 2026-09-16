import React, { useState } from "react";
import { ArrowUpRight, Plus, Minus } from "@phosphor-icons/react";
import { credits } from "../data/credits.js";
import { imageUrl } from "../utils/media.js";

export function ScreenCredits() {
  const [expanded, setExpanded] = useState(null);
  return (
    <section className="screen" id="screen">
      <div className="screen-title">
        <p className="eyebrow accent">ON SCREEN</p>
        <h2>
          Every character.
          <br />
          <em>A new world.</em>
        </h2>
        <p>
          Recent releases and selected chapters
          <br />
          from television and telefilm.
        </p>
        <img
          src={imageUrl(104)}
          alt="Portrait of Zubab Rana in a pale pink ensemble"
          loading="lazy"
        />
        <span className="eyebrow">
          PORTRAIT FROM THE PERSONAL ARCHIVE
        </span>
      </div>
      <div className="credits">
        {credits.map((c, i) => (
          <article key={c.title}>
            <button
              aria-expanded={expanded === i}
              onClick={() => setExpanded(expanded === i ? null : i)}
            >
              <span className="credit-number">0{i + 1}</span>
              <span>
                <small className="eyebrow">{c.type}</small>
                <h3>{c.title}</h3>
              </span>
              {expanded === i ? (
                <Minus size={23} weight="thin" />
              ) : (
                <Plus size={23} weight="thin" />
              )}
            </button>
            {expanded === i && (
              <div className="credit-detail">
                <p>{c.text}</p>
                <a
                  className="text-link"
                  target="_blank"
                  rel="noreferrer"
                  href={c.url}
                >
                  {c.linkLabel} <ArrowUpRight size={18} />
                </a>
              </div>
            )}
          </article>
        ))}
        <p className="credits-note">
          Selected credits · Reviewed 16 September 2026.
        </p>
      </div>
    </section>
  );
}
