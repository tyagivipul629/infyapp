import React, { Component } from 'react';
import CardBody from './CardBody';
import "./styles/card.css";
import Navbar from '../Navbar';
import hotelLits from './HotelList';

export default class Card extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                {/* <!-- Card component start --> */ }
                <div class="hero">
                    <div className="cardList">{ hotelLits.map(createCard) }</div>
                </div>
                {/* <!-- Card component End --> */ }
            </React.Fragment>
        );
    }



}

function createCard(hotelLits) {
    return (
        <CardBody
            key={ hotelLits.id }
            hotelName={ hotelLits.hotelName }
            city={ hotelLits.city }
            amenities={ hotelLits.amenities }
            address={ hotelLits.address }
            phone={ hotelLits.phoneNo }
        />
    );
}
