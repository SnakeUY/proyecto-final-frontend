const url = "http://localhost:8000/";

export const getPokemons = (onSuccess,onFinish) =>
    fetch(`${url}pokemons`)
    .then(response => response.json())
    .then(onSuccess)
    .finally(onFinish);

export const getPokemonById = (id,onSuccess,onFinish) =>{
  fetch(`${url}pokemons/?id=${id}`)
    .then(response => response.json())
    .then(onSuccess)
    .finally(onFinish);
}

export const getTypes = (onSuccess,onFinish) =>
    fetch(`${url}types`)
    .then(response => response.json())
    .then(onSuccess)
    .finally(onFinish);

    export const getMoves = (onSuccess,onFinish) =>
    fetch(`${url}moves`)
    .then(response => response.json())
    .then(onSuccess)
    .finally(onFinish);