import { SectionLink } from "./SectionLink.jsx";
import React from "react";
import { ArrowUpRight } from "@phosphor-icons/react";

export function Footer() {
  return (
    <footer>
      <SectionLink className="brand" href="#top" aria-label="Back to top">
        ZR
      </SectionLink>
      <span className="eyebrow">ZUBAB RANA · BEYOND THE FRAME</span>
      <span className="footer-note">Portfolio</span>
      <SectionLink href="#top" className="back-top">
        Back to top <ArrowUpRight size={18} />
      </SectionLink>
    </footer>
  );
}
