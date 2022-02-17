import React, {FC} from 'react';
import {FilterValuesType} from "../App";
import {Button, ButtonGroup} from "@material-ui/core";

type ButtonBlockType = {
    filter: FilterValuesType
    setFilterValue: (filter: FilterValuesType) => () => void
}

const ButtonBlock: FC<ButtonBlockType> = ({
                                              filter,
                                              setFilterValue
                                          }) => {
    return (
        <ButtonGroup
            fullWidth
            aria-label="small outlined button group"
            size={"small"}
            variant={"contained"}>
            <Button color={filter === 'all'?"secondary": "primary"} onClick={setFilterValue('all')}
            >all</Button>
            <Button color={filter === 'active'?"secondary": "primary"} onClick={setFilterValue('active')}
            >active</Button>
            <Button color={filter === 'completed'?"secondary": "primary"} onClick={setFilterValue('completed')}
            >completed</Button>
        </ButtonGroup>
    );
};

export default ButtonBlock;


{/*<Button*/}
{/*    active={filter === "all"}*/}
{/*    title={"Всё"}*/}
{/*    onClickHandler={setFilterValue('all')}*/}
{/*/>*/}
{/*<Button*/}
{/*    active={filter === "active"}*/}
{/*    title={"В работе"}*/}
{/*    onClickHandler={setFilterValue('active')}*/}
{/*/>*/}
{/*<Button*/}
{/*    active={filter === "completed"}*/}
{/*    title={"Выполнено"}*/}
{/*    onClickHandler={setFilterValue("completed")}*/}
{/*/>*/}