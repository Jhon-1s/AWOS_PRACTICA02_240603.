//Tipos de datos en JavaScript

//Personalizacion de salidas a Consola
//const bg="linear-gradient(45deg, rgba(52, 152, 219, 1)0%, rgba (26, 188, 156, 1) 50%)";
//const style_console = `background: ${bg}; color: white; border-radius:6px; padding:4px; font-size:1.0rem;font-weight:bold`;

console.log("%c2.-Ejercicio 02: Tipos de Datos", style_console);

//1. Undifined - valor por defecto asignado a variables declaradas pero no inicializadas, no es igual a NULL.
console.log("1.- Undifined (No Definido)");
let usuarioLogeado;
var rolUsuario;
const ultimoAcceso = undefined;

/* En Java Script existe un metodo typeof() que nos devuelve el tipo de una varible
preficamente declarada o su valor*/

console.log("Valores actuales de las variables:");
console.log('usuarioLogeado = ${typeof(usuarioLogeado)}');
console.log('rolUsuario = ${typeof(rolUsuario)}');
console.log('ultimoAcceso = ${typeof(ultimoAcceso)}');

//supongamos que un usuario denominado Jonathan se ha logeado exitosamente , el valor de la variable debera
//actualizarse a su username
usuarioLogeado = "Jonathan I";

//PERO NO SOLO CAMBIARA SU VALOR SINO TAMBIEN SU TIPO DE DATO

console.log('El valor de la varible usuarioLogeado ahora es: ${usuarioLogeado}y su tipo de dato es: ${typeof(usuarioLogeado)}');

//2. BOOLEAN (TRUE/FALSE) - Verdadero o falso

var hayUsuarioLogeado;

/* Supongamos que nuestra app tendra un menu especifico para los usuarios
registrados, en el podran visualizar sus mensajes o estados de sus publicaciones
de renta o venta de propiedades, a diferencia de un usuario que entra de manera igcognita a visualizar
las propiedades*/
function validacionUsuarioLogeado(){

console.log('El valor de la variable hayUsuarioLogeado es: ${hayUsuarioLogeado}, que es de tipo: ${typeof(hay usuarioLogeado)}');

if(hayUsuarioLogeado===true){
   console.log("Dado que se ha logueado un usuario la app mostrara el menu de usuario");
}
else if(!hayUsuarioLogeado){
console.log("Dado que no hay usuario logueado la app no mostrara el menu de usuario");
}

else{
    console.log("No puedo procesar este tipo de dato, requerido de un boolean.")
}
}
//test1 : usuario logeado = true
hayUsuarioLogeado=true;
console.log("Test_1")
validacionUsuarioLogeado();
//test2 : usuario logeado = false
hayUsuarioLogeado=false;
console.log("Test_2")
validacionUsuarioLogeado();
//test1 : usuario logeado = cualquier otra cosa
hayUsuarioLogeado=52.5;
console.log("Test_3")
validacionUsuarioLogeado();

//3. NUMBER - Tipo de dato numerico, ya sea entero o decimal
/* Es importante saber que JavaScript s diferencia de otros lenguajes no difiere entre enteros y decimales
lo que para otros lenguajes de programaion lo que un ENTERO (INT), FLOTANTE(FLOAT), DECIMAL, DOUBLE(DOUBLE) para
el solo son numeros*/
let userID_Owner = 225
let priceProperty = 1250000.50
let latGPS = 20.240508
let altGPS =  -97.952881
let longGPS = 1180

console.log('Los valores de las variables declarados para los datos de la propiedad son: ID del usuario propietario: ${userID_Owner} (Tipo de dato: ${typeof(userID_Owner)}), Precio de la propiedad: ${priceProperty} (Tipo de dato: ${typeof(priceProperty)}), Latitud GPS: ${latGPS} (Tipo de dato: ${typeof(latGPS)}), Altitud GPS: ${altGPS} (Tipo de dato: ${typeof(altGPS)}), Longitud GPS: ${longGPS} (Tipo de dato: ${typeof(longGPS)})');
console.log('Los tipos de las variables declaradas para los datos de la propiedad son: ID del usuario propietario: ${typeof(userID_Owner)}, Precio de la propiedad: ${typeof(priceProperty)}, Latitud GPS: ${typeof(latGPS)}, Altitud GPS: ${typeof(altGPS)}, Longitud GPS: ${typeof(longGPS)}');