import React from "react";
import { getCurrentTime } from "@shared/utils/time";
import Sub1 from "@sub-1/pages/Sub1";
import Sub2 from "@sub-2/pages/Sub2";

const App = () => {
  const [count, setCount] = React.useState(2);
  return (
    <div>
      App
      {count}
      {getCurrentTime()}
      <Sub1 />
      <Sub2 />
    </div>
  );
};

export default App;
