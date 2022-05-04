import React,{useEffect,useContext} from 'react'

import { useParams,Link } from 'react-router-dom'
import {CharacterContext} from './../../Contexts/CharacterInfoContext'

const CharacterInfo = () => {
  const {id} = useParams();
  const {
    currentCharacter = {},
    getCharacterInfo,
    episodes
  } = useContext(CharacterContext);

  useEffect(()=>{
    getCharacterInfo(id)
  },[])
  
  
  return (
    <div>
      <Link to="/">Voltar</Link>
      <br/>
      <br/>
      <img alt="user profile" src={currentCharacter.image}/>
      <p>nome: {currentCharacter.name} </p>
      <p>specie: {currentCharacter.species}</p>
      <p>gender: {currentCharacter.gender}</p>
      <p>origin name: {currentCharacter.origin?.name}</p>
      <p>location name: {currentCharacter.location?.name}</p>
      <p>created: {currentCharacter.created}</p>

      {/* 
      data que foi ar
      nome do episodio
      numero do episodio */}
      <table>
      <tr>
        <th>Data do episodio</th>
        <th>Nome do episodio</th>
        <th>Numero do episodio</th>
      </tr>
      {episodes.map(episode=>(
        <tr>
          <td>{episode.air_date}</td>
          <td>{episode.name}</td>
          <td>{episode.episode}</td>
        </tr>
      ))}
      </table>
    </div>
  )
}

export default CharacterInfo