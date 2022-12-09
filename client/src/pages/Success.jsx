import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";

const Success = () => {
  const location = useLocation();

  if (!location.state || !location.state.id)
    return <div>Sorry you got here by mistake..</div>;
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {location.state.id &&
        `Order has been created successfully. Your order number is ${location.state.id}`}
      <NavLink to="/">
        <button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
      </NavLink>
    </div>
  );
};

export default Success;
