import React,{useState,createContext} from 'react'
import axios from 'axios'

const CharacterContext = createContext([]);

const CharacterInfoContext = ({children}) => {
  const [characters,setCharacters] = useState([]);

  const [currentCharacter,setCurrentCharacter] =useState({})
  const [episodes,setEpisodes] = useState([])
  

  const getEpisodes = async (ids)=>{
    const {data} = await axios.get(`https://rickandmortyapi.com/api/episode/${ids}`);
    setEpisodes(data)
  }

  const getCharacterInfo = async (id) =>{
    const characterInfoAlreadyInContext = characters.find((character) => character.id == id);
    if(characterInfoAlreadyInContext){
      setCurrentCharacter(characterInfoAlreadyInContext);
      return;
    }

    const {data} = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    
    getEpisodes(data.episode.map(episodeUrl=> {
      const urlSplitted = episodeUrl.split('/')
      return urlSplitted[urlSplitted.length -1];
    }))
    setCharacters([...characters,data]);
    setCurrentCharacter(data);
  }

  const values = {
    currentCharacter,
    getCharacterInfo,
    episodes
  }

  return (
    <CharacterContext.Provider value={values}>
      {children}
    </CharacterContext.Provider>
  )
}

export default CharacterInfoContext
export {
  // useCharacterContext,
  CharacterContext
}