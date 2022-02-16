import React, {ChangeEvent} from "react";

export type CheckBoxType = {
    isDone: boolean
    CheckBoxStatusChange(value: boolean): void
}

export const CheckBox = (props: CheckBoxType) => {
    const CheckBoxStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
        props.CheckBoxStatusChange(event.currentTarget.checked)
        console.log(event.currentTarget.checked)
    }

    return (
        <input type="checkbox" checked={props.isDone} onChange={CheckBoxStatusChange}/>

    )
}