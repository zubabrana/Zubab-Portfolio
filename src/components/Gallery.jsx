import React, { useState, useRef } from "react";
import { ArrowUpRight, Plus } from "@phosphor-icons/react";
import { photos } from "../data/photos.js";
import { PhotoViewer } from "./PhotoViewer.jsx";
import { imageUrl } from "../utils/media.js";

export function Gallery() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(null);
  const [visibleCount, setVisibleCount] = useState(12);
  const gallery = useRef(null);
  function loadMore() {
    const firstNew = visibleCount;
    setVisibleCount((count) => count + 12);
    requestAnimationFrame(() =>
      gallery.current
        ?.querySelectorAll(".gallery-item")
        [firstNew]?.focus({ preventScroll: true }),
    );
  }
  const shown = photos.filter(
    (p) =>
      filter === "All" ||
      (filter === "New additions" ? p.recent : p.category === filter),
  );
  function move(n) {
    setActive((v) => (v + n + photos.length) % photos.length);
  }
  return (
    <>
      <section className="perspectives" id="editorial">
        <div className="section-head">
          <h2>Selected perspectives.</h2>
          <a
            className="instagram-link"
            href="https://www.instagram.com/zubab.rana/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow @zubab.rana <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="collection-nav">
          <p>In editorial. In the moment.</p>
          <div aria-label="Gallery filters">
            {["All", "New additions", "Editorial", "Moments"].map((f) => (
              <button
                key={f}
                aria-pressed={filter === f}
                onClick={() => {
                  setFilter(f);
                  setVisibleCount(12);
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
        <div className="gallery" id="photo-gallery" ref={gallery}>
          {shown.slice(0, visibleCount).map((p, i) => (
            <button
              className="gallery-item"
              key={p.id}
              onClick={() => setActive(photos.indexOf(p))}
              aria-label={`View ${p.title}`}
            >
              <div className="image-wrap">
                <img
                  src={imageUrl(p.id)}
                  alt={`Zubab Rana — ${p.title}`}
                  loading="lazy"
                />
                <span className="view-label">
                  View photograph <ArrowUpRight size={20} />
                </span>
              </div>
              <div className="image-caption">
                <span>{p.title}</span>
                <span className="eyebrow">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </button>
          ))}
        </div>
        <div className="gallery-more">
          <p role="status" aria-live="polite">
            Showing {Math.min(visibleCount, shown.length)} of {shown.length}{" "}
            photographs
          </p>
          <button
            className="solid-button"
            aria-controls="photo-gallery"
            disabled={visibleCount >= shown.length}
            onClick={loadMore}
          >
            {visibleCount >= shown.length
              ? "All photos loaded"
              : "Load more photos"}
            {visibleCount < shown.length && <Plus size={20} />}
          </button>
        </div>
      </section>
      <PhotoViewer photos={photos} active={active} onClose={() => setActive(null)} onMove={move} />
    </>
  );
}
