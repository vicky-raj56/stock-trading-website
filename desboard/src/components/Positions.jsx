import React, { useState, useEffect } from "react";
import axios from "axios";
// Agar aapko backend data ke saath local data bhi dikhana hai toh ise rakhein,
// warna sirf positionData kaafi hai.
import { positions as localPositions } from "../data/data";

const Positions = () => {
  // 1. States defined inside the component
  const [positionData, setPositionData] = useState([]);
  const [loading, setLoading] = useState(true);

  // 2. Vite environment variable access
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  // 3. API Fetching function
  const fetchPositions = async () => {
    try {
      setLoading(true);
      // Template literal for clean URL construction
      const response = await axios.get(`${backendUrl}/allposition`);

      // API response check (Make sure your backend sends 'allposition' array)
      if (response.data && response.data.allposition) {
        setPositionData(response.data.allposition);
        console.log("Data fetched successfully:", response.data.allposition);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data from backend:", error);
      setLoading(false);
    }
  };

  // 4. useEffect to call API on mount
  useEffect(() => {
    fetchPositions();
  }, []);

  // 5. Loading State (Site fast dikhane ke liye useful hai)
  if (loading) {
    return <div className="loading">Loading positions...</div>;
  }

  return (
    <>
      <h3 className="title">Positions ({positionData.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            {/* ✅ Correct Table Hierarchy: Table > Thead > TR > TH */}
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>

          <tbody>
            {/* ✅ Mapping over API data (positionData) */}
            {positionData.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td className={profClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;
