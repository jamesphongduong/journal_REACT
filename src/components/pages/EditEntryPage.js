import React, { Component } from "react";
import EditForm from "./../forms/EditForm";
import { Link } from "react-router-dom";

class EditEntryPage extends Component {
 
    render() {
        const { entries, onEditEntryFormSubmit } = this.props;
        const { id } = this.props.match.params;

        return (
            <div>
                <h1 className="title-center"> Journal Entry </h1> 
                <EditForm entries={entries} index={id} onEditEntryFormSubmit={onEditEntryFormSubmit}/>
            <Link to="/">
                <button className= "ui button"> Back To Home</button>
            </Link>
            </div>
        );
    }
}

export default EditEntryPage;
