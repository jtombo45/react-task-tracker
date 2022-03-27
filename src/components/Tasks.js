import Task from "./Task"

const Tasks = ({tasks, onDelete, onToggle}) => {
    return (
        <>
            {tasks.map((task) => (
                //tasks is the array list containing the tasks
                //map iterates through each task
                //task={task} allows us to pass each task and its data to the Task component
                <Task 
                    key={task.id} 
                    task={task} 
                    onDelete={onDelete} 
                    onToggle={onToggle}
                />
            ))}
        </>
    )
}

export default Tasks