import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import EntryForm from "./../forms/EntryForm";

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
        const { onEntryFormSubmit } = this.props;

        if (errorMessage) {
            return <Redirect to="/category" />;
        }

        return(
            <div className="padding"> 
                {category && 
                    <div>
                        <h1 className="title-center">New {category} Entry</h1>
                        <EntryForm onEntryFormSubmit={onEntryFormSubmit} category={category}/>
                    </div>
                }
                <Link to="/">
                    <button className="ui button">Back To Home</button>
                </Link>
            </div>
        )
    }
}

export default NewEntryPage;