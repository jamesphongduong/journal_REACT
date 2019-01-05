import React, { Component } from "react";

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
                            <button onClick={
                                () => {
                                    onEntryDeleteSubmit(index);
                                }
                                }> Delete entry 
                            </button>
                        </li>
                        );
                    })}
                </ul>
            </div>
        );
    }

}

export default JournalEntries;