import { useRef ,useState} from "react";
import Input from "../UI/Input";

import classes from "./CategoryItemForm.module.css";

const CategoryItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber =+ enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }


    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        input={{
          id: "amount_" + props.id,
          type: "input",
          min: "1",

          step: "1",
          defaultValue: "1",
        }}
      />
    
      <button className={classes.button}>ADD TO CART</button>
      {!amountIsValid}
   
    </form>
  );
};

export default CategoryItemForm;
