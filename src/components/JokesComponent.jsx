import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getJokeAsync } from "../state/jokes/jokesSlice";
import spinner from "../3-dots-scale.svg";

const JokesComponent = () => {
  const getNextJoke = () => {
    setShowPunchline(false);
    dispatch(getJokeAsync());

    setTimeout(() => {
      setShowPunchline(true);
    }, 5000);
  };

  const dispatch = useDispatch();
  const joke = useSelector((state) => state.jokes);

  const [showPunchline, setShowPunchline] = useState(true);

  useEffect(() => {
    if (joke?.status === "idle") {
      getNextJoke();
    }
  }, [joke, dispatch]);

  return (
    <>
      <button
        onClick={() => {
          getNextJoke();
        }}
      >
        Next joke
      </button>
      {(joke?.status === "loading" && (
        <div>
          <img src={spinner} />
        </div>
      )) ||
        (joke?.status === "error" && <div>Error: {joke?.error}</div>) || (
          <div>
            <div>{joke?.data?.setup}</div>
            {(showPunchline && <div>{joke?.data?.punchline}</div>) || (
              <img src={spinner} />
            )}
          </div>
        )}
    </>
  );
};

export default JokesComponent;
