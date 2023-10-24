// ####### TIPO DE VARIABLES 
// const para constantes
const pi = 3.1416;
const pul = 2.54;
// var para variables globales
var cant_days = 10;
var name      = "Heidy Camargo";
//let para variables de bloque o locales
let count = 5 ;
let i     = 0;

//######### FORMAS DE IMPRESION O SALIDA EN PANTALLA
// alert
// alert(name);
// console
console.log(cant_days);
console.log("10");
// body - pantalla
document.write(name)
document.getElementById("text_one").innerHTML = "<h1>Heidy Camargo</h1>"
document.getElementById("text_two").innerText = "<h1>Heidy Camargo</h1>"

//librerias
Swal.fire({
    icon: 'succes',
    title: 'Heidy Camargo',
    text: 'Estudiante de la ufpso',
    footer: name,
    showConfirmButton: false,
    timer: 2000

  })

  //######## TIPO DE DATOS
  // numericos
  let number_one = 10;
  let number_two = 5.5;
  // string
  let text = "soy un texto"
  // booleanos
  let boolean = true; //false
  // array
  let array_num = [1,2,3,4];
  let array_tex = ["lunes","martes","miercoles","jueves","viernes"]
  let array_mix = [1.5, "a", 10, "b"];
  let array_mul = [
      {name: "wilder", lasta_name: "duarte", age:31},
      {name: "anyi", lasta_name: "nuñez", age:25},
      {name: "heidy", lasta_name: "camargo", age:19},
      {name: "paola", lasta_name: "andrade", age:20}
  ];

  //######## OPERADORES BASICOS
  // suma +
  var suma = number_one + number_two;
  console.log("suma = " + suma)
  // resta - 
  var resta = number_one - number_two;
  console.log("resta = " + resta) 
  // multiplicacion * 
  var multi = number_one * number_two;
  console.log("multi = " + multi)
  // division / 
  var divi = number_one / number_two;
  console.log("divi = " + divi)
  // divi =  divi.toFixed(2)
  console.log("divison = " + divi.toFixed(2))
  // modulo %
  var modulo = number_one % number_two;
  console.log("modulo = " + modulo)

  console.log(
    "suma = " + suma + "\n" +
    "resta = " + resta + "\n" +
    "multi = " + multi + "\n" +
    "divi = " + divi + "\n" +
    "divison = " + divi.toFixed(2) + "\n" +
    "modulo = " + modulo
  )

  var respuesta = suma = " + suma + "\n" + "resta = " + resta + "\n" + "multi = " + multi + "\n" + "divi = " + divi + "\n" + "divison = " + divi.toFixed(2) + "\n" + "modulo = " + modulo