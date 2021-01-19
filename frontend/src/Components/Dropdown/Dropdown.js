
import React, { useState } from 'react'
import { MenuItems } from '../MenuItems/MenuItems'
import { Link } from "react-router-dom";
import styles from './Dropdown.module.css'





export default function Dropdown({ handleMouseLeave }) {

    return (
        <>
            <ul className={styles.dropdownmenu} onMouseLeave={handleMouseLeave} onClick={handleMouseLeave}>
                {MenuItems.map((item,index)=>{

                    return (
                        <li key={index}>

                            <Link className={item.cName} to={item.path}>{item.title}</Link>
                        </li>
                    )

                })}
            </ul>
        </>
        /*       <>
                <ul onClick={handleClick} className={click ?`
                ${styles.dropdownmenu.clicked} `:`${styles.dropdownmenu}`}>
                    {MenuItems.map((item,index)=>{
        
                        return(
                            <li key={index}>
        
                        <Link className={item.cName} to={item.path} onClick={()=>setClick(false)}>{item.title}</Link>
                            </li>
                        )
        
                    })}
                </ul>
              </> */
    )
}
