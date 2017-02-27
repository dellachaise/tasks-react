import React from "react";
import "whatwg-fetch";
import Helmet from "react-helmet";


export default class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: {},
            loading: true
        };
    }

    componentDidMount() {
        fetch("http://127.0.0.1:8000/pages/about/")
            .then(response => {
                return response.json();
            })
            .then(json => {
                this.setState({
                    page: json,
                    loading: false
                 });
            });
    }

    renderLoading() {
        return <div>Loading...</div>;
    }

    renderPosts() {
        return (
            <div>
                <h1>{this.state.page.title}</h1>
                <p>{this.state.page.content}</p>
            </div>
        );
    }

    render() {
        return (
            <div>
                <Helmet title="About" />
                {this.state.loading ?
                    this.renderLoading()
                    : this.renderPosts()
                }
            </div>
        );
    }
}
