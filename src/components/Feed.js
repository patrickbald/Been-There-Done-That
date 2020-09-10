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
            <div>
                <Trip name="Pat" place="Paris" rating="5"></Trip>
            </div>
        );
    }
}

export default Feed;