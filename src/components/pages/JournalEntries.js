import React, { Component } from "react";
import { Link } from "react-router-dom";

class JournalEntries extends Component {
    
    render() {
    //entries is an array of objects
    const {entries, onEntryDeleteSubmit } = this.props;

        return (
            <div className="padding">
                <h1 className="title-center">All Entries</h1>
                <ul>
                    {entries.map((item, index) => {
                        return (
                        <li key={item.entry}>
                            {item.entry} 
                            <div>
                                {/* button to delete single entry */}
                                <button className="ui button" onClick={
                                    () => {
                                        onEntryDeleteSubmit(index);
                                    }
                                    }> Delete Entry 
                                </button>
                                {/* button to navigate to view single entry */}
                                <Link to={`/entries/${index}`}>
                                    <button className="ui button">
                                        View Entry 
                                    </button>
                                </Link>
                                <Link to={`/entries/${index}/edit`}>
                                <button className="ui button"> Edit Journal Entry </button>
                                </Link>
                            </div>
                            <hr />
                        </li>
                        );
                    })}
                </ul>
                <Link to="/">
                    <button className="ui button"> Back To Home</button>
                </Link>
            </div>
        );
    }

}

export default JournalEntries;