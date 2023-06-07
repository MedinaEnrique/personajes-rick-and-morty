import { useEffect, useState } from "react";



const EditCharacter = () => {
    const[image,setimage]= useState("");
    const[name, setName]=useState("");
    const[specie,setSpecie]=useState("");

    useEffect(() => {
		if (character) {
			setimage(character.image)
			setName(character.name)
            setSpecie(character.specie)	
		}
	}, [character])
  return (
    <form className="col-sm-5 mx-auto border rounded-1 shadow mt-5 border-success">
    <h3 className="text-center text-success">Edit Character</h3>
    <div className="mb-3">
      <label htmlFor="imgUrl" className="form-label">New URL image</label>
      <input type="text" className="form-control" id="imageUrl" />
    </div>
    <div className="mb-3">
      <label htmlFor="characterName" className="form-label">New Name</label>
      <input type="text" className="form-control" id="characterName" />
    </div>
    <div className="mb-3">
      <label htmlFor="specie" className="form-label">Specie</label>
      <select
        className="form-control"
        id="specie"
      >
        <option value=""></option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
      </select>
    </div>
    <div className="text-center">
      <button type="submit" className="btn btn-success px-2">Confirm Changes</button>
    </div>
  </form>
  )
}

export default EditCharacter