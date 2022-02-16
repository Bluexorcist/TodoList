import React, {KeyboardEvent, ChangeEvent} from 'react';
import TodoListHeader from "./TodoListHeader";
import Button from "./components/Button";
import {FilterValuesType, TaskType} from "./App";
import Task from "./Task";
import {AddItemForm} from "./components/AddItemForm";
import ButtonBlock from "./components/ButtonBlock";

type TodoListPropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    filter: FilterValuesType
    removeTask: (taskID: string, todoListID: string) => void
    changeFilter: (filter: FilterValuesType, todoListID: string) => void
    addTask: (title: string, todoListID: string) => void
    changeTaskStatus: (taskID: string, isDone: boolean, todoListID: string) => void
    removeTodoList: (todoListID: string) => void
    changeTaskTitle: (taskID: string, title: string, todoListID: string) => void
    changeTitle: (title: string, todoListID: string) => void
}

const TodoList = (props: TodoListPropsType) => {


    const tasksComponents = props.tasks.map(t => {
        const removeTask = (taskID: string) => props.removeTask(taskID, props.id)
        const changeTaskStatus = (taskID: string, isDone: boolean) => props.changeTaskStatus(taskID, isDone, props.id)
        const changeTaskTitle = (taskID: string, title: string) => props.changeTaskTitle(taskID, title, props.id)
        return (
            <Task
                key={t.id}
                //{...t}
                id={t.id}
                title={t.title}
                isDone={t.isDone}
                removeTask={removeTask}
                changeTaskStatus={changeTaskStatus}
                changeTaskTitle={changeTaskTitle}
            />
        )
    })

    const setFilterValue = (filter: FilterValuesType) => () => props.changeFilter(filter, props.id)

    const removeTodoList = () => props.removeTodoList(props.id)
    const addTask = (title: string) => props.addTask(title, props.id)
const changeTitle = (title:string) => props.changeTitle(title, props.id)

    return (
        <div>
            <TodoListHeader title={props.title}
                            removeTodoList={removeTodoList}
                            changeTitle={changeTitle}
            />
            <AddItemForm addItem={addTask}/>
            <ul>
                {tasksComponents}
            </ul>
            <ButtonBlock filter={props.filter} setFilterValue={setFilterValue}/>
        </div>
    );
};

export default TodoList;