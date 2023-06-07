

CardCharacters();
const CardCharacters = ({character}) => {
  
    const {image,name,species} = character
  
  return (
    <div style={{ width: 250 }} >
                                <div className="card d-flex">
                                    <img src={image} height={170} className="card-img-top" alt="character-image"></img>
                                    <div className="card-body">
                                        <h3 className="card-title">{name}</h3>
                                        <h5>{species}</h5>
                                    </div>
                                </div>
                            </div>
  )
}

export default CardCharacters