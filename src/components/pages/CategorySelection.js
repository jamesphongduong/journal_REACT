import React, { Component } from "react";
import { Link } from "react-router-dom";

class CategorySelection extends Component {
    render() {
        const { categories } = this.props;

        return(
            <div className="center"> 
                <h1>Category Selection</h1>
                <ul className="list">
                    {categories.map((item, index) => {
                        return (
                            <li key={item} >
                                <Link className="ui button" to={`/entry/new/${index}`}>{item}</Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        )
    }
}

export default CategorySelection;