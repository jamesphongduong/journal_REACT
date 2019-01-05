import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class EditForm extends Component {
    state = { entry: this.props.entries[this.props.index].entry, redirect: false }

    onTextAreaChange = (event) => {
        this.setState({ entry: event.target.value });
    }

    onEditFormSubmit = (event) => {
        const { onEditEntryFormSubmit, index } = this.props;
        const { entry } = this.state;
        
        event.preventDefault();
        onEditEntryFormSubmit(index,entry);
        this.setState({ redirect: true });
    }

    render() {
        const { redirect, entry } = this.state;
        const onEditFormSubmit = this.onEditFormSubmit;
        const onTextAreaChange = this.onTextAreaChange;

        if (redirect) {
            return <Redirect to="/entries" />;
        }
        
        return (
            <form onSubmit={onEditFormSubmit}>
                <textarea value={entry} onChange={onTextAreaChange}>
                </textarea>
                <div>
                    <input type="submit" value="Edit Entry" />
                </div>
            </form>
        );
    }
}

export default EditForm;