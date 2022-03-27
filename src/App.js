
import React from 'react'
import Header from "./components/Header";
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
//hook called useState
import { useState } from 'react'


function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Get a hair cut',
        day: 'March 26th at 10am',
        reminder: false,
    },
    {
        id: 2,
        text: 'Watch a movie',
        day: 'March 25th at 10pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Create the script of a Youtube video',
        day: 'March 27th at 11am',
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
     <Header/>
     <AddTask onAdd={addTask}/>
     {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks to Show'}
   </div>
 );
}



export default App;

