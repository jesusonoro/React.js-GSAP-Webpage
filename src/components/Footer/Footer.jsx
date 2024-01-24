import { scrollAnimation } from "../../utils/scrollAnimation";
import "./Footer.scss";
import React, { useEffect, useRef } from "react";

const Footer = () => {
  const sectionRef = useRef(null);

  const FooterTop = () => {
    return (
      <div className="footer-top">
        <div className="w-layout-grid grid-footer-2-column---logo-and-buttons">
          <div className="inner-container _450px">
            <a href="/home" className="footer-logo-wrapper w-inline-block">
              <img
                src="https://assets-global.website-files.com/61fd4a65725a5325e9bb25c2/6216c3e8db8e185b2e172d35_logo-deliver-template.svg"
                alt="Deliver X Webflow Template - Logo"
                className="footer-logo"
              ></img>
            </a>
            <p className="mg-bottom-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod tempor{" "}
              <span className="text-no-wrap">incididunt ut.</span>
            </p>
          </div>
          <div className="buttons-row download-app">
            <div className="btn-row-left download-app">
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                className="btn-primary download-app w-inline-block"
                rel="noreferrer"
              >
                <div className="custom-icon-font button-left apple"></div>
                <div>Download for iOS</div>
              </a>
            </div>
            <div className="btn-row-right">
              <a
                href="https://play.google.com/"
                target="_blank"
                className="btn-primary download-app w-inline-block"
                rel="noreferrer"
              >
                <div className="custom-icon-font button-left android"></div>
                <div>Download for Android</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const FooterMiddle = () => {
    return (
      <div className="footer-middle">
        <div className="w-layout-grid grid-3-columns footer-nav-menu">
          <div className="inner-container _230px">
            <div className="mg-bottom-40px">
              <div className="text-300 bold text-secondary">Menu</div>
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
                    aria-current="page"
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
              <div className="text-300 bold  text-secondary">
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
          <div className="inner-container _502px">
            <div className="mg-bottom-40px">
              <div className="text-300 bold text-secondary">
                Available in
              </div>
            </div>
            <div className="w-layout-grid grid-2-columns footer-country-available-service">
              <div className="flex-horizontal align-center">
                <div className="mg-right-18px">
                  <div className="inner-container _78px width-100 responsive">
                    <img
                      src="https://assets-global.website-files.com/61fd4a65725a5325e9bb25c2/61fdd35beba8182905a8fd1c_icon-1-service-available-delivery-template.svg"
                      loading="eager"
                      alt="San Francisco - Deliver X Webflow Template"
                      className="image border-radius-24px responsive"
                    ></img>
                  </div>
                </div>
                <div className="heading-h5-size country-available">
                  San Francisco, CA
                </div>
              </div>
              <div className="flex-horizontal align-center">
                <div className="mg-right-18px">
                  <div className="inner-container _78px width-100 responsive">
                    <img
                      src="https://assets-global.website-files.com/61fd4a65725a5325e9bb25c2/61fdd35beba818a369a8fd1e_icon-2-service-available-delivery-template.svg"
                      loading="eager"
                      alt="New York - Deliver X Webflow Template"
                      className="image border-radius-24px responsive"
                    ></img>
                  </div>
                </div>
                <div className="heading-h5-size country-available">
                  New York, NY
                </div>
              </div>
              <div className="flex-horizontal align-center">
                <div className="mg-right-18px">
                  <div className="inner-container _78px width-100 responsive">
                    <img
                      src="https://assets-global.website-files.com/61fd4a65725a5325e9bb25c2/61fdd35b08dbc7d63e9b3811_icon-3-service-available-delivery-template.svg"
                      loading="eager"
                      alt="Los Angeles - Deliver X Webflow Template"
                      className="image border-radius-24px responsive"
                    ></img>
                  </div>
                </div>
                <div className="heading-h5-size country-available">
                  Los Angeles, CA
                </div>
              </div>
              <div className="flex-horizontal align-center">
                <div className="mg-right-18px">
                  <div className="inner-container _78px width-100 responsive">
                    <img
                      src="https://assets-global.website-files.com/61fd4a65725a5325e9bb25c2/61fdd35b80572eda7e5d0c79_icon-4-service-available-delivery-template.svg"
                      loading="eager"
                      alt="Seattle - Deliver X Webflow Template"
                      className="image border-radius-24px responsive"
                    ></img>
                  </div>
                </div>
                <div className="heading-h5-size country-available">
                  Seattle, WA
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const FooterBottom = () => {
    return (
      <div className="footer-bottom">
        <p className="mg-bottom-0">
          Copyright © Deliver X | Designed by{" "}
          <a
            href="https://brixtemplates.com/"
            target="_blank"
            className="text-decoration-none"
            rel="noreferrer"
          >
            BRIX Templates
          </a>{" "}
          - Powered by{" "}
          <a
            href="https://webflow.com/"
            target="_blank"
            className="text-decoration-none"
            rel="noreferrer"
          >
            Webflow
          </a>
        </p>
      </div>
    );
  };

  useEffect(() => {
    if (sectionRef) {
      scrollAnimation(sectionRef);
    }
  }, [sectionRef]);

  return (
    <footer ref={sectionRef} className="footer-wrapper">
      <div className="container-default w-container">
        <FooterTop />
        <FooterMiddle />
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
