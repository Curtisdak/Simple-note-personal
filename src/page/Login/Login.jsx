import  { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Image from '../../assets/background01.jpg';
import './login.css';


export const Login = () => {
    const navigate = useNavigate();
    const[value, setvalue]= useState("");

    const handleInp = (e) =>{
        setvalue(e.target.value)
    }

    const accessFunc =()=>{
        if(value.trim()===""){
            navigate('/home')
        }
    }
  return (
    <div id="Login">


     <div className='background-img'>
      <img src={Image} alt="" />
     </div>
    
   
       <div className='input-container'>
        <h2>Welcome !</h2>
        <p className='todo-para'>This is a simple Todo App where you can create boxes to store you todo list or ANYTHING</p>
        <input type="text"  value={value} placeholder='write your name here' onChange={handleInp}/>
        <button type='button' onClick={()=> accessFunc()} >Go</button>
        </div>
    </div>
    
  )
}




