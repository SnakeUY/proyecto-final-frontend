import Navbar from '../../components/Navbar';
import { FilterPokemons} from '../../components/PokemonBank';
const Home =({changeOrder,orderById,filterBySearch,filteredList,pokemons,cantidadpokemon})=> {

return (
    <>
    <Navbar
    change={changeOrder}
    stateChange={orderById}
    search={filterBySearch}
    />
    <FilterPokemons
    cantidadpokemon={cantidadpokemon}
    pokemon={filteredList}
    />
    </>
  );
}

export default Home;