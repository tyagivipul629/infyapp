import React, { useEffect, useState } from "react";
import "./index.css";
import image from "./hotel.jpg";
import axios from "axios";
import { Redirect, useParams } from "react-router";

const ReviewPage = (props) => {
  const [hotel, setHotel] = useState(null);
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(true);

  const p = useParams();
  const submit = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:1111/hotels/${p.hotel}`, {
      reviews: [...hotel.reviews, review],
    });
    await fetchReviews();
    setReview("");
  };
  const fetchReviews = async () => {
    const { data } = await axios.get(`http://localhost:1111/hotels/${p.hotel}`);
    setHotel(data);
    setLoading(false);
  };

  useEffect(async () => {
    await fetchReviews();
  }, []);
  if (!props.isLoggedin) return <Redirect to="/login" />;

  return (
    <>
      <main>
        <div className="review-card">
          {loading ? (
            <h1>Loading</h1>
          ) : (
            <>
              <section className="hotel-details">
                <div className="layout">
                  <div className="image-cont">
                    <img
                      width="150px"
                      height="150px"
                      src={image}
                      alt="image"
                    ></img>
                  </div>
                  <div className="data-cont">
                    <div className="hname display-5">{hotel.hotelName}</div>
                    <div className="amen">{hotel.amenities}</div>
                    <div className="addres">
                      Contact : <em>{hotel.phoneNo}</em> <br /> Address :
                      {hotel.address}
                    </div>
                  </div>
                </div>
              </section>
              <section className="add-review">
                <form
                  onSubmit={(e) => {
                    submit(e);
                  }}
                >
                  <div>
                    <textarea
                      placeholder="Add review here"
                      maxLength={200}
                      required
                      minLength={3}
                      value={review}
                      onChange={(e) => {
                        setReview(e.target.value);
                      }}
                      rows={2}
                      id="review-id"
                      name="review"
                    ></textarea>
                  </div>
                  <div>
                    <button className="butn" type="submit">
                      Add Review
                    </button>
                  </div>
                </form>
                <hr />
                <div className="reviews">
                  <div className="addres">Customer reviews:</div>
                  <ul className="review-list">
                    {hotel.reviews.map((hotel, i) => {
                      return <li key={i}>{hotel}</li>;
                    })}
                  </ul>
                </div>
              </section>
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default ReviewPage;
