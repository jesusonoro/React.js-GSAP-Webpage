import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

const PagesSubMenu = () => {
  const [open, setOpen] = useState(false);
  const arrowRef = useRef(null);
  const pagesNavRef = useRef(null);

  useEffect(() => {
    if (arrowRef.current && pagesNavRef) {
      if (open) {
        gsap.to(arrowRef.current, {
          rotation: -180,
        });
        gsap.fromTo(
          pagesNavRef.current,
          {
            opacity: 0,
            display: "block",
          },
          {
            opacity: 1,
            display: "block",
          }
        );
      } else {
        gsap.fromTo(
          arrowRef.current,
          {
            rotation: -180,
          },
          {
            rotation: 0,
          }
        );
        gsap.fromTo(
          pagesNavRef.current,
          {
            opacity: 1,
            display: "block",
          },
          {
            opacity: 0,
            display: "none",
          }
        );
      }
    }
  }, [open]);

  const Title = () => {
    return (
      <button
        className={
          open
            ? "header-nav-link dropdown w-dropdown-toggle w--nav-dropdown-toggle-open text-primary"
            : "header-nav-link dropdown w-dropdown-toggle w--nav-dropdown-toggle-open"
        }
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div>Pages</div>
        <div ref={arrowRef} className="line-rounded-icon dropdown-arrow">
          
        </div>
      </button>
    );
  };
  return (
    <div className="dropdown-wrapper w-dropdown w--nav-dropdown-open">
      <Title />
      <nav
        ref={pagesNavRef}
        className="dropdown-column-wrapper w-dropdown-list"
      >
        <div className="card dropdown">
          <div className="w-layout-grid grid-2-columns dropdown">
            <div className="inner-container _230px">
              <div className="mg-bottom-40px">
                <div className="text-300 bold color-neutral-800">Menu</div>
              </div>
              <div className="nav-menu-list-main-wrapper">
                <ul className="nav-menu-list-wrapper">
                  <li className="nav-menu-list-item">
                    <a href="/home" className="text-200 menu-nav-link">
                      Home
                    </a>
                  </li>
                  <li className="nav-menu-list-item">
                    <a
                      href="/about"
                      className="text-200 menu-nav-link w--current"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-menu-list-item">
                    <a href="/contact" className="text-200 menu-nav-link">
                      Contact
                    </a>
                  </li>
                  <li className="nav-menu-list-item">
                    <a href="/blog" className="text-200 menu-nav-link">
                      Blog
                    </a>
                  </li>
                  <li className="nav-menu-list-item">
                    <a
                      href="https://delivertemplate.webflow.io/blog/4-tips-to-increase-your-side-income-in-food-delivery"
                      className="text-200 menu-nav-link"
                    >
                      Blog posts
                    </a>
                  </li>
                </ul>
                <ul className="nav-menu-list-wrapper last">
                  <li className="nav-menu-list-item">
                    <a href="/plans" className="text-200 menu-nav-link">
                      Plans
                    </a>
                  </li>
                  <li className="nav-menu-list-item">
                    <a
                      href="https://delivertemplate.webflow.io/product/deluxe"
                      className="text-200 menu-nav-link"
                    >
                      Plan single
                    </a>
                  </li>
                  <li className="nav-menu-list-item">
                    <a href="/download" className="text-200 menu-nav-link">
                      Register
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="inner-container _230px">
              <div className="mg-bottom-40px">
                <div className="text-300 bold color-neutral-800">
                  Utility pages
                </div>
              </div>
              <div className="nav-menu-list-main-wrapper">
                <ul className="nav-menu-list-wrapper last">
                  <li className="nav-menu-list-item">
                    <a
                      href="/template-pages/start-here"
                      className="text-200 menu-nav-link"
                    >
                      Start here
                    </a>
                  </li>
                  <li className="nav-menu-list-item">
                    <a
                      href="/template-pages/style-guide"
                      className="text-200 menu-nav-link"
                    >
                      Styleguide
                    </a>
                  </li>
                  <li className="nav-menu-list-item">
                    <a
                      href="https://delivertemplate.webflow.io/401"
                      className="text-200 menu-nav-link"
                    >
                      Password protected
                    </a>
                  </li>
                  <li className="nav-menu-list-item">
                    <a
                      href="https://delivertemplate.webflow.io/404"
                      className="text-200 menu-nav-link"
                    >
                      404 Not found
                    </a>
                  </li>
                  <li className="nav-menu-list-item">
                    <a
                      href="/template-pages/licenses"
                      className="text-200 menu-nav-link"
                    >
                      Licenses
                    </a>
                  </li>
                  <li className="nav-menu-list-item">
                    <a
                      href="/template-pages/changelog"
                      className="text-200 menu-nav-link"
                    >
                      Changelog
                    </a>
                  </li>
                  <li className="nav-menu-list-item">
                    <a
                      href="https://brixtemplates.com/more-webflow-templates"
                      className="text-200 menu-nav-link special"
                    >
                      Browse More Templates
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default PagesSubMenu;
