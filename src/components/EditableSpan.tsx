import React, {ChangeEvent, FC, KeyboardEvent, useState} from 'react';

type EditableSpanType = {
    title: string
    changeTitle: (newTitle:string) => void
}

export const EditableSpan: FC<EditableSpanType> = (
    {
        title,
        changeTitle
    }) => {
    const [newTitle, setNewTitle] = useState<string>(title)
    const [editMode, setEditMode] = useState<boolean>(false)
    const onChangeSetUserText = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }
    const onKeyPressOffEditMode = (e: KeyboardEvent<HTMLInputElement>) => e.key === "Enter" && offEditMode()
    const onEditMode = () => {
      setEditMode(true)
    }
    const offEditMode = () => {
        setEditMode(false)
        changeTitle(newTitle)
    }
    return (
        editMode
        ? <input
            autoFocus={true}
            value={newTitle}
            onChange={onChangeSetUserText}
            onBlur={offEditMode}
            onKeyPress={onKeyPressOffEditMode}
            />
        :<span onDoubleClick={onEditMode}>{title}</span>
    );
};
