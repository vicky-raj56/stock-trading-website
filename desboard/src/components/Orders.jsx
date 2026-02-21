import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Orders = () => {
  // const id = uuidv4();
  // console.log("id", id);
  const [isData, setIsData] = useState(true);
  const [showOrder, setShowOrder] = useState([]);
  useEffect(() => {
    async function fetchedShowOrder() {
      try {
        const response = await axios.get("http://localhost:8080/showorder");
        console.log("showorder", response);
        setShowOrder(response.data.showorder);
        setIsData(false);
      } catch (error) {
        console.log("showorder error:", error.message);
        setIsData(true);
      }
    }
    fetchedShowOrder();
  }, []);

  if (isData) {
    return (
      <div className="no-orders ">
        <p>You haven't placed any orders today</p>

        <Link to="/" className="btn">
          Get started
        </Link>
      </div>
    );
  }

  return (
    <div className="orders">
      <table className="order-tables">
        <thead>
          <tr>
            <th>name</th>
            <th>qty</th>
            <th>price</th>
          </tr>
        </thead>

        <tbody>
          {showOrder.map((data) => (
            <tr key={uuidv4()}>
              <td>{data.name}</td>
              <td>{data.qty}</td>
              <td>{data.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
