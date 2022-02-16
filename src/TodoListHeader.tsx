import React from 'react';
import Button from "./components/Button";
import {EditableSpan} from "./components/EditableSpan";

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
            <Button active={false} title={"x"} onClickHandler={props.removeTodoList}/>
        </h3>

    )
};

export default TodoListHeader;