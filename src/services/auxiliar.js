function getHexType(type) {
    switch (type) {
        case 'electric':    return "#f9cf30"
        case 'grass':       return "#74cb48"
        case 'poison':      return "#A43E9E"
        case 'water':       return "#6493eb"
        case 'fire':        return "#f57d31"
        case 'bug':         return "#a78723"
        case 'flying':      return "#A891EC"
        case 'steel':       return "#b7b9d0"
        case 'rock':        return "#b69e31"
        case 'normal':      return "#aaa67f"
        case 'ghost':       return "#70559b"
        case 'type':        return "#666666"
        case 'psychic':     return "#fb5584"
        case 'ice':         return "#9AD6DF"
        case 'dark':        return "#75574c"
        case 'fairy':       return "#E69EAC"
        case 'fighting':    return "#c12239"
        case 'ground':      return "#dec169"
        case 'dragon':      return "#7037ff"
        default:            return ""
    }
  }

  function addLeadingZeros(num, totalLength) {
    return String(num).padStart(totalLength, '0');
  }


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  export {getHexType,addLeadingZeros,capitalizeFirstLetter}