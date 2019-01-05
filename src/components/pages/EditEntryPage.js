import React, { Component } from "react";
import EditForm from "./../forms/EditForm";

class EditEntryPage extends Component {
 
    render() {
        const {entries} = this.props;
        console.log("edit page");
        console.log(this.props);

        return (
            <div>
                <h1> Journal Entry </h1> 
                <EditForm entries={entries} index={this.props.match.params.id} onEditEntryFormSubmit={this.props.onEditEntryFormSubmit}/>
            </div>
        );
    }
}

export default EditEntryPage;
