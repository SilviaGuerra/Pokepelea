function Pokemon(nombre, color, puntosAtaque){
    this.nombre = nombre;
    this.color = color;
    this.nivelDeAmistad = 0;
    this.vida = 100;
    this.puntosAtaque = puntosAtaque;

    this.saludar = function(){
      console.log("Hola, me llamo + this.nombre")
    };

    this.pelear = function(pokemonObjeto){
      pokemonObjeto.vida = pokemonObjeto.vida - this.puntosAtaque
    };

    this.beber = function(tipoAlcohol){
      if(tipoAlcohol == "chelas"){
        this.nivelDeAmistad += 80;
      }else if(tipoAlcohol == "vodka"){
        this.nivelDeAmistad -= 10;
      }
    };
}

var pokemones = [];

function crearPokemon(){
  var nombrePokemon = document.getElementById("nombrePokemon");
  var colorPokemon = document.getElementById("colorPokemon");
  var puntosAtaque = document.getElementById("puntosAtaque");

  var pokemonCreado = new Pokemon(nombrePokemon.value,
                                  colorPokemon.value,
                                  puntosAtaque.value)

  pokemones.push(pokemonCreado);
  seleccionarPokemon1();
};

function seleccionarPokemon1(){
  var pokemon1 = document.getElementById("nombrePokemon").value;
  var opcion1 = document.createElement("option");
  opcion1.innerHTML = pokemon1;
  document.getElementById("seleccion").appendChild(opcion1);

}
