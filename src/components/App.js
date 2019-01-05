import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CategorySelection from "./pages/CategorySelection";
import NewEntryPage from "./pages/NewEntryPage";
import JournalEntries from "./pages/JournalEntries";

class App extends Component {
    state = {
        categories: ["food", "thoughts", "romance"],
        entries: []
    }

    componentDidUpdate() {
        console.log("component updated");
        console.log(this.state);
    }

    onEntryFormSubmit = (entry) => {
        this.setState((state) => {
            return { entries: [...state.entries, entry ]};
        });
    }

    onEntryDeleteSubmit = (index) => {
        this.setState((state) => {
            return { entries: state.entries.filter(element => {
                return element !== state.entries[index];
            }) };
        });
    }

    render() {
        const { categories, entries } = this.state;

        return (
            <div> 
                <BrowserRouter> 
                    <div>
                        <Route exact path="/" component = {HomePage} />
                        <Route 
                            exact path="/category" 
                            render={(props) => {
                                return <CategorySelection {...props} categories={categories} />
                            }} />
                        <Route exact 
                        path="/entry/new/:index" 
                        render={(props) => {
                            return <NewEntryPage {...props} categories={categories} onEntryFormSubmit={this.onEntryFormSubmit}/>
                        }} />
                        <Route exact path="/entries" 
                        render={(props) => {
                            return <JournalEntries {...props} entries={entries} onEntryDeleteSubmit={this.onEntryDeleteSubmit}/>
                        }} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
