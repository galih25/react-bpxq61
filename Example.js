import React, { useState, useEffect } from 'react';

function Example() {
  // declare state variable
  const[count, setCount] = useState(0);

  // The Effect Hook lets you perform side effects in function components:
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
    console.log(document.title);
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={ () => setCount(count + 1) }>Click Me!</button>
    </div>
  );
}

export default Example;