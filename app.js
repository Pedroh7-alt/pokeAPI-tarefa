async function buscarPokemon() {

const resposta = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
const dados = await resposta.json();

console.log(dados.name)
console.log(dados.id)
console.log(dados.height)
console.log(dados.weight)
console.log(dados.types)
    
}

buscarPokemon();
