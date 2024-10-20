import React, { useState, useDeferredValue } from "react";

// Generate a large list of items
const generateLargeList = (): string[] => {
  const dataset = [];
  for (let i = 0; i < 10000; i++) {
    dataset.push(`Item ${i}`);
  }
  return dataset;
};

const FilterComponent: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const largeList = generateLargeList();

  // Use the deferred value to delay filtering
  const deferredInputValue = useDeferredValue(inputValue);

  // Filter the large list based on the deferred input value
  const filteredList = largeList.filter((item) =>
    item.toLowerCase().includes(deferredInputValue.toLowerCase())
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h2>Filter Large List Using useDeferredValue</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type to filter the list"
      />
      <p>Filtered items: {filteredList.length}</p>
      <ul>
        {filteredList.slice(0, 50).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterComponent;
