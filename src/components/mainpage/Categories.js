import React from "react";

const Categories = () => {
  const data = [
    {
      cateImg: "https://cdn-icons-png.flaticon.com/512/750/750743.png?w=826&t=st=1669788667~exp=1669789267~hmac=a0581c346c7a15ae2dfde1015509644eb04bded5a10b8d5933a161fa1572f3ae",
      cateName: "Fashion",
    },
    {
      cateImg: "https://cdn-icons-png.flaticon.com/512/1255/1255484.png?w=826&t=st=1669791790~exp=1669792390~hmac=5289e9678394b3302a961c68b7d18a23e6ca3131088273667d9b3224eaf2210f",
      cateName: "Electronics",
    },
    {
      cateImg: "https://cdn-icons-png.flaticon.com/512/1247/1247094.png?w=826&t=st=1669792077~exp=1669792677~hmac=092ba5ec772a47db6a5ea848fbea628ed76fb0e2d9246305b0376bec72b3937d",
      cateName: "Cars",
    },
    {
      cateImg: "https://cdn-icons-png.flaticon.com/512/1191/1191554.png?w=826&t=st=1669792148~exp=1669792748~hmac=35411b22974c9cc89b8c81a827ae70d0d939c7a284f9db1c36e0428b1c413483",
      cateName: "Home & Garden",
    },
    {
      cateImg: "https://cdn-icons-png.flaticon.com/512/1231/1231286.png?w=826&t=st=1669792235~exp=1669792835~hmac=21438d002cd8d5aabd7c6b19ffa3cb7fd030c9c77ccc4155ae6d704f99b037a3",
      cateName: "Gifts",
    },
    {
      cateImg: "https://cdn-icons-png.flaticon.com/512/1239/1239024.png?w=826&t=st=1669792552~exp=1669793152~hmac=568f64320767f67e6cede18a7e7148a8b6053a8124189f0c12047db8400b515c",
      cateName: "Music",
    },
    {
      cateImg: "https://cdn-icons-png.flaticon.com/512/308/308655.png?w=826&t=st=1669792728~exp=1669793328~hmac=9039b1575f02257371f1a91b5788c14e012420cede665e802b731fcd445fe0b2",
      cateName: "Health & Beauty",
    },
    {
      cateImg: "https://cdn-icons-png.flaticon.com/512/1247/1247067.png?w=826&t=st=1669792849~exp=1669793449~hmac=d9120b276d401240757e980386d023b912348a9ab92c7ba3b1d229da70c6f727",
      cateName: "Pets",
    },
    {
      cateImg: "https://cdn-icons-png.flaticon.com/512/739/739423.png?w=826&t=st=1669792942~exp=1669793542~hmac=229b20ecba766d8a05de20db6db231305d62d3521a0c8bf507889cfa9d1e16d0",
      cateName: "Baby Toys",
    },
    {
      cateImg: "https://cdn-icons-png.flaticon.com/512/1253/1253074.png?w=826&t=st=1669793014~exp=1669793614~hmac=1e6cbe23b06c338d10cc96c92a47db133b6e3bf2d202be50b7b9b07a31f1fa8d",
      cateName: "Groceries",
    },
    {
      cateImg: "https://cdn-icons-png.flaticon.com/512/1245/1245120.png?w=826&t=st=1669793263~exp=1669793863~hmac=a402a2e5f2e8ae6d40aa7e2e4e72ad11136d2ddc1f33c0500ba7c1361f340c0a",
      cateName: "Books",
    },
  ];
  return (
    <>
      <div className="category">
        {data.map((value, index) => {
          return (
            <div className=" box f_flex" key={index}>
              <img src={value.cateImg} alt="" />
              <span>{value.cateName}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
