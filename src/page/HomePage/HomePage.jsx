import { useEffect, useState } from "react";
import { Input } from "../../components/Input/Input";
import { CategorieList } from "../../components/CategorieList/CategorieList";
import Image from '../../assets/background02.jpg';
import "./homePage.css";

export const HomePage = () => {
  const [Category, setCategory] = useState(() => {
    const saveData = localStorage.getItem("myData");
    return saveData ? JSON.parse(saveData) : [];
  });
  //input
  const [newCat, setNewCat] = useState();

  const handleInput = (ev) => {
    setNewCat(ev.target.value);
  };

  const addCategory = () => {
    if (newCat === "") {
      return alert("Write your title");
    } else {
      let theDate = new Date();
      const localDate = theDate.toLocaleDateString();

      let theTime = new Date();
      const localTime = theTime.toLocaleTimeString();

      const theCategory = {
        id: Category.length === 0 ? 1 : Category[Category.length - 1].id + 1,
        categoryName: newCat,
        date: localDate,
        time: localTime,
        completed:false,
      };
      setCategory([...Category, theCategory]);
      setNewCat("");
    }
  };

  const deleteCategory = (id) => {
    setCategory(Category.filter((cate) => cate.id !== id));
  };
// const deleteAll = ()=>{
  // setCategory(Category.filter((cate) => cate.id !== cate.id));
// }
  useEffect(() => {
    localStorage.setItem("myData", JSON.stringify(Category));
  }, [Category]);

  return (
    <div id="HomePage">

    <div className='background-img'>
    <img src={Image} alt="" />
    </div>

      <h2 className='userName'> Welcome <span>   </span> </h2>

      <Input
        newCat={newCat}
        handleInput={handleInput}
        addCategory={addCategory}
        searchCategory={""}
      />

      <div className="Category-Container">
        {Category.map((cate) => (
          <CategorieList
            key={cate.id}
            catBox={cate}
            deleteCategory={deleteCategory}
            newCat={newCat}
          />
        ))}
      </div>
    </div>
    
  );
};
