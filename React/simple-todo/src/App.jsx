import {useState} from "react"

function App(){
    const[todos,setTodos]=useState([])
    const[newTodo, setNewTodo]=useState('')
    return( <div>
        <form onSubmit={handleSubmitt}>
            <input className="todo-input" autoComplete="off" type="text" name="newTodo"placeholder="what needs to be done" onChange={handleChange}/>
            <button type="submitt" className="save-button"/>Save
        </form>
        <div>
            <ol>

            </ol>
        </div>
    </div> )
}