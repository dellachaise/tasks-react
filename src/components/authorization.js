import React from "react";
import Helmet from "react-helmet";


export default class Authorization extends React.Component {
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
