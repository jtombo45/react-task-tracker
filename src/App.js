
import React from 'react'
import Header from "./components/Header";
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
//hook called useState
import { useState } from 'react'


function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Dab up Ernest Garcia',
        day: 'March 31st at 10am',
        reminder: false,
    },
    {
        id: 2,
        text: 'Stash all of Carvana\'s snacks in my work drawer',
        day: 'March 25th at 9am',
        reminder: true,
    },
    {
        id: 3,
        text: 'Beat Miles at Ping Pong',
        day: 'March 28th at 12:00pm',
        reminder: true,
    }
  ])

 //const name = 'Jude'
 //const x = false

 //Add Task
 const addTask = (task) => {
   const id = Math.floor(Math.random() * 10000) + 1
   const newTask = {id, ...task}
   setTasks([...tasks, newTask])
 }

 //Delete Task: this function will be used as prop to delete tasks, it will be passed through the Tasks component and Task component
 const deleteTask = (id) => {
   setTasks(tasks.filter((task) => task.id !== id))
 }

 //Toggle Reminder
 const toggleReminder = (id) => {
   setTasks(tasks.map((task) => task.id == id ? {...task, reminder: !task.reminder} : task))
 }

 return (
   <div className="container">
     <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/> 
     {showAddTask && <AddTask onAdd={addTask}/>}
     {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) : ('No Tasks to Show')}
   </div>
 );
}



export default App;

