import React, { Component } from "react";

class JournalEntries extends Component {
    // state = { entries: null }

    render() {
    //entries is an array of objects
    const {entries} = this.props;

        return (
            <div>
                <h1>Journal Entries</h1>
                <ul>
                    {entries.map((item) => {
                        return(
                        <li key={item.entry}>
                            {item.entry}
                        </li>
                        );
                    })}
                </ul>
            </div>
        );
    }

}

export default JournalEntries;