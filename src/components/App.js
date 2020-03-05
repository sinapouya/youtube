import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {

    componentDidMount() {
        this.onTermSubmit("reactjs")

    }
    state = { videoes: [], selectedVideo: null };
    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        // console.log(response);
        this.setState({
            videoes: (response).data.items,
            selectedVideo: (response).data.items[0]
        })
    };
    onVideoSelect = (video) => {
        // console.log('from the app', video);
        this.setState({ selectedVideo: video });
    }
    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videoes={this.state.videoes} />
                        </div>
                    </div>
                </div>

            </div>);
    }
}
export default App;