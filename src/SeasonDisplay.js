import React from 'react';

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
    const seasonText = season === 'winter' ? "It's so cold outside" : "Lets' go to the beach, eachh"
    const seasonIcon = season === 'winter' ? <i className="snowflake icon"></i> : <i className="sun icon"></i>

    return (
        <div>
            <h1>{seasonIcon}</h1>
            <h1>{seasonText}</h1>
            <h1>{seasonIcon}</h1>
        </div>
    )
}

export default SeasonsDisplay