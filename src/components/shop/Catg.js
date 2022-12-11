import React from "react";

const Catg = () => {
  const data = [
    {
      cateImg: "https://img.icons8.com/fluency/512/mac-os.png",
      cateName: "Apple",
    },
    {
      cateImg: "https://img.icons8.com/color/512/samsung.png",
      cateName: "Samsung",
    },
    {
      cateImg:
        "https://seeklogo.com/images/O/oppo-logo-BECA4F3EAB-seeklogo.com.png",
      cateName: "Oppo",
    },
    {
      cateImg: "https://1000logos.net/wp-content/uploads/2022/02/Vivo-Logo.png",
      cateName: "Vivo",
    },
    {
      cateImg:
        "https://www.logo.wine/a/logo/Xiaomi_Mi_1/Xiaomi_Mi_1-Logo.wine.svg",
      cateName: "Redmi",
    },
    {
      cateImg: "https://www.logo.wine/a/logo/Sony/Sony-Logo.wine.svg",
      cateName: "Sony",
    },
  ];
  return (
    <>
      <div className="category">
        <div className="chead d_flex">
          <h1>Brands</h1>
          <h1>Shops</h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className="box f_flex" key={index}>
              <div className="brandImg">
                <img src={value.cateImg} alt="" />
              </div>
              <span>{value.cateName}</span>
            </div>
          );
        })}
        <div className="box box2">
          <button>View All Brands</button>
        </div>
      </div>
    </>
  );
};

export default Catg;
