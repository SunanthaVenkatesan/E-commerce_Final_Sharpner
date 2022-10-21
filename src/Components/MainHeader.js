import React from "react";
import classes from "./MainHeader.module.css";
import { useContext} from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "./auth-context";





//it allows us to create a link insted of <a href> as <NavLink to ="">
//NavLink actually highlights the active link

const MainHeader = (props) => {
  
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;
  const logoutHandler = () => {
    authCtx.logout();
  };
  const Announcement = () => {
    return (
      <div className={classes.bgtext}>
        Super Deal !!! Free shipping on orders above Rs.500.
      </div>
    );
  };
  return (
    // <header className={classes.navbar}>
    //   <Announcement />

    //   <div className={classes.wrapper}>
    //     <NavLink
    //       activeClassName={classes.active}
    //       to="/home"
    //       className={classes.left}
    //     >
    //       HOME
    //     </NavLink>
    //     <NavLink
    //       activeClassName={classes.active}
    //       to="/store"
    //       className={classes.center}
    //     >
    //       STORE
    //     </NavLink>
    //     <NavLink
    //       activeClassName={classes.active}
    //       to="/about"
    //       className={classes.right}
    //     >
    //       ABOUT
    //     </NavLink>

    //   </div>
    // </header>

    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>D's Store</div>
      </Link>
      <Announcement />
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <NavLink activeClassName={classes.active} to="/home">
                HOME
              </NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <NavLink activeClassName={classes.active} to="/store">
                STORE
              </NavLink>
 
            </li>
                      
          )}
         
          {!isLoggedIn && (
            <li>
              <NavLink activeClassName={classes.active} to="/about">
                ABOUT
              </NavLink>
            </li>
          )}
          
          
          {isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}

          {/* {isLoggedIn && (
            <li>
                
          
          
 
  

            </li>
          )} */}
        
             
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
