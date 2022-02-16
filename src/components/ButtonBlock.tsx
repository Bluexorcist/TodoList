import React, {FC} from 'react';
import Button from "./Button";
import {FilterValuesType} from "../App";

type ButtonBlockType = {
    filter: FilterValuesType
    setFilterValue: (filter: FilterValuesType) => () => void
}

const ButtonBlock: FC<ButtonBlockType> = ({
                                              filter,
                                              setFilterValue
                                          }) => {
    return (
        <div>
            <Button
                active={filter === "all"}
                title={"Всё"}
                onClickHandler={setFilterValue('all')}
            />
            <Button
                active={filter === "active"}
                title={"В работе"}
                onClickHandler={setFilterValue('active')}
            />
            <Button
                active={filter === "completed"}
                title={"Выполнено"}
                onClickHandler={setFilterValue("completed")}
            />
        </div>
    );
};

export default ButtonBlock;