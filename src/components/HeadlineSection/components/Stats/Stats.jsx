import { scrollAnimation } from "../../../../utils/scrollAnimation";
import "./Stats.scss";
import React, { useEffect, useRef } from "react";

const Stats = () => {
  // The anim refs should be modular but I'm hard coding the useRefs just for dev speed
  const animRef0 = useRef(null);
  const animRef1 = useRef(null);
  const animRef2 = useRef(null);
  const animRef3 = useRef(null);

  const stats = [
    {
      amount: "10M",
      symbol: "+",
      unit: "Happy customers",
    },
    {
      amount: "500k",
      symbol: "+",
      unit: "Restaurants available",
    },
    {
      amount: "30M",
      symbol: "+",
      unit: "Successful deliveries",
    },
    {
      amount: "99.9",
      symbol: "%",
      unit: "Customer satisfaction",
    },
  ];
  const Stat = (props) => {
    const amount = props.amount;
    const symbol = props.symbol;
    const unit = props.unit;

    // Hardcoded refs
    const _ref =
      props.refNum === 0
        ? animRef0
        : props.refNum === 1
        ? animRef1
        : props.refNum === 2
        ? animRef2
        : animRef3;

    return (
      <div ref={_ref} className="stat text-center">
        <div className="stat-title d-flex justify-content-center">
          <p className="m-0">{amount}</p>
          <p className="text-primary m-0">{symbol}</p>
        </div>
        <p className="stat-unit m-0 fw-medium text-light">{unit}</p>
      </div>
    );
  };

  useEffect(() => {
    if (animRef0 && animRef1 && animRef2 && animRef3) {
      scrollAnimation(animRef0, "up", 0.1);
      scrollAnimation(animRef1, "up", 0.2);
      scrollAnimation(animRef2, "up", 0.3);
      scrollAnimation(animRef3, "up", 0.4);
    }
  }, [animRef0, animRef1, animRef2, animRef3]);

  return (
    <div className="stats w-layout-grid grid-4-columns">
      {stats.map((stat, i) => {
        return (
          <Stat
            key={i}
            amount={stat.amount}
            symbol={stat.symbol}
            unit={stat.unit}
            refNum={i}
          />
        );
      })}
    </div>
  );
};

export default Stats;
