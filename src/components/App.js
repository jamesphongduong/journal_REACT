import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CategorySelection from "./pages/CategorySelection";
import NewEntryPage from "./pages/NewEntryPage";

class App extends Component {

    render() {
        return (
            <div> 
                {/* BrowserRouter expects a single child, hence we wrap content in div */}
                <BrowserRouter> 
                    <div>
                         <Route exact path="/" component={HomePage}/>
                         <Route exact path="/category" component={CategorySelection}/>
                         <Route exact path="/entry" component={NewEntryPage}/>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
