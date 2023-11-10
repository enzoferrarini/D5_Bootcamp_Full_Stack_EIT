console.log("** EJERCICIO 1: **");
console.log("******************");

//definición de variables
//para ver resultados modificar los valores asignados.
//las variables se usan en los 3 ejercicios.
let cantidadDeGatos = 11;
let cantidadDePasos = 8;
let pasosEmoji="";


for(let index=1; index<=cantidadDeGatos;index++)
{   
    //Utilizo la funcion resto (%) para ver si es multiplo de 3.
    //Por ej. si el resultado es 0 es multiplo de 3
    let resto=index % 3;
    switch(resto) {
        case 0:
            console.log(`Gato #${index}: 😹`);
            break;
        case 1:
            console.log(`Gato #${index}: 😺`);
          break;
        case 2:
            console.log(`Gato #${index}: 😸`);
            break;         
      }
}


console.log("** EJERCICIO 2: **");
console.log("******************");

//OPCION de Resolucion 1 - EJECUTA N VECES EL STRING DE HUELLAS
console.log("** OPCION 1 **");
for(let indexGatos=1; indexGatos<=cantidadDeGatos;indexGatos++)
{   
    pasosEmoji="";
    for(let indexPasos=1; indexPasos<=cantidadDePasos;indexPasos++)
    {
        pasosEmoji=pasosEmoji+"🐾";
    }    
    console.log(`Gato #${indexGatos}: 🐈 ${pasosEmoji}`);   
}

//OPCION de Resolucion 2 - EJECUTA 1 VEZ EL STRING DE HUELLAS (AHORRA PROCESO)
console.log("** OPCION 2 **");
pasosEmoji="";
for(let indexPasos=1; indexPasos<=cantidadDePasos;indexPasos++)
{
    pasosEmoji=pasosEmoji+"🐾";
}    

for(let indexGatos=1; indexGatos<=cantidadDeGatos;indexGatos++)
{     
    console.log(`Gato #${indexGatos}: 🐈 ${pasosEmoji}`);   
}

console.log("** EJERCICIO 3: **");
console.log("******************");

for(let indexGatos=1; indexGatos<=cantidadDeGatos;indexGatos++)
{   
    let resto=indexGatos % 2;
    switch(resto) {
        case 0:
            console.log(`Gato #${indexGatos}: 🐈‍⬛ ${pasosEmoji}`);   
            break;
        case 1:
            console.log(`Gato #${indexGatos}: 🐈 ${pasosEmoji}`);
            break;
    }

}
