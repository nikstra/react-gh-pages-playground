import React from "react";
import JokesComponent from "../components/JokesComponent";

function Jokes() {
  return (
    <>
      <div className="container">
        <h1>Random jokes</h1>
        <JokesComponent />
      </div>
    </>
  );
}

export default Jokes;
