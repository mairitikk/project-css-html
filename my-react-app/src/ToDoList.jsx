/* eslint-disable no-unused-vars */
import React, {useState} from "react"
function ToDOList() {
    
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [editTask, setEditTask] = useState("");
   
    function handleInputChange(event) {
        setNewTask(event.target.value);
    }
    function addTask() {
        
    }
    function deleteTask(index) {
        
    }

    function moveTaskUp(index) {
        
    }
     function moveTaskDown(index) {
        
    }


    return (<div className="to-do-list">
        <h1>To-Do-List</h1>
        <div>
            <input type="text"
                placeholder="enter a task"
                value={newTask}
                onChange={handleInputChange} />
            <button className="add-button" onClick={addTask}>Add </button>
        </div>
    </div>)
}
export default ToDOList