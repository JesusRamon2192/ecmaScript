//MatchAll sirve para buscar todas las COINCIDENCIAS de una expresión regular enuna cadena de texto y devuelve un iterador con los resultados. La respuesta contiene las dos coincidencias, el incide donde se encuentra yelinput original.

const regex = /\b(Apple)+\b/g;

const fruit = 'Apple, Banana, Kiwi, Apple, Orange, Platano, Banana, Apple';

for (const match of fruit.matchAll(regex)){
    console.log(match);
}