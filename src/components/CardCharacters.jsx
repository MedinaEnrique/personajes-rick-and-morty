import { useContext } from "react";
import ListContext from "../context/ListContext";
import { useNavigate } from "react-router-dom";

const CardCharacters = ({ character, deleteCard, index }) => {

  const { image, name, species } = character;
  const { setIndexEdit } = useContext(ListContext);
  const navigate = useNavigate();
  const editCharacter = () => {
    setIndexEdit(index);
    navigate("/edit-character");
  }

  return (
    <>
      <div className="col d-flex align-items-stretch">
        <div className="card w-100 border-dark bg-verde-agua">
          <img src={image} height={170} className="card-img-top" alt="character-image" />
          <div className="card-body">
            <h3 className="card-title">{name}</h3>
            <h5>{species}</h5>
          </div>
            <div className="text-center card-footer">
        
              <i className="bi bi-pencil fs-4 me-2 text-white" onClick={editCharacter}></i>
              <i className="bi bi-trash fs-4 text-white" onClick={deleteCard}></i>
            </div>
        </div>
      </div>
    </>
  );
};

export default CardCharacters;
