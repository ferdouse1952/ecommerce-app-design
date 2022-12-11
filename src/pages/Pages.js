import React from "react";
import Annu from "../components/announcement/Annu";
import Discount from "../components/discount/Discount";
import FlashDeals from "../components/flashDeals/FlashDeals";
import Home from "../components/mainpage/Home";
import NewArrivals from "../components/newarrivals/NewArrivals";
import Shop from "../components/shop/Shop";
import TopCate from "../components/top/TopCate";
import Wrapper from "../components/wrapper/Wrapper";

const Pages = ({ productItems, cartItem, addToCard, shopItems }) => {
  return (
    <div>
      <Home cartItem={cartItem} />
      <FlashDeals productItems={productItems} addToCard={addToCard} />
      <TopCate />
      <NewArrivals />
      <Discount />
      <Shop shopItems={shopItems} addToCard={addToCard} />
      <Annu/>
      <Wrapper/>
    </div>
  );
};

export default Pages;
