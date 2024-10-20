import React from "react";


interface Tabprop {
  isPending: boolean;
}
// Simulate loading a large dataset
const generateLargeDataset = (): string[] => {
  const dataset = [];
  for (let i = 0; i < 50000; i++) {
    dataset.push(`Item ${i}`);
  }
  return dataset;
};

const Tab2: React.FC<Tabprop> = ({ isPending }) => {
  const largeDataset = generateLargeDataset();

  return (
    <div>
      <h2>Tab 2 Content - Large Data</h2>

      {/* Show loading spinner if isPending is true */}
      {isPending ? (
        <p>Loading data...</p>
      ) : (
        <ul>
          {largeDataset.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Tab2;
