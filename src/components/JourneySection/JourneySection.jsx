import { scrollAnimation } from "../../utils/scrollAnimation";
import "./JourneySection.scss";
import React, { useEffect, useRef } from "react";

const JourneySection = () => {
  const sectionRef = useRef(null);

  const MainText = () => {
    return (
      <div className="mainText align-stretch">
        <div className="position-sticky top-160px">
          <div className="inner-container _520px _100-tablet">
            <div className="mg-bottom-12px">
              <div className="text-200 bold text-uppercase text-primary">
                Our journey
              </div>
            </div>
            <div className="inner-container _520px-tablet">
              <div className="inner-container _400px-mbl">
                <h2>It has been a long but incredible journey</h2>
              </div>
            </div>
            <p className="mg-bottom-48px">
              Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu
              egestas morbi sem vulputate etiam facilisis pellentesque{" "}
              <span className="text-no-wrap">ut quis.</span>
            </p>
            <div className="buttons-row">
              <div className="btn-row-left">
                <a href="/download" className="btn-primary w-button">
                  Download app
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const Timeline = () => {
    const descriptionPlaceholder =
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam.";
    const events = [
      {
        year: 2016,
        title: "Deliver X was founded",
        description: descriptionPlaceholder,
      },
      {
        year: 2018,
        title: "Raised Series A at $50M valuation",
        description: descriptionPlaceholder,
      },
      {
        year: 2019,
        title: "Raised Series B at $600M valuation",
        description: descriptionPlaceholder,
      },
      {
        year: 2022,
        title: "Raised Series C at $3B valuation",
        description: descriptionPlaceholder,
      },
    ];
    const EventCard = (props) => {
      const cardRef = useRef(null);

      const eventData = props.eventData;
      const year = eventData.year;
      const title = eventData.title;
      const description = eventData.description;

      useEffect(() => {
        if(cardRef.current) {
          scrollAnimation(cardRef, "grow", 0.3);
        }
      }, [cardRef]);

      return (
        <div ref={cardRef}>
          <div className="card chronology">
            <div className="mg-bottom-12px">
              <div className="heading-h4-size text-primary">
                {year.toString()}
              </div>
            </div>
            <h3 className="mg-bottom-32px">{title}</h3>
            <p className="mg-bottom-0 text-light">{description}</p>
          </div>
        </div>
      );
    };
    return (
      <div className="timeline inner-container _588px _100-tablet">
        <div className="w-layout-grid grid-1-column gap-row-40px">
          {events.map((eventData, i) => {
            return <EventCard eventData={eventData} key={i} />;
          })}
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
    <section ref={sectionRef} className="journeySection">
      <div className="container-default w-container">
        <div className="inner-container _680px-tablet center">
          <div className="w-layout-grid grid-2-columns _1-col-tablet gap-row-64px">
            <MainText />
            <Timeline />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
