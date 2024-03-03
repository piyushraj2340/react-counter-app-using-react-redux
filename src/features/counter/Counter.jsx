import React, { useState } from 'react'

// importing to read and dispatch actions

// useSelector is use to read the data from the store and 
// useDispatch is use to dispatch the actions 
import { useSelector, useDispatch } from 'react-redux'

// importing the slice action 
import { decrement, increment, incrementByAmount } from './counterSlice'

// Now we can use the React Redux hooks to let React components interact with the Redux store. We can read data from the store with useSelector, and dispatch actions using useDispatch. Create a src/features/counter/Counter.js file with a <Counter> component inside, then import that component into App.js and render it inside of <App>.

export default function Counter() {
  // logging the value of state in the console.
  const counter = useSelector((store) => store.counter);
  const dispatch = useDispatch();

  const [incrOrDecrValue, setIncrOrDecrValue] = useState(null);

  console.log("Counter app: rendering");
  return (
    <div className='flex flex-col items-center'>
      <div className='m-2 flex flex-col items-start justify-center'>
        <div>
          <p><span>Increment or decrement value: </span> <span>{ counter.incrementByAmount }</span></p>
        </div>
        <div>
          <input type="number" className='p-2 border-slate-950 border rounded w-100 text-black w-[250px]' name="incr-by-value" id="incr-by-value" placeholder='Increment or Decrement value' onChange={(e) => setIncrOrDecrValue(e.target.value)} />
          <button type="button" className='p-2 border-slate-950 border rounded bg-blue-800 text-white hover:bg-blue-600 m-3 active:bg-blue-700' onClick={() => dispatch(incrementByAmount(Number(incrOrDecrValue??1)))}>Set Value</button>
        </div>
      </div>
      <div className='m-2'>
        <button className='p-2 border-slate-950 border rounded bg-blue-800 text-white hover:bg-blue-600 m-3 active:bg-blue-700' aria-label="Increment value" onClick={() => dispatch(increment())}> Increment</button>
        <span>{counter.value}</span>
        <button className='p-2 border-slate-950 border rounded bg-blue-800 text-white hover:bg-blue-600 m-3 active:bg-blue-700' aria-label="Decrement value" onClick={() => dispatch(decrement())}> Decrement</button>
      </div>
    </div>
  )
}