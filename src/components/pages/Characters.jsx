
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import CardCharacters from "../CardCharacters";
import ListContext from "../../context/ListContext";


const Characters = () => {
    const { characters, setCharacters } = useContext(ListContext);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 4; // Número de personajes por página


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
    }, [characters, setCharacters]);
    const offset = currentPage * itemsPerPage;
    const currentPageData = characters?.slice(offset, offset + itemsPerPage);
    const handlePageClick = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };


    const deleteCard = (id) => {

        const result = characters.filter(character => character.id != id);
        setCharacters(result);
    }
    return (
        <div className="container">
            <div className="fw-bold text-center w-100 m-0 bg-verde-agua fs-3 text-dark d-flex align-items-center justify-content-center">
                Personajes
                <Link to={"/new-character"} className="text-decoration-none">
                    <i className="bi bi-plus fw-bold text-dark fs-2"></i>
                </Link>
            </div>

            <div className="items row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3 mt-3">
                {currentPageData &&
                    currentPageData.map((character, index) => (
                        <CardCharacters
                            character={character}
                            index={index}
                            key={character.id}
                            deleteCard={() => deleteCard(character.id)}
                        />
                    ))}
            </div>

            <div className="d-flex justify-content-center">

                {/* Paginación */}
                <ReactPaginate
                    // previousLabel={"<"}
                    // nextLabel={">"}
                    // breakLabel={"..."}
                    // pageCount={Math.ceil(characters?.length / itemsPerPage)}
                    // marginPagesDisplayed={2}
                    // pageRangeDisplayed={5}
                    // onPageChange={handlePageClick}
                    // containerClassName={"pagination"}
                    // activeClassName={"active"}
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={Math.ceil(characters?.length / itemsPerPage)}
                    previousLabel="<"
                    pageClassName="page-item"
                    pageLinkClassName="page-link text-dark fw-bold"
                    previousClassName="page-item"
                    previousLinkClassName="page-link text-dark fw-bold"
                    nextClassName="page-item"
                    nextLinkClassName="page-link text-dark fw-bold"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link text-dark fw-bold"
                    containerClassName="pagination"
                    activeClassName="active-page"
                    renderOnZeroPageCount={null}
                />
            </div>

        </div>
    );

}

export default Characters