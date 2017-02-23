import React from "react";
import ReactDOM from "react-dom";
import List from "./list";
import Header from "./header";

export default function Root () {
    return (
        <div>
            <Header />
            <List />
        </div>
    );
}
