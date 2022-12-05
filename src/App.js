import './App.css';
import {useEffect, useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokemon from './pages/pokemon';
import Home from './pages/principal';
import { pokemonList } from './services/pokemons';
function App() {
  const [state,setState] = useState({
    pokemonbeta:[],
  })
  const [filteredList, setFilteredList] = useState([]);
  const [orderById,setOrderById] = useState (true)
  const [searchValue,setSeachValue] = useState('')

  let cantidadpokemon = 50

  useEffect(()=>{
    fetchKantoPokemon()
  },[])

  useEffect(()=>{
    setFilteredList(Object.assign([],orderById ? state.pokemonbeta.sort((a,b)=>a.id-b.id) : state.pokemonbeta.sort(function(a,b){
      if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      return 0;
  })))
},[orderById,state.pokemonbeta])



async function fetchKantoPokemon(){
  let aux = []
  for(let i= 1;i<=cantidadpokemon;i++){
    await fetch("https://pokeapi.co/api/v2/pokemon/"+i)
    .then(response => response.json())
    .then(function(pokeData){
      console.log(pokeData)
      aux.push(
          { 
              id: pokeData.id,  
              name: pokeData.name,
              types: pokeData.types.map((type)=>type.type.name),
              weight: (pokeData.weight/10),  
              height: (pokeData.height/10), 
              moves: pokeData.moves.slice(0,2).map((move)=>move.move.name),        
              HP: pokeData.stats[0].base_stat, ATK: pokeData.stats[1].base_stat, DEF: pokeData.stats[2].base_stat, SATK: pokeData.stats[3].base_stat, SDEF: pokeData.stats[4].base_stat, SPD: pokeData.stats[5].base_stat
          }
      )
    })
  }
    setState({...state, pokemonbeta: aux})
 }



  return (
    <BrowserRouter>
      <Routes>
        <Route path= "/" element={<Home
        changeOrder= {setOrderById}
        orderById= {orderById}
        filterBySearch= {setSeachValue}
        filteredList= {filteredList
          .filter((item) =>  item.name.toLowerCase().includes(searchValue.toLowerCase())
        )}
        cantidadpokemon={cantidadpokemon}
        />}></Route>

      <Route path= "/:id" element={<Pokemon
      pokemons={state.pokemonbeta.sort((a,b)=>a.id-b.id)}
      />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
