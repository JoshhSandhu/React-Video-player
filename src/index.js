//create new component, this component should produce some HTML
import _ from "lodash";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Searchbar from "./components/search_bar";
import YTSearch from "youtube-api-search";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_details";

const API_KEY = 'AIzaSyD6b1emksWasMgJsYS_SMXi7puhSXjJJuI';

class App extends Component {

    constructor(props){
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null 

        };
        this.videoSearch('minecraft');
        
    }

    videoSearch(term){
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
          });
    }


    render(){
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)


        return (
            <div> 
                <Searchbar onSearchTermChange={videoSearch}/> 
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                onVideoSelect={selectedVideo => this.setState({selectedVideo})} 
                videos={this.state.videos}/>
            </div>
        );
    } 
}

ReactDOM.render(<App />, document.querySelector(".container"));
//take the generated components HTML and deploy that to the page ( DOM )

