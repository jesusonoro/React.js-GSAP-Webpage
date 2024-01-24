import React from "react";
import Card from "./Card";

const PressCards = () => {
  const cardsData = [
    {
      logo: "https://assets-global.website-files.com/61fd4a65725a5325e9bb25c2/62017fab386a9117726aad8f_image-1-logo-press-delivery-template.svg",
      title: "Deliver X raises $26M in series B funding for growth",
      date: "January 22, 2023",
    },
    {
      logo: "https://assets-global.website-files.com/61fd4a65725a5325e9bb25c2/62017fac4a9181ff3e5b1fb1_image-3-logo-press-delivery-template.svg",
      title: "Deliver X claims to be the #1 player in the delivery industry",
      date: "Nov 15, 2022",
    },
    {
      logo: "https://assets-global.website-files.com/61fd4a65725a5325e9bb25c2/62017facf5a81a3025f830c1_image-2-logo-press-delivery-template.svg",
      title: "Introducing curbside ordering with Deliver X",
      date: "Sep 18, 2022",
    },
    {
      logo: "https://assets-global.website-files.com/61fd4a65725a5325e9bb25c2/62017fab7168b306f912ea93_image-4-logo-press-delivery-template.svg",
      title: "Introducing the Square POS integration with Deliver X",
      date: "Mar 12, 2022",
    },
  ];
  return (
    <div className="w-layout-grid grid-2-columns _1-col-tablet">
      {cardsData.map((cardData, i) => {
        return <Card key={i} cardData={cardData} />;
      })}
    </div>
  );
};

export default PressCards;
