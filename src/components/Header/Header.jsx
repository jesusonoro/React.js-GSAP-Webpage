/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Header.scss";
import React, { useEffect, useRef, useState } from "react";

import HamburguerMenu from "./components/HamburguerMenu/HamburguerMenu";
import gsap from "gsap";
import { Power3 } from "gsap/gsap-core";
import NavOverlay from "./components/NavOverlay/NavOverlay";
import logo from "../../Assets/logo.svg";
import PagesSubMenu from "./components/PagesSubMenu";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Header = () => {
  const headerRef = useRef(null);
  const headerContentRef = useRef(null);
  const [open, setOpen] = useState(false);

  const Logo = () => {
    return (
      <a className="header-logo-link" href="/">
        <img src={logo} alt="Deliver X Logo" className="w-100"></img>
      </a>
    );
  };

  const Toggler = () => {
    return (
      <HamburguerMenu
        onClick={() => {
          setOpen(!open);
        }}
      />
    );
  };

  const simpleDownAnimation = (_ref, delay) => {
    gsap.fromTo(
      _ref.current,
      {
        y: -50,
        ease: Power3.easeOut,
      },
      {
        y: 0,
        scale: 1,
        duration: 0.5,
        delay: delay,
      }
    );
  };

  const CTAButtons = () => {
    return (
      <div className="buttons-row header">
        <div className="btn-row-left header">
          <a href="/download" className="btn-secondary small w-button">
            Download app
          </a>
        </div>
        <div className="btn-row-right">
          <a href="/contact" className="btn-primary small w-button">
            Register
          </a>
        </div>
      </div>
    );
  };

  const DesktopNav = () => {
    return (
      <nav role="navigation" className="header-nav-menu-wrapper w-nav-menu">
        <ul className="header-nav-menu-list">
          <li className="header-nav-list-item header">
            <a href="/home" className="header-nav-link w-nav-link">
              Home
            </a>
          </li>
          <li className="header-nav-list-item header">
            <a
              href="/about"
              className="header-nav-link w-nav-link text-primary"
            >
              About
            </a>
          </li>
          <li className="header-nav-list-item header">
            <a href="/plans" className="header-nav-link w-nav-link">
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
    );
  };

  const HeaderContent = () => {
    return (
      <div
        ref={headerContentRef}
        className="header-content d-flex justify-content-between w-100"
      >
        <div className="header-content-wrapper">
          <Logo />
          <div className="h-fit d-flex flex-row justify-items-center align-items-center">
            <DesktopNav />
            <div className="cart">
              <a className="header-nav-link fw-medium text-decoration-none text-secondary">
                Cart(0)
              </a>
            </div>
            <CTAButtons />
            <Toggler />
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    if (headerRef && headerContentRef) {
      simpleDownAnimation(headerRef, "down", 0);
      simpleDownAnimation(headerContentRef, "down", 0.4);
      addScrollToggling();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerRef, headerContentRef]);

  const addScrollToggling = () => {
    const showAnim = gsap
      .from(headerRef.current.parentNode, {
        yPercent: -100,
        paused: true,
        duration: 0.2,
      })
      .progress(1);
    ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse();
      },
    });
  };

  return (
    <header className="bg-light-3">
      <div ref={headerRef} className="header bg-white">
        <HeaderContent />
        <NavOverlay open={open} />
      </div>
    </header>
  );
};

export default Header;
