import React from "react";

export type CarsType = {
    model: string
    manufacturer: string
}

export type topCarsType = {
    students: Array<CarsType>
}
export const NewComponents2 = (props: topCarsType) => {
    return (
        <div>
            {props.students.map((e,index) => {
                return (
                    <td key={index}>

                        <table>{e.manufacturer}</table>
                        <table>{e.model}</table>
                    </td>

                )
            })}

        </div>
    )
}