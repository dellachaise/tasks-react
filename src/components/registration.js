import React from "react";
import Helmet from "react-helmet";
import {post} from "../utils/api";


export default class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            errorsList: []
        };
    }

    handleSubmit(event) {
        let formData = {
            "username": this.username.value,
            "password": this.password.value,
            "email": this.email.value
        };

        function parseErrors (obj) {
            const list = [];
            for (var prop in obj) {
                if (!obj.hasOwnProperty(prop)) {
                    continue;
                }
                let length = obj[prop].length;
                for (var i = 0; i < length; i += 1) {
                    let item = prop + ": " + obj[prop][i];
                    list.push(item);
                }
            }
            return list;
        }

        event.preventDefault();
        post("users/", formData)
            .then(data => {
                console.log(data);
                if (data.status >= 400 && data.status < 500) {
                    let errorsList = parseErrors(data.json);
                    this.setState({
                        errorsList: errorsList
                     });
                }
              })
            .catch(error => {
                console.log(error);
                this.setState({
                    errorsList: ["Sorry, try again later..."]
                 });
            });
    }

    render(){
        return (
            <div>
                <Helmet title="Registration" />
                <h1>Registration</h1>
                <ul>
                    {this.state.errorsList.map((error, index) =>
                        <li key={index}>{error}</li>
                    )}
                </ul>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" ref={username => this.username = username} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" ref={password => this.password = password}/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" ref={email => this.email = email} />
                    </div>
                        <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}
