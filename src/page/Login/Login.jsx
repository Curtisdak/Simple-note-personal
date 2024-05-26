
import { useNavigate } from 'react-router-dom';
import Image from '../../assets/background01.jpg';
import { useContext } from 'react';
import { UserNameContext } from '../../Context/Context';
import './login.css';


export const Login = () => {
    const navigate = useNavigate();
    const{value, setValue}= useContext(UserNameContext);

    const handleInp = (e) =>{
        setValue(e.target.value);
        // console.log(e.target.value);
    }

    const accessFunc =()=>{
        if(value){
          setValue(value);
            navigate('/home')     
        }else{
          navigate('/')
          return alert('Fill the box to get Access')
        }
    }
  return (
    <div id="Login">


     <div className='background-img'>
      <img src={Image} alt="" />
     </div> 
       <div className='input-container'>
        <h2>Welcome  {value} !</h2>
        <p className='todo-para'>This is a simple Todo App where you can create boxes to store you todo list or ANYTHING</p>
        <input type="text"  value={value} placeholder='write your name here' onInput={handleInp}/>
        <button type='button' onClick={accessFunc} onKeyDown={(e)=> e.key==='Enter'? accessFunc():"null"} >Go</button>
        </div>
    </div>
    
  )
}




