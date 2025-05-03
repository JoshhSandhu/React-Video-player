//create new component, this component should produce some HTML
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Searchbar from "./components/search_bar";
import YTSearch from "youtube-api-search";
import VideoList from "./components/video_list";

const API_KEY = 'AIzaSyD6b1emksWasMgJsYS_SMXi7puhSXjJJuI';

class App extends Component {

    constructor(props){
        super(props);

        this.state = { videos: [] };

        YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
            this.setState({videos});
          });
    }


    render(){
        return (
            <div> 
                <Searchbar /> 
                <VideoList videos={this.state.videos}/>
            </div>
        );
    } 
}

ReactDOM.render(<App />, document.querySelector(".container"));
//take the generated components HTML and deploy that to the page ( DOM )

