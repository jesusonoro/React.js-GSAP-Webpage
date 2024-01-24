import "./HeadlineSection.scss";
import React, { useEffect, useRef } from "react";
import deliveryGuy from "../../Assets/images/deliveryGuy.png";
import Stats from "./components/Stats/Stats";
import { scrollAnimation } from "../../utils/scrollAnimation";
import gsap from "gsap";
import { Power3 } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HeadlineSection = () => {
  gsap.registerPlugin(ScrollTrigger);
  const animRef1 = useRef(null);
  const animRef2 = useRef(null);
  const animRef3 = useRef(null);
  const animRef4 = useRef(null);

  useEffect(() => {
    if (animRef1 && animRef2 && animRef3 && animRef4) {
      scrollAnimation(animRef1, "up", 0.2);
      scrollAnimation(animRef2, "up", 0.3);
      scrollAnimation(animRef3, "up", 0.4);
      scrollAnimation(animRef4, "up", 0.5);
    }
  }, [animRef1, animRef2, animRef3, animRef4]);

  const headline =
    "We are here to help amazing restaurants get great customers";
  const description =
    "At morbi adipiscing sit sed consectetur senectus Dignissim sed amet tincidunt vitae ultricies ultrices amet fermentum amet neque et id sed lacinia massa pretium aliquam libero et.";

  const About = () => {
    return (
      <div className="d-flex flex-column text-center-tablet justify-content-between">
        <p className="about-title fw-bold text-primary" ref={animRef1}>
          ABOUT DELIVER X
        </p>
        <h1 className="text-secondary" ref={animRef2}>
          {headline}
        </h1>
        <div className="description" ref={animRef3}>
          <p className="description-text text-light m-0">{description}</p>
        </div>
      </div>
    );
  };

  const HeadlineImage = () => {
    const floatImgRef1 = useRef(null);
    const floatImgRef2 = useRef(null);

    const FloatingImg1 = () => {
      return (
        <div
          ref={floatImgRef1}
          className="image-wrapper border-radius-16px image-absolute-01"
        >
          <img
            src="https://assets-global.website-files.com/61fd4a65725a5325e9bb25c2/6201768e2b5f20a3847da6a8_image-1-card-about-hero-delivery-template.png"
            loading="eager"
            alt="Help Amazing Restaurants With Great Customers - Deliver X Webflow Template"
            className="image cover"
          ></img>
        </div>
      );
    };
    const FloatingImg2 = () => {
      return (
        <div
          ref={floatImgRef2}
          className="image-wrapper border-radius-8px image-absolute-02"
        >
          <img
            src="https://assets-global.website-files.com/61fd4a65725a5325e9bb25c2/6201768ecbdabafa33e57a7c_image-2-card-about-hero-delivery-template.svg"
            loading="eager"
            alt="Help Amazing Restaurants With Great Customers - Deliver X Webflow Template"
            className="image cover"
          ></img>
        </div>
      );
    };

    const openImgAnimation = (_ref, delay) => {
      const scrollTriggerOptions = {
        trigger: _ref.current,
      };
      gsap.fromTo(
        _ref.current,
        {
          scale: 0,
        },
        {
          scale: 1,
          ease: Power3.easeOut,
          scrollTrigger: scrollTriggerOptions,
          duration: 0.5,
          delay: delay,
        }
      );
    };
    const floatImgAnimation = (_ref, yInit, yFinal) => {
      const scrollTriggerOptions = {
        trigger: _ref.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 6,
      };

      gsap.fromTo(
        _ref.current,
        {
          y: yInit,
        },
        {
          y: yFinal,
          ease: Power3.easeOut,
          scrollTrigger: scrollTriggerOptions,
        }
      );
    };

    useEffect(() => {
      if (floatImgRef1.current && floatImgRef2.current) {
        openImgAnimation(floatImgRef1, 0.8);
        openImgAnimation(floatImgRef2, 1.0);
        floatImgAnimation(floatImgRef1, -50, 10);
        floatImgAnimation(floatImgRef2, 50, -60);
      }
    }, [floatImgRef1, floatImgRef2]);

    return (
      <div ref={animRef4}>
        <div style={{ position: "relative" }}>
          <img className="w-100" src={deliveryGuy} alt="Delivery guy"></img>
          <FloatingImg1 />
          <FloatingImg2 />
        </div>
      </div>
    );
  };

  return (
    <section id="headlineSection">
      <div className="container-default w-container">
        <div className="w-layout-grid grid-1-column gap-row-100px">
          <div className="w-layout-grid grid-2-columns">
            <About />
            <HeadlineImage />
          </div>
          <Stats />
        </div>
      </div>
    </section>
  );
};

export default HeadlineSection;
