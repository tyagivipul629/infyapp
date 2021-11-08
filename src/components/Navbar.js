import React, { Component } from 'react';
import "./HotelList/styles/navbar.css";

export default class Navbar extends Component {
    render() {
        return (
            <div>
                {/* <!-- Navigation bar --> */ }
                <nav>
                    <h2 class="logo">Bonstay</h2>
                    <ul>
                        <li>Home</li>
                        <li>Hotels</li>
                        <li>Booking</li>
                        <li>Logout</li>
                    </ul>
                </nav>
                {/* <!-- Navigation bar end --> */ }
            </div>
        );
    }
}
