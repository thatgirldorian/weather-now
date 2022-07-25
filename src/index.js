import React from 'react';
import ReactDOM from 'react-dom/client';
import SeasonsDisplay from "./SeasonsDisplay"
import './App.css'

const App = () => {
    //call the Geolocation API
    window.navigator.geolocation.getCurrentPosition(
        //when the API call is successful
        position => console.log(position),

        //when it doesn't quite work out
        err => console.log(err)
    )

    return (
        // <div>Our new weather app</div>
        <SeasonsDisplay />

    )
}


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)