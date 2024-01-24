import React, { useEffect, useRef } from "react";
import { scrollAnimation } from "../../utils/scrollAnimation";
import PressCards from "./components/PressCards";

const PressSection = () => {
  const sectionRef = useRef(null);

  const Title = () => {
    return (
      <div className="mg-bottom-64px">
        <div className="inner-container _620px center">
          <div className="text-center">
            <div className="mg-bottom-12px">
              <div className="text-200 bold text-uppercase text-primary">
                Press &amp; News
              </div>
            </div>
            <h2>
              See what the press says about{" "}
              <span className="text-no-wrap">Deliver X</span>
            </h2>
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    if (sectionRef) {
      scrollAnimation(sectionRef);
    }
  }, [sectionRef]);

  return (
    <section ref={sectionRef} className="section _200px bg-body-bg">
      <div className="container-default w-container">
        <div className="inner-container _680px-tablet center">
          <Title />
          <PressCards />
        </div>
      </div>
    </section>
  );
};

export default PressSection;
