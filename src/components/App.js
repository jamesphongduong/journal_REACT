import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CategorySelection from "./pages/CategorySelection";
import NewEntryPage from "./pages/NewEntryPage";

class App extends Component {
    state = {
        categories: ["food", "thoughts", "romance"]
    }

    render() {
        const { categories } = this.state;

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
                            return <NewEntryPage {...props} categories={categories} />
                        }} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
