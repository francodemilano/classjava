// console.log("segunda forma de crear codigo")
// //forma de declarar una variable
// //primera forma de declarar variable no recomendable o mala practica

// var perro = "Pipa"
// console.log(perro)
// //segunda forma declarar variable
// let perro2 = "Milo"
// console.log(perro2)
// //declare nota
// let nota
// //asignamos un valor un dato u otra variable
// nota = 9
// let mitad = nota/2
// console.log(nota)
// console.log(mitad)

//Tipo de datos 
// string o cadena comillas simples o dobles
// let datoCadena = "asda"
// console.log(datoCadena)
// //Numerico
// let numero = 123
// console.log(numero)
// //Boolean verdadero o falso
// let Boolean = true
// boolean = false
// console.log(boolean)
// //constante - Tercera forma de guardar info - no se puede reasignar valor
// const profesion = "abogado"
// console.log(profesion)


//Promt - forma de ingresar datos
//let nombreMascota = prompt ("Ingrese el nombre de su mascota")
//console.log("El nombre de su mascota es "+nombreMascota+". Gracias por traerla a nuestra veterinaria")
//alert(`El nombre de su mascota es ${nombreMascota}`)


//let nota1 = parseInt(prompt("ingrese primer nota"))
//let nota2 = parseInt(prompt ("Ingrese segunda nota"))
//console.log (nota1+nota2)
//NaN = Not a Number quiere decir que hacemos operaciones enrte datos q no son numericos


//Calcule el promedio de gol de un jugador a partir del ingreso de la cantidad de goles y cantidad de partidos
//let nombreJugador =prompt("Ingrese el nombre del jugador")
//let cantGoles =parseInt(prompt("ingrese cantidad de goles"))
//let cantPartidos =parseInt(prompt("ingrese cantidad de partidos"))
//let promedio = cantGoles/cantPartidos 
//alert(`El promedio de gol de ${nombreJugador} es ${promedio}`)
// estructura if basica

//let preguntaEdad = prompt("Usted es mayor de edad??")
//dos iguales == compara se llama equivalencia,  un igual "=" asigna
//if (preguntaEdad == "si"){
//    console.log("Usted puede acceder al contenido")

// let color = "azul"
// if (color == "rojo"){
//     console.log("El color es rojo")
// }
// else if(color =="azul"){
//     console.log ("El color es azul")
// }
// else if(color =="amarillo"){
//     console.log ("El color es amarillo")
// }
// else{
//     console.log ("Este no es un color primario")
// }

// let Numero = 1
// let mayor5 = (Numero > 5)
// console.log(mayor5)
// if(mayor5){
//     console.log("el numero es mayor a 5");
// }
// else{
//     console.log("el nro no es mayor a 5");
// }

// CLASE 3 CICLOS
//repeti esta instruccion x veces

// let numTabla = parseInt(prompt("Ingrese el nro que desea saber la tabla de multiplicar"))
// for(let i =0; i <= 10; i=i+1){
//     console.log()
// }
//realizar mediante ciclo for. Un programa que pida tres notas al usuario y calcule total y promedio

//let preguntaNota = prompt("Ingrese su nota")

//for (let line = "1"; line.length < 8; line += "1")
  //console.log(line);

//let entrada = prompt ("INGRESA UN NOMBRE")
//let nombre = "Bart"
//if(entrada == nombre){
 // alert("Yo fui");}
//else{ alert ("YO NO FUI")}

//let letra = prompt("presione una tecla");
//if((letra=="y") || (letra=="Y")){
 // alert("correcto")}
//else{alert("Error")}

/*let nro = prompt("ingrese un numero del 1 al 4")
if(nro==1){alert("Elegiste a Homero")}
else if(nro==2){alert("Elegiste a Marge")}
else if(nro==3){alert("Elegiste a Bart")}
else if(nro==4){alert("Elegiste a Liza")}
else{alert("ERROR!!!")}*/

/* shift ALT A */
/* let entrada4 = parseFloat(prompt("INGRESAR UN NUMERO"));
if ((entrada4 >= 0) && (entrada4 <= 1000)) {
    alert("PRESUPUESTO BAJO");
} else if ((entrada4 >= 1001) && (entrada4 <= 3000)) {
    alert("PRESUPUESTO MEDIO");
} else if (entrada4 > 3000) {
    alert("PRESUPUESTO ALTO");
}
else {
    alert("ERROR");
} */
/* 
let Nombre="Homero"
let Nomnre2="Jay"
let Apellido="Simpson"
console.log(Nombre);
console.log(Nomnre2);
console.log(Apellido); */
/* const ciudad ="Cordoba"
const ciudad2 = "Nono"
const ciudad3= "Litin"
const ciudad4="buenosAires"
console.log(ciudad);
console.log(ciudad2);
console.log(ciudad3);
console.log(ciudad4); */

/* let persona    = "BART SIMPSON";
let domicilio  = "742 EVERGREEN";
let pais       = "USA";
let nacimiento = "02-11-70";
const codigo   = "B47U89RE243";
let carnet = "Codigo: "+codigo+" "+
             "Nombre: "+persona+" "+
             "Pais: "+pais+" "+
             "Nacimiento: "+nacimiento+" "+
             "Domicilio: "+domicilio;
console.log(carnet); */

let entrada    = prompt("INGRESAR NOMBRE");
let ingresados = '';
while (entrada != 'Voldemort') {
    ingresados += entrada +"\n";
    entrada     = prompt("INGRESAR NOMBRE");
}
alert(ingresados);

