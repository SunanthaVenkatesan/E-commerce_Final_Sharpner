import { useContext } from 'react'
import React from 'react'
import CartIcon from '../UI/Icon'
import CartContext from '../../store/cart-context'
import classes from './NavBarButton.module.css'

const NavBarButton = (props) => {
   const cartCtx= useContext(CartContext)
   const numberOfCartItems=cartCtx.items.reduce((curNumber,item)=>{
    return curNumber+item.amount
   },0);
  return (

    <button className={classes.button} onClick={props.onClick   }>
          <span className={classes.icon}>
            <CartIcon />
            
          </span>
          
          <span className={classes.cart}>CART</span>
          <span className={classes.number}>{numberOfCartItems}</span>
          
          
        </button>
     

  )
}

export default NavBarButton