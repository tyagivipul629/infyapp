import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/cardBody.css";

export default class CardBody extends Component {
  render() {
    return (
      <div className="hotel-card">
        <div className="logo">
        </div>
        <div className="card-text">
          <h2>{ this.props.hotelName }</h2>
          <p>{ this.props.city }</p>
          <p>{ this.props.amenities }</p>
          <p>{ this.props.address }</p>
          <p>{ this.props.phone }</p>
        </div>
        <div className="card-button">
          <Link to={ `/bookRoom/${this.props.id}` }>
            <button>Book Room</button>
          </Link>
          <Link to={ `/review/${this.props.id}` }>
            <button>View Reviews</button>
          </Link>
        </div>
      </div>
    );
  }
}
