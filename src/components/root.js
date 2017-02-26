import React from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import Helmet from "react-helmet";

export default function Root (route) {
    return (
        <div>
            <Helmet
                defaultTitle="TRAINEES"
                titleTemplate="%s - TRAINEES"
            />
            <Header />
            {route.children}
        </div>
    );
}
