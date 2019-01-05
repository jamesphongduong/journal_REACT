import React, { Component } from "react";
import { Link } from "react-router-dom";

class JournalEntries extends Component {
    
    render() {
    //entries is an array of objects
    const {entries, onEntryDeleteSubmit } = this.props;

        return (
            <div>
                <h1>Journal Entries</h1>
                <ul>
                    {entries.map((item, index) => {
                        return (
                        <li key={item.entry}>
                            {item.entry} 
                            {/* button to delete single entry */}
                            <button onClick={
                                () => {
                                    onEntryDeleteSubmit(index);
                                }
                                }> Delete entry 
                            </button>
                            {/* button to navigate to view single entry */}
                            <Link to={`/entries/${index}`}>
                                <button>
                                    View entry 
                                </button>
                            </Link>
                            <Link to={`/entries/${index}/edit`}>
                            <button> Edit Journal Entry </button>
                            </Link>
                        </li>
                        );
                    })}
                </ul>
            </div>
        );
    }

}

export default JournalEntries;