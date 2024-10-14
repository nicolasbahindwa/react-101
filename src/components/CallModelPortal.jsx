import React, { useState } from "react";
import ModalPortal from "./ModalPortal"; // Import the Modal component

const CallModelPortal = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div>
      <h1>React Portals Example</h1>
      <button className="bg-gray-300 p-4 m-2" onClick={openModal}>Open Modal</button>

      {/* Use the modal component */}
      <ModalPortal isOpen={isModalOpen} onClose={closeModal}>
        <h2>This is a Modal</h2>
        <p>Content inside the modal goes here!</p>
      </ModalPortal>
    </div>
  );
};

export default CallModelPortal;
