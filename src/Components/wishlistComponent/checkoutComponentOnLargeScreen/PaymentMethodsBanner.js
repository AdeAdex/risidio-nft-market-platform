import React from "react";

const PaymentMethodsBanner = ({ banner, styles }) => {
  return (
    <>
      <img src={banner} className="my-auto" style={styles} alt="" />
    </>
  );
};

export default PaymentMethodsBanner;
