import React, { useState, useRef } from "react";
import { reels } from "../data/reels.js";

export function Reels() {
  const reelPlayers = useRef([]);
  const [reelErrors, setReelErrors] = useState({});
  function playReel(current) {
    reelPlayers.current.forEach((player) => {
      if (player && player !== current) player.pause();
    });
  }
  return (
    <section className="reels" id="reels" aria-labelledby="reels-heading">
      <div className="section-head">
        <div>
          <p className="eyebrow accent">IN MOTION</p>
          <h2 id="reels-heading">A moment. A mood. A reel.</h2>
        </div>
        <span className="eyebrow">{reels.length} LITTLE STORIES</span>
      </div>
      <p className="reels-intro">
        A closer look, one moving frame at a time.
      </p>
      <div className="reels-grid">
        {reels.map((reel, index) => (
          <figure className="reel" key={reel.id}>
            <video
              ref={(el) => {
                reelPlayers.current[index] = el;
              }}
              controls
              playsInline
              preload="none"
              poster={`/reels/reel-${reel.id}.jpg`}
              aria-label={`Zubab Rana reel ${reel.id}`}
              onPlay={(e) => playReel(e.currentTarget)}
              onError={() =>
                setReelErrors((errors) => ({
                  ...errors,
                  [reel.id]: true,
                }))
              }
            >
              <source
                src={`/reels/reel-${reel.id}.mp4`}
                type="video/mp4"
              />
              Your browser does not support video playback.
            </video>
            <figcaption>
              <span>Reel {String(index + 1).padStart(2, "0")}</span>
              <span className="eyebrow">{reel.duration}</span>
            </figcaption>
            {reelErrors[reel.id] && (
              <p className="reel-error" role="status">
                This reel could not play.{" "}
                <a href={`/reels/reel-${reel.id}.mp4`}>
                  Open video directly
                </a>
                .
              </p>
            )}
          </figure>
        ))}
      </div>
    </section>
  );
}
