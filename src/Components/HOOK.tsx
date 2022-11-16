import React, {useState} from "react";


export const HOOK = () => {
  let [a,setA] =useState(0)
    const onClickHandler = () => {
        setA(++a)
    }
    const onClickHandlerReset = () => {
        setA(0)
    }
    return <div>{a}
        <button onClick={onClickHandler}>+</button>
        <button onClick={onClickHandlerReset}>reset</button>
  </div>
}