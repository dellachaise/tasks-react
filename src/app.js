import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import List from "./components/list";
import Resume from "./components/resume";
import About from "./components/about";
import { Router, Route, IndexRoute, browserHistory} from "react-router";


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Root}>
            <IndexRoute component={List}/>
            <Route path="/list" component={List}/>
            <Route path="/resume" component={Resume}/>
            <Route path="/about" component={About}/>
        </Route>
    </Router>,
    document.getElementById("app")
);
