import React, { useMemo,useCallback,useEffect,memo, useRef, useState } from "react";

// const Demo = () => {
//     const [] = useState()
//     return(
//         <div>
//             <button type="button">+</button>
//             <button type="button">-</button>
//         </div>
//     );
// };

// export default Demo

function Child1({ data, fn }) {
  console.log('Child1');
  return (
    <div>
      <h1>Hello Child1</h1>
      {data.map((x) => (
        <p key={x}>{x}</p>
      ))}
      <button onClick={fn} type="button">
        Click me
      </button>
    </div>
  );
}

const Child1Memo = memo(Child1);

function Child2({ data, fn }) {
  console.log('Child2');
  return (
    <div>
      <h1>Hello Child2</h1>
      {data.map((x) => (
        <p key={x}>{x}</p>
      ))}
      <button onClick={fn} type="button">
        Click me
      </button>
    </div>
  );
}

const Child2Memo = memo(Child2);

function App1({ number }) {
  const [counter, setCounter] = useState(number);
  const [name, setName] = useState('Simon');
  const isMounted = useRef(false);

  // Memorizing The non primitive type of data
  const data = useMemo(() => [1, 2, 3], [name]);

  const fn = useCallback(() => {
    console.log('hello world');
  }, [name]);

  // Clousures
  const increment = () => {
    setCounter((val) => val + 1);
  };

  const decrement = () => {
    setCounter((val) => val - 1);
  };

  const changeName = () => {
    setName('Peter');
  };

  // Never Change Value of dependency
  useEffect(() => {
    if (isMounted.current) {
      console.log('Change value');
    }
  }, [name]);

  // Component Did Mount
  // Component Did Update  // **Never write useEffect without dependency**
  useEffect(() => {
    console.log('Component Did Mount');
    isMounted.current = true;
  }, []);

  return (
    <>
      <div>
        <button type="button" onClick={increment}>
          +
        </button>
        {counter}
        <button type="button" onClick={decrement}>
          -
        </button>
      </div>
      <div>
        {name}
        <button type="button" onClick={changeName}>
          Change Name
        </button>
      </div>
      <Child1Memo data={data} fn={fn} />
      <Child2Memo data={data} fn={fn} />
    </>
  );
}

// Hooks is replacement of class component

// When we use class components
// 1. Whenever we want to use state
// 2. Life cycle method
// 3. manipulate the data method/function

// In class we have pointers

// Using Hooks above mention finctionaly we can achieve function component
// All hooks starts with the "use" keyword

// import React, { useState } from "react"

// const App1 = () => {
//     const [counter, setCounter] = useState(0)
//     return(
//         <div>
//             <button type= "button"></button>
//             {counter}
//             <button type= "button"></button>

//         </div>
//     )
// }

export default App1