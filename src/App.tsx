import React, {useState} from 'react';
import './App.css';
import TodoList from "./Todolist";
import {v1} from "uuid";
import {AddItemForm} from "./components/AddItemForm";
import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
// C
// R
// U
// D
export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type TodoListType = {
    id: string
    title: string
    filter: FilterValuesType
}

type TaskStateType = {
    [key: string]: Array<TaskType>
}

export type FilterValuesType = "all" | "active" | "completed"

const App = () => {
    // BLL:
    const todoListID_1 = v1()
    const todoListID_2 = v1()
    const todoListID_3 = v1()


    const [todoList, setTodoList] = useState<Array<TodoListType>>([
        {id: todoListID_1, title: "What to learn", filter: "all"},
        {id: todoListID_2, title: "What to read", filter: "all"},
        {id: todoListID_3, title: "Place to travel", filter: "all"},
    ])
    const [tasks, setTasks] = useState<TaskStateType>({
        [todoListID_1]: [
            {id: v1(), title: "HTML&CSS", isDone: false}, //"completed"
            {id: v1(), title: "JS/ES6", isDone: false}, // "completed"
            {id: v1(), title: "REACT", isDone: false}, // "completed"
        ],
        [todoListID_2]: [
            {id: v1(), title: "The Catcher in the rye", isDone: false}, //"completed"
            {id: v1(), title: "Angel & Demons", isDone: false}, // "completed"
            {id: v1(), title: "Shawshank Redemption", isDone: false}, // "completed"
        ],
        [todoListID_3]: [
            {id: v1(), title: "Black Sea", isDone: false}, //"completed"
            {id: v1(), title: "Kioto Japan", isDone: false}, // "completed"
            {id: v1(), title: "Spain", isDone: false}, // "completed"
        ],
    })


    const removeTask = (taskID: string, todoListID: string) => {
        setTasks({...tasks, [todoListID]: tasks[todoListID].filter(t => t.id !== taskID)})
    }
    const addTask = (title: string, todoListID: string) => {
        const newTask: TaskType = {id: v1(), title, isDone: false}
        /*        const updatedTasks: Array<TaskType> = [newTask, ...tasks]*/
        setTasks({...tasks, [todoListID]: [newTask, ...tasks[todoListID]]})
    }
    const changeTaskStatus = (taskID: string, isDone: boolean, todoListID: string) => {
        setTasks({...tasks, [todoListID]: tasks[todoListID].map(t => t.id === taskID ? {...t, isDone} : t)})
        /* setTasks(tasks.map(t => t.id === taskID ? {...t, isDone} : t))*/
    }

    const changeFilter = (filter: FilterValuesType, todoListID: string) => {
        setTodoList(todoList.map(tl => tl.id === todoListID ? {...tl, filter} : tl))
    }
    const changeTitle = (title: string, todoListID: string) => {
        setTodoList(todoList.map(tl => tl.id === todoListID ? {...tl, title} : tl))
    }
    const getTasksForRender = (todoList: TodoListType) => {
        switch (todoList.filter) {
            case "active":
                return tasks[todoList.id].filter(t => !t.isDone)
            case "completed":
                return tasks[todoList.id].filter(t => t.isDone)
            default:
                return tasks[todoList.id]
        }
    }
    const removeTodoList = (todoListID: string) => {
        setTodoList(todoList.filter(tl => tl.id !== todoListID))
        delete tasks[todoListID]
    }
    const addTodoList = (title: string) => {
        const newTodoListID = v1()
        const newTodoList: TodoListType = {
            id: newTodoListID, title, filter: "all"
        }
        setTodoList([...todoList, newTodoList])
        setTasks({...tasks, [newTodoListID]: []})
    }
    const changeTaskTitle = (taskID: string, title: string, todoListID: string) => {
        setTasks({...tasks, [todoListID]: tasks[todoListID].map(t => t.id === taskID ? {...t, title} : t)})
    }

    const todoListComponents = todoList.map(tl => {
        const tasksForRender = getTasksForRender(tl)
        return (
            <Grid item  key={tl.id}>
            <Paper elevation={8}
                   style={{padding: "30px"}}>
                <TodoList
                    id={tl.id}
                    title={tl.title}
                    tasks={tasksForRender}
                    filter={tl.filter}
                    removeTask={removeTask}
                    changeFilter={changeFilter}
                    addTask={addTask}
                    changeTaskStatus={changeTaskStatus}
                    removeTodoList={removeTodoList}
                    changeTaskTitle={changeTaskTitle}
                    changeTitle={changeTitle}
                />
            </Paper>
            </Grid>
        )
    })


    // UI:
    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar style={{justifyContent: 'space-between'}}>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        Todolists
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Container fixed>
                <Grid container
                      style={{padding: "25px 0"}}
                      justifyContent={'center'}>
                    <AddItemForm addItem={addTodoList}/>
                </Grid>
                <Grid container spacing={6} justifyContent={'center'}>
                    {todoListComponents}
                </Grid>
            </Container>
        </div>
    );
}

export default App;
