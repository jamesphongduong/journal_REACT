import React, { Component } from "react";
import { Link } from "react-router-dom";

class CategorySelection extends Component {
    render() {
        const { categories } = this.props;

        return(
            <div> 
                <h1>Category Selection</h1>
                <ul>
                    {categories.map((item, index) => {
                        return (
                            <li key={item}>
                                <Link to={`/entry/new/${index}`}>{item}</Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        )
    }
}

export default CategorySelection;