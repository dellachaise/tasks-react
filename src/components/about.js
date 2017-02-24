import React from "react";
import "whatwg-fetch";


export default class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8000/pages/about/')
            .then(response => {
                return response.json();
            })
            .then(json => {
                this.setState(json);
            })
    }

    render() {
        return (
            <div>{this.state.content}</div>
        );
    }
}
