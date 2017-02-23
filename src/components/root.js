import React from "react";
import ReactDOM from "react-dom";
import Header from "./header";

export default function Root (route) {
    return (
        <div>
            <Header />
            {route.children}
        </div>
    );
}
