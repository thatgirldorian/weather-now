import React from 'react';

//create a configuration object for conditional rendering
const seasonConfig = {
    summer: {
        seasonText: "Lets' go to the beach, eachh",
        seasonIcon: <i className="sun icon"></i>
    },
    winter: {
        seasonText: "It's so cold outside",
        seasonIcon: <i className="snowflake icon"></i>
    }
}

//determine which season it is 
const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' :'winter'
    } else {
        return lat < 0 ? 'winter' : 'summer'
    }

    
}

const SeasonsDisplay = (props) => {
    const season = getSeason(props.latitude, new Date().getMonth())
    const { seasonText, seasonIcon } = seasonConfig[season]

    return (
        <div>
            <h1>{seasonIcon}</h1>
            <h1>{seasonText}</h1>
            <h1>{seasonIcon}</h1>
        </div>
    )
}

export default SeasonsDisplay