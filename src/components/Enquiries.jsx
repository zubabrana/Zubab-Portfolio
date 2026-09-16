import React from "react";
import { ArrowUpRight } from "@phosphor-icons/react";

export function Enquiries() {
  return (
    <section className="contact" id="enquiries">
      <div>
        <p className="eyebrow accent">LET’S MAKE SOMETHING MEMORABLE</p>
        <h2>A new story<br /><em>starts here.</em></h2>
        <p>For casting, creative collaborations<br />and press enquiries.</p>
      </div>
      <div className="contact-direct">
        <p className="eyebrow accent">GET IN TOUCH</p>
        <h3>Let’s start a conversation.</h3>
        <p>Connect with Zubab on Instagram for enquiries and collaborations.</p>
        <a className="solid-button" href="https://www.instagram.com/zubab.rana/" target="_blank" rel="noopener noreferrer">Contact on Instagram <ArrowUpRight size={20} /></a>
        <span className="contact-handle">@zubab.rana</span>
      </div>
    </section>
  );
}
