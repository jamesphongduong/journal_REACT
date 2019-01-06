import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class EditForm extends Component {
    state = { entry: null, errorMessage: "", redirect: false }

    componentDidMount() {
        const { entries } = this.props; 
        if (entries.length === 0) {
            return this.setState({ errorMessage: "no entries to edit!" })
        }
        return this.setState({ entry: this.props.entries[this.props.index].entry });
    }

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
        const { redirect, entry, errorMessage } = this.state;
        const onEditFormSubmit = this.onEditFormSubmit;
        const onTextAreaChange = this.onTextAreaChange;

        if (errorMessage || redirect) {
            return <Redirect to="/entries" />;
        }
        
        return (
            <form className="ui form" onSubmit={onEditFormSubmit}>
                <div className="field">
                    <textarea value={entry} onChange={onTextAreaChange}>
                    </textarea>
                    <div>
                        <input className="ui button" type="submit" value="Edit Entry" />
                    </div>
                </div>
            </form>
        );
    }
}

export default EditForm;