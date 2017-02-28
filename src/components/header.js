import React from "react";
import styles from "../css/header.css";
import { Link, IndexLink } from "react-router";


export default function Header () {
    return (
        <div className={styles.header}>
            <IndexLink to="/" activeClassName={styles.active}>TRAINEES</IndexLink>
            <ul>
                <li><Link to="/resumes" activeClassName={styles.active}>All CV</Link></li>
                <li><Link to="/about" activeClassName={styles.active}>About</Link></li>
                <li><Link to="/registration" activeClassName={styles.active}>Sign up</Link></li>
                <li><Link to="/authorization" activeClassName={styles.active}>Sign in</Link></li>
            </ul>
            <hr />
        </div>
    );
}
