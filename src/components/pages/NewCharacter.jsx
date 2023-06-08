import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ListContext from "../../context/ListContext";



const NewCharacter = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const { characters, setCharacters } = useContext(ListContext);
  const navigate = useNavigate();

  const addCharacter = (event) => {
    event.preventDefault();
    let newObject = { name, species, image }

    let newList = [...characters, newObject]

    setCharacters(newList)
    navigate("/");
  }
  const validateForm = () => {
    if (
      image.trim() === "" ||
      name.trim() === "" ||
      species.trim() === ""

    ) {
      return false;
    }
    return true;
  };
  return (
    <form onSubmit={addCharacter} className="col-sm-5 mx-auto border rounded-1 shadow mt-5 border-dark">
      <h3 className="text-center bg-verde-agua">New Character</h3>
      <div className="p-3">
        <div className="mb-3">
          <label htmlFor="imgUrl" className="form-label">URL image</label>
          <input type="text"
            className="form-control"
            id="imageUrl"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="characterName" className="form-label">Name</label>
          <input type="text"
            className="form-control"
            id="characterName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="specie" className="form-label">Specie</label>
          <select
            className="form-control"
            id="specie"
            value={species}
            onChange={(e) => setSpecies(e.target.value)}
          >
            <option value=""></option>
            <option value="Human">Human</option>
            <option value="Alien">Alien</option>
          </select>
        </div>
        <div className="text-center">
          <button type="submit"
            className="btn bg-verde-agua px-2"
            disabled={!validateForm()}
          >Create</button>
        </div>
      </div>
    </form>
  )
}

export default NewCharacter