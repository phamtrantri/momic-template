import React from "react";


const Sub2 = () => {
  const [count, setCount] = React.useState(20);
  return <div>
    Sub2
    {count}
    <button onClick={() => setCount(count + 1)}>Increment</button>
  </div>;
};

export default Sub2;
