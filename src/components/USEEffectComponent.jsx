import React, { useState, useEffect } from "react";

const DataFetchingComponent = () => {
  const [postId, setPostId] = useState(1); // Track current post ID
  const [data, setData] = useState(null); // For storing API data
  const [loading, setLoading] = useState(true); // For loading state
  const [error, setError] = useState(null); // For error handling

  // useEffect hook to fetch data whenever postId changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Reset loading state for each new fetch
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        if (!response.ok) throw new Error("Failed to fetch data");

        const result = await response.json();
        setData(result); // Save fetched data to state
      } catch (err) {
        setError(err.message); // Handle errors if any
      } finally {
        setLoading(false); // Mark loading as finished
      }
    };

    fetchData();
  }, [postId]); // Dependency array now contains postId, so effect runs on postId change

  // Increment and decrement post ID
  const nextPost = () => setPostId((prevPostId) => prevPostId + 1);
  const previousPost = () =>
    setPostId((prevPostId) => (prevPostId > 1 ? prevPostId - 1 : 1));

  // Conditional rendering based on the state
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h3>{data.title}</h3>
      <p>{data.body}</p>

      <div>
        <button
          className="bg-gray-300 p-4 m-2"
          onClick={previousPost}
          disabled={postId === 1}
        >
          Previous Post
        </button>
        <button className="bg-gray-300 p-4 m-2" onClick={nextPost}>
          Next Post
        </button>
      </div>
    </div>
  );
};

export default DataFetchingComponent;
