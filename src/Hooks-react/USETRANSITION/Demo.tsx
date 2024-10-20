import React, { useState, useTransition } from "react";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";

const UseTransition: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(1); // Active tab state
  const [isPending, startTransition] = useTransition();

  // Handle tab changes with useTransition to ensure smooth rendering
  const handleTabChange = (tabNumber: number) => {
    startTransition(() => {
      setActiveTab(tabNumber);
    });
  };

  let content;
  if (activeTab === 1) {
    content = <Tab1 />;
  } else if (activeTab === 2) {
    content = <Tab2 isloading={isPending} />; // This will load a large dataset
  } else if (activeTab === 3) {
    content = <Tab3 />;
  }

  return (
    <div>
      <h1>Tab Navigation with Large Data Handling</h1>
      <div className="flex gap-2">
        <button
          className="border m-1 bg-gray-100"
          onClick={() => handleTabChange(1)}
        >
          Tab 1
        </button>
        <button
          className="border m-1 bg-gray-100"
          onClick={() => handleTabChange(2)}
        >
          Tab 2 (Heavy Data)
        </button>
        <button
          className="border m-1 bg-gray-100"
          onClick={() => handleTabChange(3)}
        >
          Tab 3
        </button>
      </div>

      {/* Show loading indicator while transition is happening */}
      {isPending && <p>Loading tab content...</p>}

      <div>{content}</div>
    </div>
  );
};

export default UseTransition;
