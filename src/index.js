import React from 'react';
import ReactDOM from 'react-dom/client';
import SeasonsDisplay from "./SeasonsDisplay"
import './App.css'


//create a class component
class App extends React.Component {
    //initialize state
    constructor(props) {
        super(props)

        this.state = { latitude: null}

        //call the Geolocation API
        window.navigator.geolocation.getCurrentPosition(
            //when the API call is successful
            position => {
                this.setState({ latitude: position.coords.latitude })
            },
            //when it doesn't quite work out
            err => {}
        )
    }

    render() {
         //render our component and reference state
        return <div>Latitude: {this.state.latitude}</div>
    }
}


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)