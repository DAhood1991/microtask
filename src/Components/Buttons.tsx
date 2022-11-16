import React from "react";
type SubscraiberType={
    name:string
    callBack:()=>void
}

export const Subscraiber = (props:SubscraiberType) => {
const onClickHandler = () => {
props.callBack()
}
    return (<>
            <button onClick={onClickHandler}>
                {props.name}
            </button>

        </>

    )
}