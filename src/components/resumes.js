import React from "react";
import "whatwg-fetch";
import moment from "moment";
import Helmet from "react-helmet";


export default class Resumes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            resumes: []
        };
    }

    componentDidMount() {
        fetch("http://127.0.0.1:8000/resumes/")
            .then(response => {
                return response.json();
            })
            .then(json => {
                this.setState({resumes: json});
            })
    }

    render() {
        return (
            <div>
                <Helmet title="Resumes" />
                {this.state.resumes.map(resume =>
                    <div key={resume.id}>
                        <h1> {resume.title} </h1>
                        <p> {resume.content} </p>
                        <p> {moment(resume.created_at).format('YYYY MM DD')} </p>
                    </div>
                )}
            </div>
        );
    }
}
