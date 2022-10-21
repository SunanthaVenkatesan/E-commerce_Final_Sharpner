import React, { useContext } from "react";
import classes from "./CategoryItem.module.css";
import CartContext from "../../store/cart-context";
import CategoryItemForm from "./CategoryItemForm";
import { Link } from "react-router-dom";

const CategoryItem = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.data.id,
      title: props.data.title,
      amount: amount,
      imageUrl: props.data.imageUrl,
      price: props.data.price,
    });
  };

  return (
    <li className={classes.list}>
      <span className={classes.imgcontainer} key={props.id} id={props.id}>
        <Link
          style={{ textDecoration: "none" }}
          to={{
            pathname: `/store/${props.data.id}/comments`,
            state: { data: props.data },
          }}
        >
          <h3 >{props.data.title}</h3>

          <img className={classes.img} src={props.data.imageUrl} alt="" />
        </Link>

        <div>
          <div >{`Rs.${props.data.price}`}</div>
        </div>

        <CategoryItemForm id={props.id} onAddToCart={addToCartHandler} />
      </span>
    </li>

    //     <li key={props.id} id={props.id}>
    //   <div>
    //     <div>
    //       <Link style={{textDecoration:'none'}} to={{pathname:"/store",state:props.data}} >
    //         <h3>{props.data.title}</h3>
    //         <img src={props.data.imageUrl} alt='item-images'/>
    //       </Link>
    //     </div>
    //     <div >
    //       <span>{`Rs.${props.data.price}`}</span>
    //       <CategoryItemForm id={props.id} onAddToCart={addToCartHandler} />
    //     </div>

    //   </div>

    // </li>
  );
};

export default CategoryItem;
