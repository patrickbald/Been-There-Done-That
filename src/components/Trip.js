import React, { Component } from 'react';

class Trip extends Component {

    render(){
        return(
            <div className="trip">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Test Card</h5>
                        <p>{this.props.name} took a trip to {this.props.place} with their friends</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Test Card 2</h5>
                        <p>{this.props.name} took a trip to {this.props.place} with their friends</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Trip;