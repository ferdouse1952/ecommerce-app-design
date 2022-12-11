import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./common/cart/Cart";
import Footer from "./common/footer/Footer";
import Header from "./common/Header/Header";
import Data from "./components/flashDeals/Data";
import Sdata from "./components/shop/Sdata";

import Pages from "./pages/Pages";

function App() {
  // Step 1: fetch data from datbase
  const { productItems } = Data;
  const { shopItems,} = Sdata;
  const [cartItem, setCartItem] = useState([]);
  const addToCard = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);
    if (productExit) {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    }else{
      setCartItem([...cartItem,{...product,qty:1}])
    }
  };

  const decreaseQty=(product)=>{
    const productExit = cartItem.find((item) => item.id === product.id);
    if(productExit.qty===1){
      setCartItem(cartItem.filter((item)=>item.id!== product.id))
    }else{
      setCartItem(cartItem.map((item)=>(item.id===product.id?{...productExit,qty:productExit.qty-1}: item)))
    }
  }
  return (
    <>
      <Header cartItem={cartItem} />
      <Routes>
        <Route path="/" element={<Pages productItems={productItems} addToCard={addToCard} shopItems={shopItems} />} />
        <Route path="/cart" element={<Cart cartItem={cartItem} addToCard={addToCard}  decreaseQty={decreaseQty}/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
