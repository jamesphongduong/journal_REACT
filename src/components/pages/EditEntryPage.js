import React, { Component } from "react";
import EditForm from "./../forms/EditForm";

class EditEntryPage extends Component {
 
    render() {
        const { entries, onEditEntryFormSubmit } = this.props;
        const { id } = this.props.match.params;

        return (
            <div>
                <h1> Journal Entry </h1> 
                <EditForm entries={entries} index={id} onEditEntryFormSubmit={onEditEntryFormSubmit}/>
            </div>
        );
    }
}

export default EditEntryPage;
