import React from "react";
import "whatwg-fetch";
import Helmet from "react-helmet";


export default class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: {}
        };
    }

    componentDidMount() {
        fetch("http://127.0.0.1:8000/pages/about/")
            .then(response => {
                return response.json();
            })
            .then(json => {
                this.setState({ page: json });
            })
    }

    render() {
        return (
            <div>
                <Helmet title="About" />
                <h1>{this.state.page.title}</h1>
                {this.state.page.content}
            </div>
        );
    }
}
