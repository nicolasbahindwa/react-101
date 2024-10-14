"use client"
import  { useState } from "react";
import PortalContent from "./PortalContent";
import ModalForm from "./ModalForm";
import SubmittedData from "./SubmittedData";

const ComplexPORTAL = () => {
  const [showPortal, setShowPortal] = useState(false);
  const [formData, setFormData] = useState(null);

  const handleSubmit = (data) => {
    setFormData(data);
    setShowPortal(false);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Complex Portal Example</h1>
      <button
        onClick={() => setShowPortal(true)}
        className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300"
      >
        Open Form Portal
      </button>
      {showPortal && (
        <PortalContent onClose={() => setShowPortal(false)}>
          <ModalForm
            onSubmit={handleSubmit}
            onClose={() => setShowPortal(false)}
          />
        </PortalContent>
      )}
      <SubmittedData data={formData} />
    </div>
  );
};

export default ComplexPORTAL;
