import React from 'react';
import style from './style/navbar.module.css';
import {Link} from 'react-router-dom';

const Navbar = () => {

    //Navbar contenente il titolo della Web App e i collegamenti a tutte le principali pagine del sito.

    return(
        <div className={style.header}>

            <h1 className={style.name}>Clean breathing</h1>

            <ul className={style.navbar}>
                <Link to='/' className={style.link}>
                    <li>Homepage</li>
                </Link>
                
                <Link to='/aboutme' className={style.link}>
                    <li >Chi sono</li>
                </Link>
                <Link to='/search' className={style.button}>
                    <li >Ricerca</li>
                </Link>
                
            </ul>


        </div>
    )
}

export default Navbar;