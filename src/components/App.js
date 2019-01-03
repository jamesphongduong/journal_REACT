import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
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
                        <Link to="/"> Home </Link>
                        <Link to="/category"> Category </Link>
                        <Link to="/entry"> Entry </Link>
                        <Route exact path="/" component = {HomePage} />
                        <Route exact path="/category" component = {CategorySelection} />
                        <Route exact path="/entry" component = {NewEntryPage} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
