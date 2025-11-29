import { useDispatch, useSelector } from "react-redux";

import {  increment,decrement, reset } from "../counterSlice";

const Counter = () => {
  //  const sub=()=>{
  //     setCount(count-1)
  //   }
  const count=useSelector((state)=> state.counter.count);
  const dispatch=useDispatch();
  return (
    <>
      <h1 style={{fontSize:"50px",}}>{count}</h1>
      {/* <button onClick={()=>{setCount(count+1)}}>+</button>
      <button onClick={sub}>-</button>
      <button onClick={()=>{setCount(0)}}>reset</button> */}
       <button onClick={()=>{dispatch(increment())}}>+</button>
      <button onClick={()=>{dispatch(decrement())}}>-</button>
      <button onClick={()=>{dispatch(reset())}}>reset</button>
      
<p>1234vsdvsvvdsv</p>
<p>123445</p>
    </>
  )
}

export default Counter
