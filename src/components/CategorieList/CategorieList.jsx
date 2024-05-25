
import { MdDelete } from "react-icons/md";
import "./categorieList.css";
import { useNavigate } from "react-router-dom";


export const CategorieList = ({ catBox, deleteCategory,  }) => {
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const navigate = useNavigate()
  return (
    <div id="catBox" >
      <h2 onClick={()=> navigate(`/listpage/${catBox.id}/${catBox.categoryName}`)}>{capitalize(catBox.categoryName)} {catBox.id} </h2>
      <p className="date-time">
        {catBox.date} {catBox.time}
      </p>
      <MdDelete
        className="delete-btn"
        onClick={() => deleteCategory(catBox.id)}
      />
    </div>
  );
};
