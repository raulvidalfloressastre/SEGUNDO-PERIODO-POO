// Importación/herencia de clases.

import { Autor } from "./Autor";
import { copia } from "./Copia";
import { Libro } from "./Libro";
import { Lector } from "./Lector";

//Autor

const Raul=new Autor ("Raul", "Mexicano", "11/09/06", "Las Aventuras de Juan", "Aventura", "Santillo", "2010")
console.log(Raul);

//Libros

const Chincho=new Libro("Juan al ataque", "Aventuras", "Saltillo", "2005")
console.log(Chincho);

const Jordan=new Libro("Casas raras", "Arquitectura", "Armansa", "2012")
console.log(Jordan);

//Lectores

const Gaspar=new Lector ("2", "Gaspar Flores", "2741302029", "Abasolo y aldama", "34")
console.log(Gaspar)

const Jenny=new Lector ("1", "Jenny Sastre", "2741513456", "Iturbide y San Juan", "23")
console.log(Jenny)

//Copias añadidas

const Copias2=new copia ("23/10/20")
Copias2.añadircopia("3", Chincho, Gaspar)

Copias2.añadircopia("4", Jordan,Jenny)
console.log (Copias2.Listacopias());