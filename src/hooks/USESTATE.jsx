import { useState } from "react";
import Comp1 from "../components/Comp1";
import Comp2 from "../components/Comp2";

const USESTATE = () => {
  const [counter, setCounter] = useState(0);
  const [friends, setFriends] = useState(["alex", "john"]);

  const [movies, setMovies] = useState([
    {
      title: "Equalizer 3",
      ratings: 7,
    },
    {
      title: "Prison Break",
      ratings: 9,
    },
  ]);

  const increment = () => setCounter(counter + 1);

  const decrement = () => setCounter(counter - 1);

  const addOneFriend = () => setFriends([...friends, "nicolas"]);

  const removeOneFriend = () =>
    setFriends(friends.filter((f) => f !== "nicolas"));

  const UpdadteOneFriend = () =>
    setFriends(friends.map((f) => (f === "nicolas" ? "Nicolas bahindwa" : f)));

  // Function to update the rating of a specific movie
  const updateMovieRating = (title, newRating) => {
    setMovies(
      movies.map((movie) =>
        movie.title === title ? { ...movie, ratings: newRating } : movie
      )
    );
  };

  return (
    <div className="p-7 flex flex-col gap-4 mt-10">
      <b>{counter}</b>
      <div className="flex gap-2">
        <button className="button-secondary p-4" onClick={increment}>
          +
        </button>

        <button className="button-secondary p-4" onClick={decrement}>
          -
        </button>
      </div>

      <h2 className="font-bold text-lg">Friends</h2>
      <div>
        <ul>
          {friends.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
        <button className="button-secondary p-4" onClick={addOneFriend}>
          add friend
        </button>

        <button className="button-secondary p-4" onClick={removeOneFriend}>
          remove friend
        </button>

        <button className="button-secondary p-4" onClick={UpdadteOneFriend}>
          update friend
        </button>
      </div>

      <h2 className="font-bold text-lg">Movies</h2>
      <div className="flex flex-col pb-4">
        <div>
          {movies.map((movie, index) => (
            <div key={index}>
              <p>{movie.title}</p>
              <p>{movie.ratings}</p>
              <button
                className="button-secondary p-4"
                onClick={() =>
                  updateMovieRating(movie.title, movie.ratings + 1)
                }
              >
                Increase Rating
              </button>
            </div>
          ))}
        </div>
      </div>

      <h1 className="font-bold text-lg">COMPONENTS</h1>
      <section>
        <Comp1 movies = {movies}/>
        <Comp2/>
      </section>
    </div>
  );
};

export default USESTATE;
