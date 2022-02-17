import React, {ChangeEvent} from 'react';
import {TaskType} from "./App";
import {EditableSpan} from "./components/EditableSpan";
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';
import {Checkbox, IconButton, List} from "@material-ui/core";

type TaskPropsType = TaskType & {
    removeTask: (taskID: string) => void
    changeTaskStatus: (taskID: string, isDone: boolean) => void
    changeTaskTitle: (taskID: string, title: string) => void
}

const Task: React.FC<TaskPropsType> = (
    {
        id,
        title,
        isDone,
        removeTask,
        changeTaskStatus,
        changeTaskTitle
    }
) => {
    const onClickRemoveTask = () => removeTask(id)
    const onChangeChangeTaskStatus = (e: ChangeEvent<HTMLInputElement>) => changeTaskStatus(id, e.currentTarget.checked)
    const onChangeChangeTaskTitle = (title: string) => changeTaskTitle(id, title)
    return (
        <List>
            <span className={isDone ? "is-done" : ""}>
                <Checkbox
                    size={'small'}
                    onChange={onChangeChangeTaskStatus}
                    checked={isDone}
                />
            <EditableSpan title={title} changeTitle={onChangeChangeTaskTitle}/>
            </span>
            <IconButton size={'medium'} color={'secondary'}
                        onClick={onClickRemoveTask}><DeleteOutlineRoundedIcon/></IconButton>
        </List>
    );
};

export default Task;
