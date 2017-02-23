import React from "react";
import styles from "../css/list.css";


export default function List (){
    return (
        <div className={styles.list}>
            <h1> Interesting list</h1>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
            </ul>
        </div>
    );
}
