import React, { Component } from "react";
import HomePage from "./pages/HomePage";
import CategorySelection from "./pages/CategorySelection";
import NewEntryPage from "./pages/NewEntryPage";

class App extends Component {
    state = { location: "home" }

    render() {
        return(
            <div> 
                <HomePage />
                <CategorySelection />
                <NewEntryPage />
            </div>
        )
    }
}

export default App;
