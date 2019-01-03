import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class NewEntryPage extends Component {
    state = { category: null, errorMessage: "" } 
        
    componentDidMount() {
        const category = this.props.categories[this.props.match.params.index];
        if (!category) {
            return this.setState({ errorMessage: "Invalid Category"});
        }

        return this.setState({ category });
    }

    render() {
        const { category, errorMessage } = this.state;

        if (errorMessage) {
            return <Redirect to="/category" />;
        }

        return(
            <div> 
                {errorMessage} 
                {category && 
                    <div>
                        <h1>New {category} Page</h1>
                </div>
                }
            </div>
        )
    }
}

export default NewEntryPage;