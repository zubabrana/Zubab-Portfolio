import React, { useRef, useEffect } from "react";
import { X, ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { imageUrl } from "../utils/media.js";

export function PhotoViewer({ photos, active, onClose, onMove }) {
  const dialog = useRef(null);
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    if (active !== null) {
      dialog.current?.showModal();
      document.body.style.overflow = "hidden";
    } else {
      dialog.current?.close();
    }
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [active]);
  return (
    <dialog
      ref={dialog}
      className="lightbox"
      onCancel={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") onMove(1);
        if (e.key === "ArrowLeft") onMove(-1);
      }}
      aria-label="Photograph viewer"
    >
      {active !== null && (
        <>
          <button
            autoFocus
            className="close-view"
            onClick={onClose}
            aria-label="Close photograph"
          >
            <X size={26} />
          </button>
          <img
            src={imageUrl(photos[active].id)}
            alt={`Zubab Rana — ${photos[active].title}`}
          />
          <div className="viewer-bar">
            <button onClick={() => onMove(-1)} aria-label="Previous photograph">
              <ArrowLeft size={25} />
            </button>
            <p>
              {photos[active].title}
              <small>
                {active + 1} / {photos.length}
              </small>
            </p>
            <button onClick={() => onMove(1)} aria-label="Next photograph">
              <ArrowRight size={25} />
            </button>
          </div>
        </>
      )}
    </dialog>
  );
}
