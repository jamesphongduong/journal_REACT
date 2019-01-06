import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
    render() {
        return(
            <div className="center"> 
                <h1>Home</h1>
                <Link to="/category">
                    <button className="ui button">New Journal Entry</button>
                </Link>
                <Link to="/entries">
                    <button className="ui button">View All Entries</button>
                </Link>
            </div>
        )
    }
}

export default HomePage;