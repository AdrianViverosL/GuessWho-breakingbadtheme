//Adivina Quien Breaking Bad Style
//scrip para el modo usuario adivina
var preguntasPosibles = ["</br>1. Es hombre?", "</br>2. Esta pelon?", "</br>3. Tiene Lentes?", "</br>4. Es blanco?", "</br>5. Tiene Barba?", "</br>6. Esta Gordo?", "</br> 7. Tiene Cabello Negro?", "</br>8. Usa Muletas?", "</br>9. Tiene Canas?","</br>10. Es Joven?", "</br>11. Es Rubia?" ];

var esHombre, estaPelon, tieneLentes, esBlanco, tieneBarba, estaGordo, cabelloNegro, usaMuletas, tieneCanas, esJoven, esRubia;


//creación de los objetos para los personajes
var walter = {nombre:"Walter White", esHombre:true, estaPelon:true, tieneLentes:true, esBlanco:true, tieneBarba:true, estaGordo:false, cabelloNegro:false, usaMuletas:false, tieneCanas:false, esJoven:false, esRubia:false};
var gus = {nombre:"Gustavo Fring", esHombre:true, estaPelon:true, tieneLentes:true, esBlanco:false, tieneBarba:false, estaGordo:false, cabelloNegro:false, usaMuletas:false, tieneCanas:false, esJoven:false, esRubia:false};
var mike = {nombre:"Mike Ermantrahut", esHombre:true, estaPelon:true, tieneLentes:false, esBlanco:true, tieneBarba:true, estaGordo:false, cabelloNegro:false, usaMuletas:false, tieneCanas:true, esJoven:false, esRubia:false};
var skinny = {nombre:"Skinny Pete", esHombre:true, estaPelon:true, tieneLentes:false, esBlanco:true, tieneBarba:false, estaGordo:false, cabelloNegro:false, usaMuletas:false, tieneCanas:false, esJoven:true, esRubia:false};
var hank = {nombre:"Hank Schrader", esHombre:true, estaPelon:true, tieneLentes:false, esBlanco:true, tieneBarba:false, estaGordo:true, cabelloNegro:false, usaMuletas:false, tieneCanas:false, esJoven:false, esRubia:false};
var wjr = {nombre:"Walter Jr.", esHombre:true, estaPelon:false, tieneLentes:false, esBlanco:true, tieneBarba:false, estaGordo:false, cabelloNegro:true, usaMuletas:true, tieneCanas:false, esJoven:true, esRubia:false};
var tuco = {nombre:"Tuco Salamanca", esHombre:true, estaPelon:false, tieneLentes:false, esBlanco:false, tieneBarba:true, estaGordo:false, cabelloNegro:true, usaMuletas:false, tieneCanas:false, esJoven:false, esRubia:false};
var hector = {nombre:"Don Hector Salamanca", esHombre:true, estaPelon:false, tieneLentes:false, esBlanco:false, tieneBarba:true, estaGordo:true, cabelloNegro:false, usaMuletas:false, tieneCanas:true, esJoven:false, esRubia:false};
var jesse = {nombre:"Jesse Pinkman", esHombre:true, estaPelon:false, tieneLentes:false, esBlanco:true, tieneBarba:true, estaGordo:false, cabelloNegro:false, usaMuletas:false, tieneCanas:false, esJoven:true, esRubia:false};
var saul = {nombre:"Saul Goodman", esHombre:true, estaPelon:false, tienesLentes:false, esBlanco:true, tieneBarba:false, estaGorod:false, cabelloNegro:false, usaMuletas:false, tieneCanas:false, esJoven:false, esRubia:false};
var skyler = {nombre:"Skyler White",esHombre:false, estaPelon:false, tienesLentes:false, esBlanco:true, tieneBarba:false, estaGorod:false, cabelloNegro:false, usaMuletas:false, tieneCanas:false, esJoven:false, esRubia:true};
var jane = {nombre:"Jane",esHombre:false, estaPelon:false, tienesLentes:false, esBlanco:true, tieneBarba:false, estaGorod:false, cabelloNegro:true, usaMuletas:false, tieneCanas:false, esJoven:true, esRubia:false};

var personajes = [walter, gus, mike, skinny, hank, wjr, tuco, hector, jesse, saul, skyler, jane];

var personaje;

$(document).ready(function(){
	welcome();
});

//cargar instruciones de inicio
function welcome(){
	//console.log("hola");
	document.getElementById("juego").innerHTML = "Ingresa 'jugar' para iniciar nueva partida </br> ";
	document.getElementById('respuesta').value = "";
}

