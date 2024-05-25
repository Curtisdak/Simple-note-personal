
import '/src/components/Input/input.css';
import { IoMdAddCircleOutline } from "react-icons/io";

export const TodoPageInput = ({newTask, addTask, handleInput}) => {
  return (
    <div id='input'>
        <input type="text" placeholder='add your task' onChange={handleInput} value={newTask} onKeyDown={(e)=> e.key==="Enter"&& addTask()} />
        <IoMdAddCircleOutline className='btn' onClick={addTask}/>
    </div>
  )
}
