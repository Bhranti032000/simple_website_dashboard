import React from "react";
import "../styles/dashboard.css";
import SingleCard from "../components/reuseable/SingleCard";

import MileChart from "../charts/MileChart";
import StatsChart from "../charts/StatsChart";
import RecommendCarCard from "../components/UI/RecommendCarCard";

import recommendCarsData from "../assets/dummy-data/recommendCars";

const Obj = {
  title: "Total Sale",
  totalNumber:  "3T",
};

const rev = {
  title: "Revenue",
  totalNumber:  "279B",
};

const annual = {
  title: "Annually Income",
  totalNumber: "8.4T",
};

const daily = {
  title: "Daily sale",
  totalNumber: "272M",
};

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__wrapper">
        <div className="dashboard__cards">
          <SingleCard item={Obj} />
          <SingleCard item={rev} />
          <SingleCard item={annual} />
          <SingleCard item={daily} />
        </div>

        <div className="statics">
          <div className="stats">
            <h3 className="stats__title">Total Sale</h3>
            <MileChart />
          </div>

          <div className="stats">
            <h3 className="stats__title">Company Growth</h3>
            <StatsChart />
          </div>
        </div>

        <div className="recommend__cars-wrapper">
          {recommendCarsData.map((item) => (
            <RecommendCarCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
