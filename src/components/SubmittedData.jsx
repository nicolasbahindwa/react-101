import React from "react";

const SubmittedData = ({ data }) => {
  if (!data) return null;

  return (
    <div className="mt-4 p-4 bg-green-100 rounded-md">
      <h2 className="text-lg font-semibold mb-2">Submitted Data:</h2>
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
    </div>
  );
};

export default SubmittedData;
