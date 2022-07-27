import React from 'react';
import ReactDOM from 'react-dom/client';
import SeasonDisplay from "./SeasonDisplay"
import LoaderSpinner from "./LoaderSpinner"
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
    

    //add a helper function to avoid conditionals
    renderContent() {
        if (this.state.errorMessage && !this.state.latitude) {
            return <div>Error: {this.state.errorMessage}</div>;
        }
    
        if (!this.state.errorMessage && this.state.latitude) {
            return <SeasonDisplay
                latitude= {this.state.latitude}
            />
        }
    
        return <LoaderSpinner 
            message="Please turn on your location :)"
        />;
        }
    


    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );   
}
}


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)