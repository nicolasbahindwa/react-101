import React, { useRef, useState, useEffect } from "react";

export default function UseRefExample() {
  const inputRef = useRef(null);
  const countRef = useRef(0);
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    // Focus the input element on component mount
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    // Update previousInputValue whenever inputValue changes
    previousInputValue.current = inputValue;
  }, [inputValue]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    // Increment countRef without causing a re-render
    countRef.current += 1;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You've changed the input ${countRef.current} times.`);
    // Reset the input and count
    setInputValue("");
    countRef.current = 0;
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold text-center">useRef Example</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="example-input"
            className="block text-sm font-medium text-gray-700"
          >
            Enter some text:
          </label>
          <input
            id="example-input"
            type="text"
            ref={inputRef}
            value={inputValue}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div className="text-sm text-gray-600">
          Previous value: {previousInputValue.current}
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
