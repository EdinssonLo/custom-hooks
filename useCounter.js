import { useState } from "react"

export const useCounter = (initialValue=10) => {
  const [counter, setCounter] = useState(initialValue);

  const onIncrement = (value) =>{
    setCounter(counter+ value);
  }

  const onReset = () =>{
    setCounter(initialValue);
  }

  const onDecrement = (value) =>{
    if(counter - value <= 0) return;

    setCounter(counter - value);
  }
  const onSetCounter = (value) => {
    setCounter(value)
  }

    return {
    counter,
    onDecrement,
    onIncrement,
    onSetCounter,
    onReset
  }
}
