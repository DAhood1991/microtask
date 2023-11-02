import React from 'react';
type PropsType={
    name:string
    onClick:()=>void
}

const Button = (props:PropsType) => {
    const onClickHandler = () => {
      props.onClick()
    }
    return (
        <div>
            <button onClick={onClickHandler}>{props.name}</button>
        </div>
    );
};

export default Button;