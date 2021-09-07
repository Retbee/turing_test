import styles from './AddToDoForm.module.css'

const AddToDoForm = ({onAddElem}) => {

    const handleFormSubmit = (event) => {
        event.preventDefault()
        console.log('handleFormSubmit: ', event.target.todo.value)
        onAddElem(event.target.todo.value)
    }

    return (
        <form className={styles.addToDoForm} onSubmit={handleFormSubmit}>
            <input className={styles.enterInput} name='todo'/>
            <button className={styles.button}>Add Elem</button>
        </form>
    )
}

export default AddToDoForm