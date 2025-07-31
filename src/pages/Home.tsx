import React from "react";

import _ from "lodash";
import moment from "moment";

const Home = () => {
  const date = moment().format("MMMM Do YYYY, h:mm:ss a");
  const sampleArray = [1, 2, 3, 4, 5];
  const shuffled = _.shuffle(sampleArray);

  return (
    <div>
      <h2>Home</h2>
      <p>Current Date: {date}</p>
      <p>Shuffled Array: {shuffled.join(", ")}</p>
    </div>
  );
};

export default Home;
