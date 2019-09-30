import React, { useState } from "react";
import Tweet from "./Tweet";

function StateTweet() {
  const [users, setUser] = useState([
    { name: "Ashrf Ali", tweets: "Hey i managed to survive this long" },
    { name: "Asif Sha", tweets: "I am the alter ego of Ashrf Ali" },
    { name: "A1m3r Al1", tweets: "I am the gamer version of Ashrf Ali" }
  ]);
  return (
    <div className="tweets">
      {users.map(user => (
        <Tweet name={user.name} tweets={user.tweets} />
      ))}
    </div>
  );
}

export default StateTweet;
