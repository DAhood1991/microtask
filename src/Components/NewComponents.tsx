import React from "react";

export type StydentsType = {
    id: number
    name: string
    age: number
}

export type NewComponentsType = {
    students: Array<StydentsType>
}
export const NewComponents = (props: NewComponentsType) => {
    return (
        <div>
            {props.students.map((e) => {
                return (
                    <ul key={e.id}>
                        <span>{e.id}</span>
                        <span>{e.name}</span>
                        <span>{e.age}</span>
                    </ul>

            )
            })}

        </div>
    )
}