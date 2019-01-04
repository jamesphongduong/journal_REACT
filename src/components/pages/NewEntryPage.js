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
            <div> 
                {category && 
                    <div>
                        <Link to="/category">
                            <button>Back to Categories</button>
                        </Link>
                        <h1>New {category} Page</h1>
                        <EntryForm onEntryFormSubmit={onEntryFormSubmit} category={category}/>
                            <Link to="/entries">
                                <button>View all Entries</button>
                            </Link>
                    </div>
                }
            </div>
        )
    }
}

export default NewEntryPage;