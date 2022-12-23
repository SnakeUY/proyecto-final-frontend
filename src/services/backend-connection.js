const url = "http://localhost:8000/";

export const getPokemons = () =>{
    return fetch(`${url}pokemons`)
    .then(response => response.json())}
    //.then(onSuccess)
    //.finally(onFinish);

export const getPokemonById = (id,token) =>{
  return fetch(`${url}pokemons/${id}`)
    .then(response => response.json())
    //.then(onSuccess)
    //.finally(onFinish);
    
}

export const getMyPokemons = (email,token) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json", "auth-token": token},
    body: JSON.stringify({email: email}),
  };
  
    return fetch(`${url}users/pokedex/`,requestOptions)
    .then(response => response.json())
    //.then(onSuccess)
    //.finally(onFinish);
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

export const getUniqueTypes = (onSuccess,onFinish) =>
    fetch(`${url}types/unique`)
    .then(response => response.json())
    .then(onSuccess)
    .finally(onFinish);

export const addPokemon = async (newPoke,token,tpyeOneArr,tpyeTwoArr,moveOneArr,moveTwoArr) => {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json", "auth-token": token},
        body: JSON.stringify({pokemon: newPoke}),
      };
      fetch("http://localhost:8000/pokemons/create", requestOptions)
        .then((data) => {
          if(data){
            insertType(tpyeOneArr,token)
            insertType(tpyeTwoArr,token)
            insertMove(moveOneArr,token)
            insertMove(moveTwoArr,token)
          }
        })
        .catch(function (err) {
          alert("Ha ocurrido un error.");
        })
    }

    export const addMoney = async (email,money,token) => {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json", "auth-token": token},
        body: JSON.stringify({email: email, money: money}),
      };
      fetch("http://localhost:8000/users/add-money", requestOptions)
        .then((data) => {
      
        })
        .catch(function (err) {
          alert("Ha ocurrido un error.");
        })
    }
  
    export const buyPoke = async (id,email,token) => {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json", "auth-token": token},
        body: JSON.stringify({email: email, id: id}),
      };
      fetch("http://localhost:8000/pokedex", requestOptions)
        .then((data) => {
          return data
        })
        .catch(function (err) {
          alert("Ha ocurrido un error.");
        })
    }

export const insertMove = async (move,token) => {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json", "auth-token": token},
        body: JSON.stringify({move: move}),
      };
      fetch("http://localhost:8000/moves/insert", requestOptions)
        .then(() => {
   
        })
        .catch(function (err) {
          alert("Ha ocurrido un error.");
        })
    }
export const insertType = async (type,token) => {

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json", "auth-token": token},
        body: JSON.stringify({type: type}),
      };
      fetch("http://localhost:8000/types/insert", requestOptions)
        .then((data) => {
          return data
        })
        .catch(function (err) {
          alert("Ha ocurrido un error.");
        })
    }