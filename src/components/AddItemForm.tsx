import React, {ChangeEvent, FC, KeyboardEvent, useState} from 'react';
import Button from "./Button";
import {IconButton, TextField} from "@material-ui/core";
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';

type AddItemFormType = {
    addItem: (title: string) => void
}

export const AddItemForm: FC<AddItemFormType> = (props) => {
    const [title, setTitle] = useState<string>("")
    const [error, setError] = useState<boolean>(false)

    const onChangeSetTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        setError(false)
    }
    const onKeyPressAddItem = (e: KeyboardEvent<HTMLInputElement>) => e.key === "Enter" && onClickAddItem()
    const onClickAddItem = () => {
        const trimmedTitle = title.trim()
        if (trimmedTitle) {
            props.addItem(trimmedTitle)
        } else {
            setError(true)
        }
        setTitle("")
    }

    return (
        <div>
            <TextField
                size={'small'}
                value={title}
                onChange={onChangeSetTitle}
                onKeyPress={onKeyPressAddItem}
                variant={'outlined'}
                label={'Title'}
                // color={error?'secondary': 'primary'}
                error={error}
                helperText={error && "Title is required!"}
            />
            <IconButton color={'inherit'} size={'small'} onClick={onClickAddItem}><AddBoxOutlinedIcon/></IconButton>
        </div>
    );
};
