import React from "react";
import Helmet from "react-helmet";
import {post} from "../utils/api";


export default class Authorization extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        let formData = {
            "username": this.username.value,
            "password": this.password.value
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
        post("api-token-auth/", formData)
            .then(data => {
                if (data.status >= 400 && data.status < 500) {
                    let errorsList = parseErrors(data.json);
                    this.setState({
                        errorsList: errorsList
                     });
                } else if (data.status >= 200 && data.status < 400) {
                    if (typeof Storage !== "undefined") {
                        localStorage.setItem("token", data.json.token);
                    } else {
                        console.log("Sorry! No Web Storage support..");
                    }
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
                <Helmet title="Authorization" />
                <h1>Authorization</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" ref={username => this.username = username} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" ref={password => this.password = password}/>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}
