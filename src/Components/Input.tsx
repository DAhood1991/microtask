import React, {ChangeEvent} from 'react';
type PropsType={
    title:string
    setTitle:(title:string)=>void
}

const Input = (props:PropsType) => {
    const onChangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
props.setTitle(event.currentTarget.value)
    }
    return (
        <div>
            <input value={props.title} onChange={onChangeHandler}/>
        </div>
    );
};

export default Input;