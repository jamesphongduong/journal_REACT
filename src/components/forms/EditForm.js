import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class EditForm extends Component {
    state = { entry: this.props.entries[this.props.index].entry, redirect: false }

    onTextAreaChange = (event) => {
        this.setState({ entry: event.target.value });
    }

    onEditFormSubmit = (event) => {
        event.preventDefault();
        this.props.onEditEntryFormSubmit(this.props.index, this.state.entry);
        this.setState({ redirect: true });
    }

    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to="/entries" />;
        }
        
        console.log("editform");
        console.log(this.props);
        console.log(this.props.entries);
        console.log(this.props.index);
        return (
            <form onSubmit={this.onEditFormSubmit}>
                <textarea value={this.state.entry} onChange={this.onTextAreaChange}>
                </textarea>
                <div>
                    <input type="submit" value="Edit Entry" />
                </div>
            </form>
        );
    }
}

export default EditForm;