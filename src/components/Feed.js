import React, { Component } from 'react';

class Feed extends Component(){
    render(){
        return(
            <React.Fragment>
                {trips.map(trip => (
                    <Trip key={trip.id} trip={trip} />
                ))}
            </React.Fragment>
        )
    }
}

export default Feed;