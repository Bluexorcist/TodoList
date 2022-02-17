import React from 'react';
import {EditableSpan} from "./components/EditableSpan";
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import {IconButton} from "@material-ui/core";

type TodoListHeaderPropsType = {
    title: string
    removeTodoList: () => void
    changeTitle: (newTitle: string) => void
}

const TodoListHeader: React.FC<TodoListHeaderPropsType> = ({title,
                                                               changeTitle,
                                                               ...props}) => {
    return (
        <h3>
            <EditableSpan title={title} changeTitle={changeTitle}/>
            <IconButton size={'small'} color={'inherit'} onClick={props.removeTodoList}><DeleteForeverRoundedIcon/></IconButton>
        </h3>

    )
};

export default TodoListHeader;