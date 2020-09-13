import React, { Component } from 'react';
import photo from '../images/paris.jpeg';
import Rating from '@material-ui/lab/Rating';

class Trip extends Component {

    render(){
        return(
            <div className="trip">
                <div className="card mb-3" style={{width: "100%"}}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={photo} class="card-img-top" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Test card</h5>
                                <p>Testing width</p>
                                <Rating value="5"></Rating>
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