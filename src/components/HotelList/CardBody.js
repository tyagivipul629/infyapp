import React, { Component } from 'react';
import './styles/cardBody.css';

export default class CardBody extends Component {
    render() {
        return (

            <div class="card">
                <div class="logo"></div>
                <div class="card-text">
                    <h2>{ this.props.hotelName }</h2>
                    <p>{ this.props.city }</p>
                    <p>
                        { this.props.amenities }
                    </p>
                    <p>{ this.props.address }</p>
                    <p>{ this.props.phone }</p>
                </div>
                <div class="card-button">
                    <button>Book A Room</button>
                    <button>Add Review</button>
                    <button>View Review</button>
                </div>
            </div>


        );
    }
}
