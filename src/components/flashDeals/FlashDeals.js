import React from "react";
import FlashCards from "./FlashCards";

const FlashDeals = ({ productItems, addToCard }) => {
  return (
    <div>
      <section className="flash background">
        <div className="container">
          <div className="heading f_flex">
            <i className="fa fa-bolt"></i>
            <h1>Flash Deals</h1>
          </div>
          <FlashCards productItems={productItems} addToCard={addToCard} />
        </div>
      </section>
    </div>
  );
};

export default FlashDeals;
