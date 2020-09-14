import React, { Component } from 'react';
import Trip from './Trip';

class Feed extends Component {

    // constructor(props){
    //     super(props);
    // }


    render(){
        const { trips } = this.props;
        console.log(trips);

        return(
            <React.Fragment>
                {this.props.trips_array.map((trip) => {
                    return <Trip name={trip.name} place={trip.place} rating={trip.rating}></Trip>
                })}
            </React.Fragment>
        );
    }
}

export default Feed;