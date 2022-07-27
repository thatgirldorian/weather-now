import React from 'react'
import './SeasonDisplay.css'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

const LoaderSpinner = (props) => (
        <Segment>
        <Dimmer active>
            <Loader>{props.message}</Loader>
        </Dimmer>

        <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        </Segment>
    )

    //add a default prop for the loader component
    LoaderSpinner.defaultProps = {
        message: 'Please turn your location on. :)'
    }

export default LoaderSpinner