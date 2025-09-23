import React from "react";
import { getCurrentTime } from "@shared/utils/time";

// Dynamic imports for code splitting
const Sub1 = React.lazy(() => import(/* webpackChunkName: "sub1" */ "@sub-1/pages/Sub1"));
const Sub2 = React.lazy(() => import(/* webpackChunkName: "sub2" */ "@sub-2/pages/Sub2"));

const App = () => {
  const [count, setCount] = React.useState(2);
  return (
    <div>
      App
      {count}
      {getCurrentTime()}
      <React.Suspense fallback={<div>Loading Sub1...</div>}>
        <Sub1 />
      </React.Suspense>
      <React.Suspense fallback={<div>Loading Sub2...</div>}>
        <Sub2 />
      </React.Suspense>
    </div>
  );
};

export default App;
