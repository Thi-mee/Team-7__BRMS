import React from "react";
import {Link} from "react-router-dom";
import style from "../../styles/Navbar.module.css"

const Navbar = () => {
    return(
        <>
            <div className={style.container}>
                    <img src="/assets/TCN_logo.png" alt="Church Logo" className={style.church_logo}/>
                    <div className={style.link_flex}>
                        <Link to="/">About</Link>
                        <Link to="/">FAQ</Link>
                        <Link to="/">Contacts</Link>
                    </div>
                    <div className={style.navbar_btn_flex}>
                        <button className={style.register_btn}>Register</button>
                        <button className={style.login_btn}>Login</button>
                    </div>
            </div>
        </>
    )
}

export default Navbar