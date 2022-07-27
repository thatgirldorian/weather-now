import React from 'react';
import './SeasonDisplay.css'

//create a configuration object for conditional rendering
const seasonConfig = {
    summer: {
        seasonText: "Lets' go to the beach, eachh",
        seasonIcon: <i className="massive sun icon"></i>
    },
    winter: {
        seasonText: "It's so cold outside",
        seasonIcon: <i className="massive snowflake icon"></i>
    }
}

//determine which season it is 
const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' :'winter';
    } else {
        return lat < 0 ? 'winter' : 'summer';
    }

    
}

//add the season display component
const SeasonsDisplay = (props) => {
    const season = getSeason(props.latitude, new Date().getMonth())
    const { seasonText, seasonIcon } = seasonConfig[season]

    return (
        <div className={`season-display ${season}`}>
            <i className="icon-left">{seasonIcon}</i>
            <h1>{seasonText}</h1>
            <i className="icon-right">{seasonIcon}</i>
        </div>
    )
}

export default SeasonsDisplay