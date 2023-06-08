import { useContext, useEffect, useState } from "react";
import ListContext from "../../context/ListContext";
import { Navigate, useNavigate } from "react-router-dom";



const EditCharacter = () => {
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [species, setSpecies] = useState("");
    const { characters, setCharacters, indexEdit } = useContext(ListContext);
    const navigate = useNavigate();
    useEffect(() => {

        if (characters) {

            setImage(characters[indexEdit].image)
            setName(characters[indexEdit].name)
            setSpecies(characters[indexEdit].species)
        }
    }, [characters])

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
    const editCharacter = (event) => {
        event.preventDefault();
        let data = { ...characters[indexEdit], name, species, image }

        let newList = [...characters]

        newList.splice(indexEdit, 1, data)
        setCharacters(newList)
        navigate("/");
    }

    return (
        <form onSubmit={editCharacter} className="col-sm-5 mx-auto border rounded-1 shadow mt-5 border-success">
            <h3 className="text-center text-success">Edit Character</h3>
            <div className="mb-3">
                <label htmlFor="imgUrl" className="form-label">New URL image</label>
                <input type="text"
                    className="form-control"
                    id="image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="characterName" className="form-label">New Name</label>
                <input type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="species" className="form-label">Specie</label>
                <select
                    className="form-control"
                    id="species"
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
                    className="btn btn-success px-2"
                    disabled={!validateForm()}
                >Confirm Changes</button>
            </div>
        </form>
    )
}

export default EditCharacter