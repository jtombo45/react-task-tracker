
import React from 'react'
import Header from "./components/Header";
import Tasks from './components/Tasks';
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

 //Delete Task: this function will be used as prop to delete tasks, it will be passed through the Tasks component and Task component
 const deleteTask = (id) => {
   setTasks(tasks.filter((task) => task.id !== id))
 }

 return (
   <div className="container">
     <Header/>
     {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> : 'No Tasks to Show'}
   </div>
 );
}



export default App;

