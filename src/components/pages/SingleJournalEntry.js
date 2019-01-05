import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class SingleJournalEntry extends Component {

    pageDirector(number) {
        //parse from string to integer
        const currentId = parseInt(this.props.match.params.id);
        const newId = currentId + number;
        if (newId < 0) {
            return 0;
        }
        else if (newId >= this.props.entries.length) {
            return currentId;   
        }
            return newId;
    }

    render() { 
        const { entries } = this.props;
        //if no entries then redirect to homepage
        if (entries.length === 0 ) {
            return <Redirect to="/" />;
        }

        return (
            <div>
                <h1> Single Journal Entry </h1>
                <div>
                    { entries[this.props.match.params.id].entry }
                </div>
                <Link to={`/entries/${this.pageDirector(-1)}`}>
                    <button>
                        Previous Journal Entry
                    </button>
                </Link>
                <Link to={`/entries/${this.pageDirector(+1)}`}>
                    <button >Next Journal Entry</button>
                </Link>
            </div>
        );
    }
}

export default SingleJournalEntry;