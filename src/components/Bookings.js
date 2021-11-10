import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../sass/Booking.css";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(async () => {
    const { data } = await axios.get("http://localhost:1111/bookings");
    setBookings(data);
  }, []);
  return (
    <div>
      <div class="hero">
        { bookings.map((booking, index) => {
          return (
            <div key={ index } class="booking-card">
              <h4>{ booking.hotelName }</h4>
              <h4>Start Date:{ booking.startDate }</h4>
              <h4>End Date:{ booking.endDate }</h4>
              <h4>Number of person:{ booking.noOfPersons }</h4>
              <Link to={ `/reschedule/${booking.id}` }>
                <button>Reschedule</button>
              </Link>
            </div>
          );
        }) }
      </div>
    </div>
  );
};
export default Bookings;
