import React from 'react';
import ReactDOM from 'react-dom/client';
import SeasonsDisplay from "./SeasonsDisplay"
import './App.css'


//create a class component
class App extends React.Component {
    //initialize state
    constructor(props) {
        super(props)

        this.state = { latitude: null, errorMessage: ''}

        //call the Geolocation API
        window.navigator.geolocation.getCurrentPosition(
            //Error handling for the API call
            position => {
                this.setState({ latitude: position.coords.latitude})
                
            },
            err => {
                this.setState({ errorMessage: err.message })
            }
        )
    }

    render() {
         //render our component, reference state & conditionally show error message
        if (this.state.errorMessage && !this.state.latitude) {
            return <div>Error: {this.state.errorMessage}</div>
        } 
        
        if (!this.state.errorMessage && this.setState.latitude) {
            return <div>Latitude: {this.setState.latitude}</div>
        } 
        
        return <div>Loading..</div>
        
    }
}


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)