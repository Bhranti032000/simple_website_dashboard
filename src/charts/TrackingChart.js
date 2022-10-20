import React from "react";

import trackingData from "../assets/dummy-data/trackingData";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const TrackingChart = () => {
  return (
    <ResponsiveContainer width="100%">
      <LineChart>
        <CartesianGrid strokeDasharray="0" stroke="#b7ffe913" />
        <XAxis dataKey="name" stroke="#ddd" />

        <Line
          type="monotone"
          dataKey="sale"
          data={trackingData}
          stroke="#e1424e"
          strokeWidth={4}
          activeDot={{ r: 10 }}
        />

        <Tooltip wrapperClassName="tooltip__style" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default TrackingChart;
