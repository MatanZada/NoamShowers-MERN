import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PaymentForm from "./PaymentForm";
const PUBLIC_KEY =
  "pk_test_51LVIsVAefsLyUV5XbUC0pvO3F5FGaRNrFquK4ZCIp5cRkAsFaWQoBBTFm6ftW5bBOWTrn2WyQkjWJ7PPmUv3Wcrc00NbTIXKP8";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const StripeContainer = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
};

export default StripeContainer;
