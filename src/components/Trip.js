import React, { Component } from 'react';

import Rating from '@material-ui/lab/Rating';

class Trip extends Component {

    render(){

        const { id, name, place, rating, photo } = this.props.trip;

        return(
            <div className="trip">
                <div className="card mb-3" style={{width: "70%", height: "70%"}}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={photo} class="card-img-top" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{place}</h5><p>{id}</p>
                                <p>{name}</p>
                                <Rating value={rating}></Rating>
                                <p>
                                    adsfaflkasjdfkljadfkjd;lk
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Trip;