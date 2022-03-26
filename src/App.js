
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

 const name = 'Jude'
 const x = false

 return (
   <div className="container">
     <Header/>
     <Tasks tasks={tasks}/>
   </div>
 );
}



export default App;

