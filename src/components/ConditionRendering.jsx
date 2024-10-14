import React from "react";

const ConditionRendering = () => {
  const Items = ["wireless earbugs", "power bank", "nre SSD", "HODDIES"];
 

  return (
    <div>
      <h2 className="font-bold text-lg m-4">Conditional rendering </h2>
      {Items.length === 0 ? <p><b>You do not have any item in the cart</b></p> : <b>Cart</b>}
      {Items.length > 0 && <p>Your have {Items.length} Items in your cart</p>}
      <ul>
        {Items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ConditionRendering;
