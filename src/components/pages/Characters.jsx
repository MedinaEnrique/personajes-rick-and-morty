
import { useEffect, useState } from "react"
import axios from 'axios';
import { Link } from "react-router-dom";
import CardCharacters from "../CardCharacters";

const Characters = () => {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character")
            .then(response => {
                setCharacters(response.data.results);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <>
            <h3 className="text-center w-100 m-0">Personajes <Link to={"/new-character"}>
            <i id="iconplus" className="fs-3 fw-bold">
              +
            </i>
          </Link></h3>
          
            <div style={{
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
                padding: "20px"
            }}>
                {
                    characters.map((character) => {
                        return (
                          <CardCharacters character={character} key ={character.id}/> 
                        )
                    })
                }
            </div>
        </>
    )
}

export default Characters