import React, { Fragment } from 'react'
import Footer from '../Footer/Footer'
import Add from './AddMovie/Add'

import BackDrop from '../UI/BackDrop'




const HomePage = (props) => {
  return (
    <Fragment>
    <BackDrop/>
  
    {/* <button className={classes.albumbtn} >GET OUR LATEST ALBUM</button>
  

    <button className={classes.playbtn}>►</button> */}
    <Add/>
  
   
 
  

 
    
    <Footer/>



    </Fragment>



  )
}

export default HomePage