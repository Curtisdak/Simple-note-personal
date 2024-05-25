import { useEffect, useState } from "react";

import { MdDelete } from "react-icons/md";
import { BsArrowLeft } from "react-icons/bs";

import { useNavigate, useParams } from "react-router-dom";
import { TodoPageInput } from "../../components/TodoPageInput/TodoPageInput";
import Image from '../../assets/background03.jpg';
import "./todoPage.css";

export const TodoPage = () => {
  const navigate = useNavigate();
  const { id, type } = useParams();
  const [Todolist, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const storedTodoList = localStorage.getItem(id);
    if (storedTodoList) {
      setTodoList(JSON.parse(storedTodoList));
    }
  }, [id]);

  const handleInput = (ev) => {
    setNewTask(ev.target.value);
  };

  const deleteTask = (del) => {
    const filterVar = Todolist.filter((task) => task.id !== del);
    setTodoList(filterVar);
    localStorage.setItem(id, JSON.stringify(filterVar));
  };

  const addTask = () => {
    if (newTask === "") {
      return alert("Write your task");
    } else {
      const theDate = new Date();
      const localDate = theDate.toLocaleDateString();

      const theTime = new Date();
      const localTime = theTime.toLocaleTimeString();

      const theTask = {
        id: Todolist.length === 0 ? 1 : Todolist[Todolist.length - 1].id + 1,
        todo: newTask,
        date: localDate,
        time: localTime,
        complete: false,
      };

      const newTodo = [...Todolist, theTask];
      setTodoList(newTodo);
      localStorage.setItem(id, JSON.stringify(newTodo));
      setNewTask("");
    }
  };
  return (
    <div id="TodoPage">
      <div className="background-img">
        <img src={Image} alt="" />
      </div>

      <BsArrowLeft className="return-btn" onClick={() => navigate("/home")} />
      <h2 className="categoryName">
        {" "}
        Your <span> {type} </span> list{" "}
      </h2>
      <TodoPageInput
        addTask={addTask}
        handleInput={handleInput}
        newTask={newTask}
      />

      <div className="list-container">
        {Todolist.map((task) => (
          <div className="task-box" key={task.id}>
            <p>{task.todo}</p>
            <MdDelete className="btn-del" onClick={() => deleteTask(task.id)} />
          </div>
        ))}
      </div>
    </div>
  );
};
