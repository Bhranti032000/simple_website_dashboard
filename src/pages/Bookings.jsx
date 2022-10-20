import React from "react";
import "../styles/bookings.css";

import phoneData from "../assets/dummy-data/booking-phones.js";
import Item from "../components/UI/CarItem";

const Bookings = () => {
  return (
    <div className="bookings">
      <div className="booking__wrapper">
        <h2 className="booking__title">Booking</h2>

        <div className="filter__widget-wrapper">
          <div className="filter__widget-01">
            <select>
              <option value="New">New</option>
              <option value="Popular">Popular</option>
              <option value="Upcoming">Upcoming</option>
            </select>
          </div>

          <div className="filter__widget-01">
            <select>
              <option value="mobile">Mobile</option>
              <option value="laptop">Laptop</option>
              <option value="earpods">Earpods</option>
            </select>
          </div>
        </div>

        <div className="booking__car-list">
          {phoneData?.map((item) => (
            <Item item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookings;
