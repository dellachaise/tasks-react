import ReactDOM from "react-dom";
import Root from "./components/root";
import List from "./components/list";
import Resumes from "./components/resumes";
import About from "./components/about";
import { Router, Route, IndexRoute, browserHistory} from "react-router";

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Root}>
            <IndexRoute component={List}/>
            <Route path="/list" component={List}/>
            <Route path="/resumes" component={Resumes}/>
            <Route path="/about" component={About}/>
        </Route>
    </Router>,
    document.getElementById("app")
);
