//rfce + tab
//The events are stored in the App.js so how do we get access to it in the Task component?
//We use context API or reduxn or in our case a prop
import {FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete, onToggle}) => {
  return (
    //onDoubleClick doesn't work when using inspector tools
    <div className="task" onDoubleClick={() => onToggle(task.id)}>
        <h3>
            {task.text} <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(task.id)}/>
        </h3>
        <p>{task.day}</p>
    </div>
  )
}

export default Task