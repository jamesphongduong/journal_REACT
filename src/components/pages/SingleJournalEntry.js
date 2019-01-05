import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class SingleJournalEntry extends Component {

    pageDirector = (number) => {
        const { id } = this.props.match.params;
        const { entries } = this.props;
        //parse from string to integer
        const currentId = parseInt(id);
        const newId = currentId + number;
        if (newId < 0) {
            return 0;
        }
        else if (newId >= entries.length) {
            return currentId;   
        }
            return newId;
    }

    render() { 
        const { entries } = this.props;
        const { id } = this.props.match.params;
        const pageDirector = this.pageDirector;
        //if no entries then redirect to homepage
        if (entries.length === 0 ) {
            return <Redirect to="/" />;
        }

        return (
            <div>
                <h1> Journal Entry </h1>
                <div>
                    { entries[id].entry }
                </div>
                <Link to={`/entries/${pageDirector(-1)}`}>
                    <button>
                        Previous Journal Entry
                    </button>
                </Link>
                <Link to={`/entries/${pageDirector(+1)}`}>
                    <button >Next Journal Entry</button>
                </Link>
            </div>
        );
    }
}

export default SingleJournalEntry;