//validar la respuesta obtenida por el usuario y se dirección dependiendo de la respuesta 
function validateAnswer(){
	switch(document.getElementById("respuesta").value){
		case "jugar":
		
		play("jugar");
		break;
		
		case "1":
		document.getElementById("juego").innerHTML += preguntasPosibles[0];
		play("1");
		break;

		case "2":
		document.getElementById("juego").innerHTML += preguntasPosibles[1];
		play("2");
		break;

		case "3":
		document.getElementById("juego").innerHTML += preguntasPosibles[2];
		play("3");
		break;

		case "4":
		document.getElementById("juego").innerHTML += preguntasPosibles[3];
		play("4");
		break;

		case "5":
		document.getElementById("juego").innerHTML += preguntasPosibles[4];
		play("5");
		break;

		case "6":
		document.getElementById("juego").innerHTML += preguntasPosibles[5];
		play("6");
		break;

		case "7":
		document.getElementById("juego").innerHTML += preguntasPosibles[6];
		play("7");
		break;

		case "8":
		document.getElementById("juego").innerHTML += preguntasPosibles[7];
		play("8");
		break;

		case "9":
		document.getElementById("juego").innerHTML += preguntasPosibles[8];
		play("9");
		break;

		case "10":
		document.getElementById("juego").innerHTML += preguntasPosibles[9];
		play("10");
		break;

		case "11":
		document.getElementById("juego").innerHTML += preguntasPosibles[10];
		play("11");
		break;


		default:
		//document.getElementById("juego").innerHTML += document.getElementById("respuesta").value;
		document.getElementById("juego").innerHTML += "</br>Dejame ver......";
		//var answer = document.getElementById("respuesta").value;
		guess()
		break;
	}
}

//función donde se desarrolla el juego, se despliegan las preguntas para que le usuario seleccione una y obtenga su respuesta.
function play(respuesta){
	document.getElementById('respuesta').value = "";
	//var pregunta = "</br>Tu personaje ";
	if(respuesta == "jugar"){
		document.getElementById("juego").innerHTML = "";
		welcome();
		personaje = personajes[Math.floor(Math.random() * personajes.length)];  //la pc selecciona un personaje al azar
		document.getElementById("juego").innerHTML += "</br>Selecciona el numero de una pregunta: ";
		document.getElementById("juego").innerHTML +=  preguntasPosibles[0];
		document.getElementById("juego").innerHTML +=  preguntasPosibles[1];
		document.getElementById("juego").innerHTML +=  preguntasPosibles[2];
		document.getElementById("juego").innerHTML +=  preguntasPosibles[3];
		document.getElementById("juego").innerHTML +=  preguntasPosibles[4];
		document.getElementById("juego").innerHTML +=  preguntasPosibles[5];
		document.getElementById("juego").innerHTML +=  preguntasPosibles[6];
		document.getElementById("juego").innerHTML +=  preguntasPosibles[7];
		document.getElementById("juego").innerHTML +=  preguntasPosibles[8];
		document.getElementById("juego").innerHTML +=  preguntasPosibles[9];
		document.getElementById("juego").innerHTML +=  preguntasPosibles[10];
		//document.getElementById("juego").innerHTML += personaje.nombre;
	}else{
		if(respuesta == "1"){
			if(personaje.esHombre == true){
				document.getElementById("juego").innerHTML += "Si";
			}else{
				document.getElementById("juego").innerHTML += "No";}    //pregunta lado derecho
			}

		else if(respuesta =="2"){
			if(personaje.estaPelon == true){
				document.getElementById("juego").innerHTML += "Si";
			}else{
				document.getElementById("juego").innerHTML += "No";
			}
		}

		else if(respuesta =="3"){
			if(personaje.tieneLentes == true){
				document.getElementById("juego").innerHTML += "Si";
			}else{
				document.getElementById("juego").innerHTML += "No";
			}
		}

		else if(respuesta =="4"){
			if(personaje.esBlanco == true){
				document.getElementById("juego").innerHTML += "Si";
			}else{
				document.getElementById("juego").innerHTML += "No";
			}
		}
		else if(respuesta =="5"){
			if(personaje.tieneBarba == true){
				document.getElementById("juego").innerHTML += "Si";
			}else{
				document.getElementById("juego").innerHTML += "No";
			}
		}

		else if(respuesta =="6"){
			if(personaje.estaGordo == true){
				document.getElementById("juego").innerHTML += "Si";
			}else{
				document.getElementById("juego").innerHTML += "No";
			}
		}

		else if(respuesta =="7"){
			if(personaje.cabelloNegro == true){
				document.getElementById("juego").innerHTML += "Si";
			}else{
				document.getElementById("juego").innerHTML += "No";
			}
		}

		else if(respuesta =="8"){
			if(personaje.usaMuletas == true){
				document.getElementById("juego").innerHTML += "Si";
			}else{
				document.getElementById("juego").innerHTML += "No";
			}
		}

		else if(respuesta =="9"){
			if(personaje.tieneCanas == true){
				document.getElementById("juego").innerHTML += "Si";
			}else{
				document.getElementById("juego").innerHTML += "No";
			}
		}

		else if(respuesta =="10"){
			if(personaje.esJoven == true){
				document.getElementById("juego").innerHTML += "Si";
			}else{
				document.getElementById("juego").innerHTML += "No";
			}
		}

		else if(respuesta =="11"){
			if(personaje.esRubia == true){
				document.getElementById("juego").innerHTML += "Si";
			}else{
				document.getElementById("juego").innerHTML += "No";
			}
		}
	
		}
}

//función para comprobar la respuesta proprocionada por el usuario y validar si es correcta o no
function guess(){
	var answer = document.getElementById("respuesta").value;
	document.getElementById("respuesta").value = "";
	if(personaje.nombre == answer){
		document.getElementById("juego").innerHTML += "</br>Haz adivinado!";
	}else{
		document.getElementById("juego").innerHTML += "</br>Hmmmm nooo... sigue intentado....";
	}
}