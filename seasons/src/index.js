import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props){
        super(props);
        // This is the only time we do direct assignment 
        this.state = { lat: null, errorMessage: '' };

        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ lat: position.coords.latitude });
            },
            (err) => {
                this.setState({ errorMessage: err.message })
            }
        );
    }
    render(){
        if(this.state.lat && !this.state.errorMessage){
            return <div>Latitude: {this.state.lat}</div>;
        }
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }
        return <div style={{ margin: '20px' }}>Loading....</div>;
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);

