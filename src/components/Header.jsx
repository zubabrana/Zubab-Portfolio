import { SectionLink } from "./SectionLink.jsx";
import React, { useState } from "react";
import { X, List } from "@phosphor-icons/react";

export function Header() {
  const [menu, setMenu] = useState(false);
  return (
    <header className="header">
      <SectionLink className="brand" href="#top" aria-label="Zubab Rana home">
        ZR
      </SectionLink>
      <span className="header-label">THE PORTFOLIO</span>
      <button
        className="menu-toggle"
        onClick={() => setMenu(!menu)}
        aria-label={menu ? "Close navigation" : "Open navigation"}
        aria-expanded={menu}
        aria-controls="main-navigation"
      >
        {menu ? <X size={23} /> : <List size={23} />}
      </button>
      <nav id="main-navigation" aria-label="Main navigation" className={menu ? "open" : ""}>
        {[
          ["Screen", "screen"],
          ["Editorial", "editorial"],
          ["Reels", "reels"],
          ["About", "about"],
          ["Gulab", "gulab"],
          ["Enquiries", "enquiries"],
        ].map(([name, id]) => (
          <SectionLink key={id} href={"#" + id} onClick={() => setMenu(false)}>
            {name}
          </SectionLink>
        ))}
      </nav>
    </header>
  );
}
