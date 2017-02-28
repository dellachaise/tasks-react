import React from "react";
import "whatwg-fetch";
import Helmet from "react-helmet";
import api from "../utils/api";


export default class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: {},
            loading: true
        };
    }

    componentDidMount() {
        api("pages/about/")
            .then(data => {
                this.setState({
                    page: data.json,
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
