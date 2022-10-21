import React from "react";

import CategoryItem from "./CategoryItem";
import classes from "./Categories.module.css";

const Categories = (props) => {
  const productsArr = [
    {
      id: 1,
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      id: 2,
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      id: 3,
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      id: 4,
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  const listItems = productsArr.map((item) => (
    <ul key={item.id}>
      <CategoryItem data={item} />
    </ul>
  ));
  return (
    <section>
      <h2>STORE</h2>
      <div className={classes.container}>{listItems }</div>
      <div className={classes.back}>
        <button className={classes.cartButton} onClick={props.onShowCart}>
          {" "}
          <a href="#cart" className={classes.cartBottom}>
            SEE THE CART
          </a>
        </button>
      </div>
    </section>
  );
};

export default Categories;
