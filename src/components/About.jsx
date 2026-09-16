import React from "react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { imageUrl } from "../utils/media.js";

export function About() {
  return (
    <section className="about" id="about">
      <div>
        <img
          src={imageUrl(120)}
          alt="Zubab Rana outdoors, resting beside a stone balustrade"
          loading="lazy"
        />
      </div>
      <div className="about-copy">
        <p className="eyebrow accent">BEYOND THE FRAME</p>
        <h2>
          The woman
          <br />
          <em>behind the roles.</em>
        </h2>
        <p>
          Zubab Rana is a Pakistani actress and model whose work moves
          between television, fashion and editorial photography.
        </p>
        <p>
          Her screen work spans early roles in <em>Naseebon Jali</em>,{" "}
          <em>Mere Khudaya</em> and <em>Bandish</em>, followed by{" "}
          <em>Behroop</em>, <em>Chaal</em> and <em>Khudsar</em>. Her 2025
          credits include the drama <em>Sauda</em> and the comedy telefilm{" "}
          <em>Miss B.A Pass</em>.
        </p>
        <a
          href="https://www.thenews.com.pk/magazine/instep-today/463606-catching-up-with-zubab-rana"
          target="_blank"
          rel="noreferrer"
          className="text-link"
        >
          Read the 2019 career interview <ArrowUpRight size={20} />
        </a>
      </div>
    </section>
  );
}
