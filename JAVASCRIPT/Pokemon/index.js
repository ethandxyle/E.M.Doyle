const pokemon=require("pokemon")
//
//
// const pokeDex=[pokemon.random(),pokemon.random(),pokemon.random(),pokemon.random(),pokemon.random()]
// console.log(pokeDex)

//for each pokemon,create a random attack number between 10-100
//need a container to hold pokemon
//for each pokemon name and attack
//pokemon={name: value, attack: value}
//we need to update each pokemon with new attack
//attack needs to be random
const pokeDex=[pokemon.random(),pokemon.random(),pokemon.random(),pokemon.random(),pokemon.random()]

for (let i=number =0; i<5; i++){
    let character={name: value, attack: value}={name:pokemon.random(), attack: Math.floor(Math.random()*100)+1}
pokeDex[i]=character
}
console.log(pokeDex)
