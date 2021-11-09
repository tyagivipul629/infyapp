import React, { Component } from "react";
import { Redirect } from "react-router";
import CardBody from "./CardBody";
import "./styles/card.css";

export default class Hotels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotels: [],
    };
  }
  componentDidMount() {
    fetch("http://localhost:1111/hotels", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({
          hotels: [...this.state.hotels, ...res],
        });
      });
  }
  render() {
    if (!this.props.isLoggedin) return <Redirect to="/login" />;
    return (
      <div className="hero">
        <div className="cardList">{this.state.hotels.map(createCard)}</div>
      </div>
    );
  }
}

function createCard(hotelLits) {
  return (
    <CardBody
      key={hotelLits.id}
      hotelName={hotelLits.hotelName}
      city={hotelLits.city}
      amenities={hotelLits.amenities}
      address={hotelLits.address}
      phone={hotelLits.phoneNo}
      id={hotelLits.id}
    />
  );
}
