import React from "react";
import AddToDoForm from "../../components/AddToDoForm/AddToDoForm";
import ToDoList from '../../components/ToDoList/ToDoList'
import styles from './ToDo.module.css'

const ToDo = () => {
    // const List = ['Wake up', 'Drink coffee']
    const [List, setList] = React.useState (['Wake up', 'Drink coffee'])

    const addElemToList = (elem) => {
        console.log('addElemToList: ', elem)
        // List.push(elem)
        setList(...List, elem)
    }

    return (
        <>
            TO DO
            <div>
                <AddToDoForm onAddElem={addElemToList}/>
                <ToDoList List={List}/>
            </div>
        </>
    )
}

export default ToDo