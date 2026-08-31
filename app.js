 // importa o módulo que capturar e processa fluxos de texto de entrada e saida
const readline = require('readline');
async function buscarPokemon(nome) {

    

    try{

        
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`);
        if (!resposta.ok) {
            console.log("\nPokédex: Pokémon não encontrado.");
            return;
        }
        
        const dados = await resposta.json();
        
        //busca os tipos do pokemon 
        const tipos = dados.types.map(item => item.type.name).join(", ");
        
        //busca as habilidades do pokemon
        const habilidades = dados.abilities.map(item => item.ability.name).join(", ");
        
        //busca o movimento do pokemon 
        const movimentos = dados.moves.slice(0, 4).map(item => item.move.name).join(", ");
        
        console.log(("\nID:"), dados.id);
        console.log(("Nome:"), dados.name);
        console.log(("Tipo(s):"), tipos);
        console.log(("Habilidade(s): "), habilidades);
        console.log(("Movimentos:"), movimentos);
        console.log(("Altura:"), dados.height);
        console.log(("Peso:"), dados.weight);
        
        
    } catch (erro) {
        console.log("\nPokédex: Falha ao se comunicar com a API", erro.message);
    }
}

//cria uma ponte de comunicação
const rl = readline.createInterface({
    input: process.stdin,// é tipo o scanf do C
    output: process.stdout// é tipo o printf do C
});


        function iniciarMenu(){

            console.log("Pokédex: Insira o nome do pokémon para buscar suas estatísticas ou 'sair' para encerrar: ");
            
            rl.question("", async(nome) => {
   

                const nomeFormatado = nome.trim().toLowerCase();
                
                if (nomeFormatado === 'sair'){
                    console.log("Encerrando a Pokédex. Até mais!");
                    rl.close();
                    return
                }


                if(!nome) {
        console.log("Pokédex: Por favor digite o ID ou o nome do Pokémon.");
        return;
    }

                await buscarPokemon(nomeFormatado);       
                iniciarMenu()
            })

            
        }

        iniciarMenu()