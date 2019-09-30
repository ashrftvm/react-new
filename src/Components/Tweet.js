import React from "react";

function Tweet(props) {
  return (
    <div className="tweet">
      <h2>{props.name}</h2>
      <p>{props.tweets}</p>
      <h4>{props.likes}</h4>
    </div>
  );
}

export default Tweet;
