const url = "http://localhost:8000/pokemons";

export const getPokemons = (onSuccess,onFinish) =>
    fetch(url)
    .then(response => response.json())
    .then(onSuccess)
    .finally(onFinish);

export const getPokemonById = (id,onSuccess,onFinish) =>{
  fetch(`${url}/?id=${id}`)
    .then(response => response.json())
    .then(onSuccess)
    .finally(onFinish);
}
