import React from "react";
import styles from "../css/header.css";

export default function Header () {
    return (
        <div className={styles.header}>
            <a href="#">TRAINEES</a>
            <ul>
                <li><a href="#">All CV</a></li>
                <li><a href="#">Front-End</a></li>
                <li><a href="#">Ruby/Rails</a></li>
                <li><a href="#">Python/Django</a></li>
                <li><a href="#">.NET</a></li>
                <li><a href="#">Java</a></li>
                <li><a href="#">PHP</a></li>
                <li><a href="#">iOS</a></li>
                <li><a href="#">Android</a></li>
                <li><a href="#">C++</a></li>
                <li><a href="#">QA</a></li>
                <li><a href="#">New CV</a></li>
            </ul>
            <hr />
        </div>
    );
}
