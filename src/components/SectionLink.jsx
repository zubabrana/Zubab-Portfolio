import React from "react";

// Handle in-page navigation directly, including repeated clicks on the same section.
export function SectionLink({ href, onClick, children, ...props }) {
  function navigate(event) {
    onClick?.(event);
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const target = document.getElementById(href.slice(1));
    if (!target) return;
    event.preventDefault();
    if (window.location.hash !== href) window.history.pushState(null, "", href);
    target.scrollIntoView({ behavior: "instant", block: "start" });
    target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
  }
  return <a {...props} href={href} onClick={navigate}>{children}</a>;
}
