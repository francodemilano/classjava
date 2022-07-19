// LISTA IMPRIMIBLE PARA EL SUPERMERCADO
let entrada = prompt("Ingrese producto y cantidad, Ingrese 0 para terminar la lista");
let ingresados = "";
while (entrada != 0 ){
    ingresados += entrada +"\n";
    entrada = prompt ("Ingrese producto y cantidad. Ingrese 0 para terminar la lista")
}
alert (ingresados);