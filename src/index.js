//create new component, this component should produce some HTML
import React from "react";
import ReactDOM from "react-dom";

const API_KEY = 'AIzaSyD6b1emksWasMgJsYS_SMXi7puhSXjJJuI';

const App = () => {
    return <div> Hi there! </div>;
} 

ReactDOM.render(<App />, document.querySelector(".container"));
//take the generated components HTML and deploy that to the page ( DOM )

