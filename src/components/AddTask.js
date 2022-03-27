import { useState } from "react"

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        //prevents the form from being submitted on the page
        e.preventDefault()

        //If no task was entered through the form
        if(!text){
            alert('Pleat add a task')
            return
        }
        //If task was entered through the form
        onAdd({text, day, reminder})
        //Resetting the form
        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input type='text' placeholder='Add Day & Time' value={day} onChange={(e) => setDay(e.target.value)}/>
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input 
                    type='checkbox' 
                    checked={reminder}
                    value={text} 
                    onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>
            
            <input type='submit' value='Save Task' className='btn btn-block'/>
    </form>
  )
}

export default AddTask