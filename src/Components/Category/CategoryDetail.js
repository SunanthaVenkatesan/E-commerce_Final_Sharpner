import React, { Fragment } from "react";
import { useLocation, Link, Route } from "react-router-dom";
import Comments from "../comments/Comments";
import classes from "./CategoryDetail.module.css";

const CategoryDetail = () => {
  const location = useLocation();
  const { data } = location.state;

  return (
    <Fragment>
      <h1 className={classes.h1}>Product Detail</h1>
      <div>
        <h1 className={classes.title}>{data.title}</h1>
        <div className="centered">
          <img className={classes.img} src={data.imageUrl} alt="product" />
        </div>
        
          <p className={classes.price}>Rs.{data.price}</p>
          <div>
          <h3 className="centered">Description</h3>
          <p>Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of sorrows, hates no prosecutors will unfold in the enduring of which were born in it? Often leads smallest mistake some pain main responsibilities are to stand for the right builder of pleasure, accepted explain up to now. , The things we are accusing of these in the explication of the truth receives from the flattery of her will never be the trouble and they are refused to the pleasures and the pleasures of the pain, explain the treatment of excepturi of the blessed sufferings. I never said will unfold in him receives at another time he may please the one that those works, we are less than they, this refused to the pleasures of deleniti? Those are! Will unfold in times of pleasure, this pain will be a right enjoyed by corrupt, are accusing him of all pleasures, and seek his own, or, to the needs of the agony of the choice. We hate the fellow.
Lorem ipsum dolor, sit amet consectetur rebates. The distinction, that arise from or to. </p>
          </div>
  

        <Route path={`/store/${data.id}`} exact>
          <div className="centered">
            <Link className="btn--flat" to={`/store/${data.id}/comments`}>
              Load Comments
            </Link>
          </div>
        </Route>

        <Route path={`/store/${data.id}/comments`}>
          <Comments />
        </Route>
      </div>
    </Fragment>
  );
};
export default CategoryDetail;

// import React from "react";
// import { useParams, Route, Link } from "react-router-dom";
// import Comments from "../comments/Comments";

// const productsArr = [
//   {
//     id: 1,
//     title: "Colors",

//     price: 100,

//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
//   },

//   {
//     id: 2,
//     title: "Black and white Colors",

//     price: 50,

//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
//   },

//   {
//     id: 3,
//     title: "Yellow and Black Colors",

//     price: 70,

//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
//   },

//   {
//     id: 4,
//     title: "Blue Color",

//     price: 100,

//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
//   },
// ];
// const CategoryDetail = (props) => {
// const params = useParams();
// const {storeId}=params
//   const store = productsArr.find((item) => item.id === storeId);

//   return (
//     <section>

//       <p>{storeId}</p>
//       {/* <h1>{store.title}</h1> */}

// <Route path={`/stores/${params.storeId}`}exact>
// <div className="centered">
//   <Link className="btn--flat" to={`/stores/${params.storeId}/comments`}>
//     Load Comments
//   </Link>
// </div>
// </Route>

// <Route path={`/stores/${params.storeId}/comments`}>
//   <Comments />
// </Route>

//     </section>
//   );
// };

// export default CategoryDetail;
