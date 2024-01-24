import { useEffect, useRef } from "react";
import { scrollAnimation } from "../../../utils/scrollAnimation";

const Card = (props) => {
  const cardRef = useRef(null);

  const Arrow = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-arrow-up-right"
        viewBox="0 0 16 16"
      >
        <path d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
      </svg>
    );
  };

  useEffect(() => {
    if (cardRef.current) {
      scrollAnimation(cardRef, "", 0.8);
    }
  }, [cardRef]);

  return (
    <a
      ref={cardRef}
      href="https://webflow.com/"
      target="_blank"
      className="card press link-content w-inline-block"
      rel="noreferrer"
      key={props.i}
    >
      <div className="mg-bottom-26px">
        <img
          src={props.cardData.logo}
          loading="eager"
          alt="What The Press Says About Our Company - Deliver X Webflow Template"
          className="image"
        ></img>
      </div>
      <h3 className="display-4 mg-bottom-24px">{props.cardData.title}</h3>
      <div className="w-layout-grid grid-2-columns card-press-details">
        <div className="mg-right-24px">
          <div className="link-wrapper text-primary fw-bold no-hover">
            <div className="link-text">Read more</div>
            <Arrow />
          </div>
        </div>
        <div className="text-300 medium">{props.cardData.date}</div>
      </div>
    </a>
  );
};

export default Card;
