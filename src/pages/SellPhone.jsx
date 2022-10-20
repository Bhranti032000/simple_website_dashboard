import React from "react";
import "../styles/sell-phone.css";
import TrackingChart from "../charts/TrackingChart";
import phoneData from "../assets/dummy-data/booking-phones.js";
import CarItem from "../components/UI/CarItem";
import phone02 from "../assets/images/folded_prev_ui.png";

const SellPhone = () => {
  return (
    <div className="sell__phone">
      <div className="sell__phone-wrapper">
        <h2 className="sell__phone-title">Latest Edition</h2>
        <div className="sell__phone-top">
          <div className="sell__phone-img">
            <img src={phone02} alt=""></img>
            <h2>Samsung Galaxy Z Flip 5G</h2>

          </div>

          <div className="tracking__history">
            <h3>Tracking History</h3>
            <TrackingChart />
          </div>
        </div>
        <div className="latest_mobile">
        <div className="booking__phone-list">
          {phoneData?.map((item) => (
            <CarItem item={item} key={item.id} />
          ))}
        </div>
       </div>
      </div>
    </div>
  );
};

export default SellPhone;
