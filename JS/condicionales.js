
//if (condition ){
// Si es verdadera

//} else {

//si no se cumple
//}

//let nota =5;
//if (nota >5 ) {
    //alert ("Aprobaste")
//} else {
    //alerte ("Reprobaste")
//}

//if (condition){


//}else if (condition2) {


//}
//else {

//}

//let nota = prompt ( "Ingresa tu nota: ");

//if (nota <=5 ) {
    //alert ("Aprobaste")
   //} else if ( nota == 5) {
    //alert ("Más o menos")
    //} else if (nota==6){
    //alert ("Raspando")
    //} else if (nota==7 || nota==8) {
    //alert ("Excelente")
    //} else {
    //alert ("Has sacado un sobresaliente")
//}

let nota = prompt ("Ingresa tu nota: ");
switch (true) {
case (nota <=5 ):
    alert ("ReAprobaste")
break;
case (nota === 5 ):
    alert ("Más o menos")
break;
case (nota === 6 ):
    alert ("Raspando")
break;
case (nota == 7 || nota == 8):
    alert ("Más o menos")
break;

default: 
alert ("Has sacado un sobresaliente")
}