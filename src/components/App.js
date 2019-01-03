import React, { Component } from "react";
import HomePage from "./pages/HomePage";
import CategorySelection from "./pages/CategorySelection";
import NewEntryPage from "./pages/NewEntryPage";

class App extends Component {
    state = { location: "home" }

    getPage() {
        const { location } = this.state;

        switch(location) {
            case "home":
                return <HomePage />
            case "category":
                return <CategorySelection />
            case "entry":
                return <NewEntryPage />
            default: 
                return null;
        }
    }

    onChangeLocation = (location) => {
        this.setState({ location });
    }

    render() {
        return (
            <div> 
                <button onClick={() => this.onChangeLocation("category")}> Category </button>
                <button onClick={() => this.onChangeLocation("home")}> Home Page </button>
                <button onClick={() => this.onChangeLocation("entry")}> New Entry Page </button>
                {this.getPage()}
            </div>
        )
    }
}

export default App;
