import React from "react";
import "whatwg-fetch";


export default class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        fetch("http://127.0.0.1:8000/pages/about/")
            .then(response => {
                return response.json();
            })
            .then(json => {
                this.setState({ posts: json });
            })
    }

    render() {
        return (
            <div>{this.state.posts.content}</div>
        );
    }
}
