
import React from 'react'
import Header from "./components/Header";

function App() {
 const name = 'Jude'
 const x = false
 return (
   <div className="container">
     <Header title='Hello'/>
   </div>
 );
}

Header.defaultProps = {
  title: 'Task Tracker',
}


export default App;

