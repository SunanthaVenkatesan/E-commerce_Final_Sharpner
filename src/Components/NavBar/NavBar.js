import React from "react";



import NavBarButton from "./NavBarButton";
 //it allows us to create a link insted of <a href> as <NavLink to ="">
//NavLink actually highlights the active link

const NavBar = (props) => {
  
  return (
  
      

        

        <NavBarButton onClick={props.onShowCart} />


  );
};

export default NavBar;

