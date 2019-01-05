import React, { Component } from "react";
import { Link } from "react-router-dom";

class JournalEntries extends Component {
    
    render() {
    //entries is an array of objects
    const {entries, onEntryDeleteSubmit } = this.props;

        return (
            <div>
                <h1>All Entries</h1>

                <ul>
                    {entries.map((item, index) => {
                        return (
                        <li key={item.entry}>
                            {item.entry} 
                            <div>
                                {/* button to delete single entry */}
                                <button onClick={
                                    () => {
                                        onEntryDeleteSubmit(index);
                                    }
                                    }> Delete Entry 
                                </button>
                                {/* button to navigate to view single entry */}
                                <Link to={`/entries/${index}`}>
                                    <button>
                                        View Entry 
                                    </button>
                                </Link>
                                <Link to={`/entries/${index}/edit`}>
                                <button> Edit Journal Entry </button>
                                </Link>
                            </div>
                            <hr />
                        </li>
                        );
                    })}
                </ul>
                <Link to="/">
                    <button> Back To Home</button>
                </Link>
            </div>
        );
    }

}

export default JournalEntries;