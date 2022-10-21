import React from 'react'

import classes from './HomePageItem.module.css'


const HomePageItem = () => {
  return (
    <div className={classes.main}>

    <div className={classes.container}>
        <h2 className={classes.h2}>TOURS</h2>
        <div>
            <div className={classes.tourItem}>
                <span className={classes.tourDate}>JUL16</span>
                <span className={classes.tourPlace}>DETROIT, MI</span>
                <span className={classes.tourSpecPlace}>DTE ENERGY MUSIC THEATRE</span>
                <button className={classes.buyBtn}>BUY TICKETS</button>
            </div>
            <div className={classes.tourItem}>
                <span className={classes.tourDate}>JUL19</span>
                <span className={classes.tourPlace}>TORONTO,ON</span>
                <span className={classes.tourSpecPlace}>BUDWEISER STAGE</span>
                <button className={classes.buyBtn}>BUY TICKETS</button>
            </div>
            <div className={classes.tourItem}>
                <span className={classes.tourDate}>JUL 22</span>
                <span className={classes.tourPlace}>BRISTOW, VA</span>
                <span className={classes.tourSpecPlace}>JIGGY LUBE LIVE</span>
                <button className={classes.buyBtn}>BUY TICKETS</button>
            </div>
            <div className={classes.tourItem}>
                <span className={classes.tourDate}>JUL 29</span>
                <span className={classes.tourPlace}>PHOENIX, AZ</span>
                <span className={classes.tourSpecPlace}>AK-CHIN PAVILION</span>
                <button className={classes.buyBtn}>BUY TICKETS</button>
            </div>
            <div className={classes.tourItem}>
                <span className={classes.tourDate}>AUG 2</span>
                <span className={classes.tourPlace}>LAS VEGAS, NV</span>
                <span className={classes.tourSpecPlace}>T-MOBILE ARENA</span>
                <button className={classes.buyBtn}>BUY TICKETS</button>
            </div>
            </div>
 
    </div>
    </div>


    
  )
}

export default HomePageItem