import React from 'react';
import axios from "axios";
import SearchBar from './SearchBar';

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
      const response = await axios.get("https://api.unsplash.com/search/photos", {
        params: { query: term },
        headers: {
          Authorization:
            "Client-ID b21f7c6cf1f472381f90a5874ad62e529acb2af8e8a737eedd35089a57d17abd"
        }
      });  
      this.setState({ images: response.data.results });
  }

  render(){
      return(
        <div className="ui container" style={{ marginTop: "10px" }}>
          <SearchBar onSubmit={this.onSearchSubmit}/>
          Found: {this.state.images.length} images
        </div>
      );
  }
}

export default App;