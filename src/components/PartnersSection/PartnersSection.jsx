import React, { useEffect, useRef } from "react";
import { scrollAnimation } from "../../utils/scrollAnimation";

const PartnersSection = () => {
  const sectionRef = useRef(null);

  const MainText = () => {
    return (
      <div className="mg-bottom-110px">
        <div className="inner-container _700px center">
          <div className="text-center">
            <div className="mg-bottom-12px">
              <div className="text-200 bold text-uppercase text-primary">
                Our Partners
              </div>
            </div>
            <h2>
              We don't walk alone, Deliver X works thanks to{" "}
              <span className="text-no-wrap">our partners</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu
              egestas morbi sem vulputate etiam facilisis pellentesque{" "}
              <span className="text-no-wrap">ut quis.</span>
            </p>
          </div>
        </div>
      </div>
    );
  };
  const PartnersContainer = () => {
    const animRef1 = useRef(null);
    const animRef2 = useRef(null);
    const animRef3 = useRef(null);

    useEffect(() => {
      if(animRef1.current && animRef2.current && animRef3.current) {
        scrollAnimation(animRef1, "", 0.4, 0, true);
        scrollAnimation(animRef2, "", 0.7, 0, true);
        scrollAnimation(animRef3, "", 1, 0, true);
      }
    }, [animRef1, animRef2, animRef3])

    return (
      <div className="w-layout-grid grid-3-columns gap-row-80px _1-col-tablet">
        <div className="inner-container _350px left">
          <div className="text-center">
            <div ref={animRef1} className="mg-bottom-32px">
              <div className="inner-container _218px center responsive">
                <img
                  src="https://assets-global.website-files.com/61fd4a65725a5325e9bb25c2/62017b070212f9403ca3a97f_image-1-partners-delivery-template.svg"
                  alt="Customers - Deliver X Webflow Template"
                ></img>
              </div>
            </div>
            <h3 className="display-4 mg-bottom-16px">Customers</h3>
            <p className="mg-bottom-0">
              Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
              phasellus mollis sit aliquam{" "}
              <span className="text-no-wrap">sit nullam.</span>
            </p>
          </div>
        </div>
        <div className="inner-container _350px center">
          <div className="text-center">
            <div ref={animRef2} className="mg-bottom-32px">
              <div className="inner-container _218px center responsive">
                <img
                  src="https://assets-global.website-files.com/61fd4a65725a5325e9bb25c2/62017b07238dadda77c03341_image-2-partners-delivery-template.svg"
                  alt="Restaurants - Deliver X Webflow Template"
                ></img>
              </div>
            </div>
            <h3 className="display-4 mg-bottom-16px">Restaurants</h3>
            <p className="mg-bottom-0">
              Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
              phasellus mollis sit aliquam
              <span className="text-no-wrap">sit nullam.</span>
            </p>
          </div>
        </div>
        <div className="inner-container _350px right">
          <div className="text-center">
            <div ref={animRef3} className="mg-bottom-32px">
              <div className="inner-container _218px center responsive">
                <img
                  src="https://assets-global.website-files.com/61fd4a65725a5325e9bb25c2/62017b075b917b7d28e88cc8_image-3-partners-delivery-template.svg"
                  alt="Riders - Deliver X Webflow Template"
                ></img>
              </div>
            </div>
            <h3 className="display-4 mg-bottom-16px">Riders</h3>
            <p className="mg-bottom-0">
              Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
              phasellus mollis sit aliquam{" "}
              <span className="text-no-wrap">sit nullam.</span>
            </p>
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    if(sectionRef) {
      scrollAnimation(sectionRef);
    }
  }, [sectionRef]);

  return (
    <section ref={sectionRef}>
      <div className="container-default w-container">
        <MainText />
        <PartnersContainer />
      </div>
    </section>
  );
};

export default PartnersSection;
