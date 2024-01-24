import "./AboutUsAndMissionSection.scss";
import React, { useEffect, useRef } from "react";
import aboutUsImg from "../../Assets/images/aboutUsImg.jpeg";
import { scrollAnimation } from "../../utils/scrollAnimation";

const AboutUsAndMissionSection = () => {
  const sectionRef = useRef(null);
  const aboutUsImgRef = useRef(null);
  const missionImgRef = useRef(null);

  const LocalSectionContainer = (props) => {
    return (
      <div className="container-default w-container">
        <div className="inner-container _680px-tablet center">
          <div className="w-layout-grid grid-1-column gap-row-100px story">
            {props.children}
          </div>
        </div>
      </div>
    );
  };
  const AboutUs = () => {
    return (
      <div className="aboutUs w-layout-grid grid-2-columns text-right-default">
        <div ref={aboutUsImgRef} className="image-wrapper border-radius-24px">
          <img className="cover" src={aboutUsImg} alt="Delivery service"></img>
        </div>
        <div className="inner-container _480px width-100-tablet right">
          <div className="mg-bottom-12px">
            <div className="text-200 bold text-uppercase text-primary">
              About us
            </div>
          </div>
          <h2>
            Our company started back{" "}
            <span className="text-no-wrap">in 2016</span>
          </h2>
          <p className="mg-bottom-0">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur.
          </p>
        </div>
      </div>
    );
  };
  const OurMission = () => {
    return (
      <div className="w-layout-grid grid-2-columns text-left-default">
        <div className="inner-container _533px width-100-tablet">
          <div className="mg-bottom-12px">
            <div className="text-200 bold text-uppercase text-primary">
              Our mission
            </div>
          </div>
          <h2>
            Our mission is to disrupt the{" "}
            <span className="text-no-wrap">food industry</span>
          </h2>
          <div className="inner-container _480px width-100-tablet">
            <p className="mg-bottom-0">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut{" "}
              <span className="text-no-wrap">odit aut fugit.</span>
            </p>
          </div>
        </div>
        <div ref={missionImgRef} className="image-wrapper overflow-hidden border-radius-24px shadow-04">
          <img
            src="https://assets-global.website-files.com/61fd4a65725a5325e9bb25c2/6201768ef5a81a9f9bf7b9e9_image-1-stoy-about-delivery-template.jpg"
            alt="Disrupt The Food Industry - Deliver X Webflow Template"
          ></img>
        </div>
      </div>
    );
  };

  useEffect(() => {
    if(sectionRef) {
      scrollAnimation(sectionRef);
    }
  }, [sectionRef]);

  useEffect(() => {
    if(aboutUsImgRef) {
      scrollAnimation(aboutUsImgRef, "grow");
    }
  }, [aboutUsImgRef]);

  useEffect(() => {
    if(missionImgRef) {
      scrollAnimation(missionImgRef, "grow");
    }
  }, [missionImgRef]);

  return (
    <section ref={sectionRef} id="aboutUs-mission">
      <LocalSectionContainer>
        <AboutUs />
        <OurMission />
      </LocalSectionContainer>
    </section>
  );
};

export default AboutUsAndMissionSection;
