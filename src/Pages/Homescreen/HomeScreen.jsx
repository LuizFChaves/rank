import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

const HomeScreen = () => {
    const [characters,setCharacters] = useState([]);
    const [hasNextPage,setHasNextPage] = useState(false);
    const [currentPage,setCurrentPage] = useState(1);
    const [nameFilter,setNameFilter] = useState('');
  
    const getCharacters = async () =>{
      const {data} = await axios.get(`https://rickandmortyapi.com/api/character?name=${nameFilter}&page=${currentPage}`);
      setHasNextPage(!!data.info.next);
      setCharacters([...data.results]);
    }
  
    useEffect(()=>{
      getCharacters();
    },[nameFilter,currentPage])
  
    useEffect(()=>{
      setCurrentPage(1)
    },[nameFilter])
  
    return (
      <div className="App">
        <input value={nameFilter} onChange={(e)=>setNameFilter(e.target.value)} />
        <button disabled={currentPage === 1} onClick={()=>{setCurrentPage(currentPage-1)}}>Voltar</button>
        <button disabled={!hasNextPage} onClick={()=>{setCurrentPage(currentPage+1)}}>Avançar</button>

        {characters.map(character => (
          <Link to={`/${character.id}`} key={character.id}>
            <h1>{character.name}</h1>
            <img src={character.image} alt=""/>
          </Link>
        ))}
      </div>
    );
}

export default HomeScreen