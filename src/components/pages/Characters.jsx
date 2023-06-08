
import { useContext, useEffect } from "react"
import axios from 'axios';
import { Link } from "react-router-dom";
import CardCharacters from "../CardCharacters";
import ListContext from "../../context/ListContext";

const Characters = () => {
    const { characters, setCharacters } = useContext(ListContext);


    useEffect(() => {
        if (characters === null) {

            axios.get("https://rickandmortyapi.com/api/character")
                .then(response => {
                    setCharacters(response.data.results);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }, []);
    const deleteCard = (id) => {

        const result = characters.filter(character => character.id != id);
        setCharacters(result);
    }
    return (
        <div className="container ">
            <div className=" fw-bold text-center w-100 m-0 bg-verde-agua fs-3 text-dark d-flex align-items-center justify-content-center" >
                Personajes
                <Link to={"/new-character"} className="text-decoration-none">
                    <i className=" bi bi-plus fw-bold text-dark fs-2" > </i>
                </Link></div>

            <div className="row row-cols-1 row-cols-sm-4 g-3 mt-3">
                {
                    characters && characters.map((character, index) => {
                        return (
                            <CardCharacters character={character} index={index} key={character.id} deleteCard={() => deleteCard(character.id)} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Characters