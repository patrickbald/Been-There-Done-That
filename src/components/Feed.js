import React, { Component } from 'react';
import Trip from './Trip';

class Feed extends Component {

    // state = {
    //     trips: [
    //         {

    //         }
    //     ]
    // }

    render(){
        // const {trips} = this.state.trips;
        return(
            <React.Fragment>
                <Trip name="Pat" place="Paris" rating="5"></Trip>
            </React.Fragment>
        );
    }
}

export default Feed;