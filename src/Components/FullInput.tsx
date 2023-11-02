import React, {ChangeEvent, useState} from 'react';

export type PropsType = {
    message: Array<MessageProps>
    onClick: (title: string) => void
}
type MessageProps = {
    message: string
}

const FullInput = (props: PropsType) => {
    const [title, setTitle] = useState('')
    const onClickHandler = () => {
        props.onClick(title)
        setTitle('')


    }

    const onchangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    return (
        <div>
            <div className="App">
                <div>
                    <input value={title} onChange={onchangeInputHandler}/>
                    <button onClick={onClickHandler}>+</button>
                </div>

            </div>
        </div>
    );
};

export default FullInput;