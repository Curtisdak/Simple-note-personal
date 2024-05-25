
import { IoMdAddCircleOutline } from "react-icons/io";
// import { FaSearch } from "react-icons/fa";

export const Input = ({newCat, handleInput, addCategory }) => {
  return (
    <div id='input'>
        <input type="text" placeholder='add or search for category'value={newCat}required onChange={handleInput} onKeyDown={(e) => {e.key==="Enter"&& addCategory() }}/>
        <IoMdAddCircleOutline  className='btn' type='button' onClick={()=> newCat!==""&& addCategory()}/>
       {/* <FaSearch type='button' className='btn02' onClick={searchCategory}/> */}
    </div>
  )
}
