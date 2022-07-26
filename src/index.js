import React from 'react';
import ReactDOM from 'react-dom/client';
import SeasonsDisplay from "./SeasonsDisplay"
import './App.css'


//create a class component & initialize state
class App extends React.Component {
    state = { latitude: null, errorMessage: ''}

    //use the componentDidMount lifecycle method & call the Geolocation API
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            //Error handling for the API call
            position => this.setState({ latitude: position.coords.latitude }) ,
            err => this.setState({ errorMessage: err.message })
            
        )
    }
    

    render() {
            if (this.state.errorMessage && !this.state.latitude) {
                return <div>Error: {this.state.errorMessage}</div>;
            }
        
            if (!this.state.errorMessage && this.state.latitude) {
                return <div>Latitude: {this.state.latitude}</div>;
            }
        
            return <div>Loading!</div>;
    }
}


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)