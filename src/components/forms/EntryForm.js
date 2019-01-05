import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class EntryForm extends Component {
    state = { entry: "", redirect: false }

    onTextAreaChange = (event) => {
        this.setState({ entry: event.target.value });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        const { entry } = this.state;
        const { onEntryFormSubmit, category } = this.props;
        onEntryFormSubmit({ category, entry });
        // Clear the form after a user submits & 
        // Redirects to ALL entries page
        //why is the redirect not stayed as true??
        this.setState({ entry: "", redirect: true });
    }

    render() {
        const { entry, redirect } = this.state;
        const onTextAreaChange = this.onTextAreaChange;

        if (redirect) {
            return <Redirect to="/entries" />;
            }

        return (
            <form onSubmit={this.onFormSubmit}>
                <textarea value={entry} onChange={onTextAreaChange}></textarea>
                <div>
                    <input type="submit" value="Create New Entry" />
                </div>
            </form>
        );
    }
}

export default EntryForm;