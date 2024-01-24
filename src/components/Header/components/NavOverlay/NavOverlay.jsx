import gsap from "gsap";
import "./NavOverlay.scss";
import React, { useEffect, useRef } from "react";
import PagesSubMenu from "../PagesSubMenu";

const NavOverlay = (props) => {
  const navRef = useRef(null);

  useEffect(() => {
    if (navRef.current) {
      if (props.open) {
        gsap.fromTo(
          navRef.current,
          {
            y: "-100%",
            display: "block",
          },
          {
            y: 0,
            display: "block",
          }
        );
      } else {
        gsap.fromTo(
          navRef.current,
          {
            y: 0,
            display: "block",
          },
          {
            y: "-100%",
            display: "none",
          }
        );
      }
    }
  }, [props.open]);

  return (
    <div className={props.open ? "w-nav-overlay open" : "w-nav-overlay"}>
      <nav
        ref={navRef}
        role="navigation"
        className="header-nav-menu-wrapper w-nav-menu"
      >
        <ul className="header-nav-menu-list">
          <li className="header-nav-list-item header">
            <a
              href="/home"
              className="header-nav-link w-nav-link w--nav-link-open"
            >
              Home
            </a>
          </li>
          <li className="header-nav-list-item header">
            <a
              href="/about"
              className="header-nav-link w-nav-link w--current w--nav-link-open text-primary"
            >
              About
            </a>
          </li>
          <li className="header-nav-list-item header">
            <a
              href="/plans"
              className="header-nav-link w-nav-link w--nav-link-open"
            >
              Pricing
            </a>
          </li>
          <li className="header-nav-list-item header">
            <PagesSubMenu />
          </li>
          <li className="header-nav-list-item show-in-tablet-menu-header">
            <a href="/plans" className="btn-primary width-100 w-button">
              Get started
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavOverlay;
