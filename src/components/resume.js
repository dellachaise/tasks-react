import React from "react";
import "whatwg-fetch";
import moment from "moment";


export default class Resumes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        fetch("http://127.0.0.1:8000/resumes/")
            .then(response => {
                return response.json();
            })
            .then(json => {
                this.setState({posts: json});
            })
    }
    
    render() {
        return (
            <div>
                {this.state.posts.map(post =>
                    <div key={post.id}>
                        <h1> {post.title} </h1>
                        <p> {post.content} </p>
                        <p> {moment(post.created_at).format('YYYY MM DD')} </p>
                    </div>
                )}
            </div>
        );
    }
}
