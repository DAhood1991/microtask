import React from "react";
import {filterType} from "../App";

type MoneyType = {
    banknots: string
    value: number
    number: string
}
export type MoneyPropsType = {
    money: Array<MoneyType>
    CallBack:(name:filterType)=>void
}

export const Filter = (props: MoneyPropsType) => {
    const filterHandlerAll = () => {
props.CallBack("all")
    }
    const filterHandlerRubl = () => {
        props.CallBack("RUBLS")
    }
    const filterHandlerDollar = () => {
props.CallBack('Dollars')
    }
    return <ol>
        {props.money.map((m,index)=>{
             return <li key={index}>
                    <span>{m.banknots}</span>
                    <span>{m.value}</span>
                    <span>{m.number}</span>
                </li>
        })
        }
        <button onClick={filterHandlerAll}>filterHandlerAll</button>
        <button onClick={filterHandlerRubl}>FilterRubl</button>
        <button onClick={filterHandlerDollar}>filterHandlerDollar</button>
            </ol>



        }