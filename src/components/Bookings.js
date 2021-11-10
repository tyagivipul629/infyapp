import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../sass/Booking.css";

const Bookings = (props) => {
  const [bookings, setBookings] = useState([]);
  console.log(props.user);
  let getuserid = async () =>{
    let query = "http://localhost:1111/users?name="+props.user;
    const userdata = await axios.get(query);
    console.log(userdata.data[0].id);
    return userdata.data[0].id;
  }
  
  useEffect(async () => {
    let userid = await getuserid();
    console.log(userid);
    let query2 = "http://localhost:1111/bookings?userId="+userid;
    const { data } = await axios.get(query2);
    console.log(data);
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
