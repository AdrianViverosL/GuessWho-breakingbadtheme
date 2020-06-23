//Adivina Quien Breaking Bad Style
//modo pc adivina 
var preguntasPosibles = ["</br>Es hombre?", "</br>Esta pelon?", "</br>Tiene Lentes?", "</br>Es blanco?", "</br>Tiene Barba?", "</br>Esta Gordo?", "</br> Tiene Cabello Negro?", "</br>Usa Muletas?", "</br>Tiene Canas?","</br>Es Joven?", "</br>Es Rubia?" ];

var esHombre, estaPelon, tieneLentes, esBlanco, tieneBarba, estaGordo, cabelloNegro, usaMuletas, tieneCanas, esJoven, esRubia;
//var guess = false
$(document).ready(function(){
	welcome();
});

//Desplegar instrucciones de juego al cargar la página
function welcome(){
	//console.log("hola");
	document.getElementById("juego").innerHTML = "Ingresa 'jugar' para iniciar nueva partida";
	document.getElementById('respuesta').value = "";
}

//validar la respueta obtenida por el ususario y direccionar a la función donde se desarrolla el juego
function validateAnswer(){
	switch(document.getElementById("respuesta").value){
		case "jugar":
		document.getElementById("juego").innerHTML += "</br>Iniciando....";
		play("jugar");
		start=true;
		//document.getElementById("respuesta").style.visibility = "hidden";
		break;

		case "si":
		document.getElementById("juego").innerHTML += "</br>Ok";
		play("si");
		//document.getElementById("respuesta").style.visibility = "hidden";
		break;

		case "no":
		document.getElementById("juego").innerHTML += "</br>Bien!";
		play("no");
		//document.getElementById("respuesta").style.visibility = "hidden";
		break;

		default:
		document.getElementById("juego").innerHTML = "No te entiendo";
		break;
	}
}


//se hace el descubrimiento del personaje seleccionado por el usuario siguiendo unos caminos definidos mediante condicionales if/else
function play(respuesta){
	document.getElementById('respuesta').value = "";
	var pregunta = "</br>Tu personaje ";
	if(respuesta == "jugar"){
		document.getElementById("juego").innerHTML +=  preguntasPosibles[0];
	}else{
		if(esHombre === undefined && start == true){
			if(respuesta == "si"){
				esHombre = true;
				document.getElementById("juego").innerHTML += preguntasPosibles[1];
			}else{
				esHombre = false;
				document.getElementById("juego").innerHTML += preguntasPosibles[10];}    //pregunta lado derecho
			}
		else if(estaPelon === undefined && esHombre==true){
			if(respuesta =="si"){
				estaPelon = true;
				document.getElementById("juego").innerHTML += preguntasPosibles[2];
			}else{
				estaPelon = false;
				document.getElementById("juego").innerHTML += preguntasPosibles[6];
				}
			}
		else if(tieneLentes == undefined && estaPelon ==true){
			if(respuesta=="si"){
				tieneLentes = true;
				document.getElementById("juego").innerHTML += preguntasPosibles[3];
			}else{
				tieneLentes= false;
				document.getElementById("juego").innerHTML += preguntasPosibles[4];
			}
		}
		else if(esBlanco== undefined && tieneLentes == true){
			if(respuesta=="si"){
				esBlanco= true;
				//guess = true;
				document.getElementById("juego").innerHTML += "</br>Es Walter White.";
			}else{
				esBlanco =false;
				//guess = true;
				document.getElementById("juego").innerHTML += "</br>Es Gustavo Fring";
			}
		}
		else if(tieneBarba== undefined && tieneLentes == false){
			if(respuesta=="si"){
				tieneBarba=true;
				//guess = true;
				document.getElementById("juego").innerHTML += "</br> Es Mike Ermantrahut";
			}else{
				tieneBarba =false;
				document.getElementById("juego").innerHTML += preguntasPosibles[5];
			}
		}
		else if(estaGordo == undefined && tieneBarba == false){
			if(respuesta=="si"){
				estaGordo=true;
				document.getElementById("juego").innerHTML += "</br> Es Hank!";
			}else{
				estaGordo=false;
				document.getElementById("juego").innerHTML += "</br> Skinny Pete";
			}
		}
		else if(cabelloNegro == undefined && estaPelon == false){
			if(respuesta =="si"){
				cabelloNegro=true;
				document.getElementById("juego").innerHTML += preguntasPosibles[7];
			}else{
				cabelloNegro =false;
				document.getElementById("juego").innerHTML += preguntasPosibles[8];
			}	
		}
		else if(usaMuletas==undefined && cabelloNegro == true){
			if(respuesta=="si"){
				usaMuletas = true;
				document.getElementById("juego").innerHTML += "</br> Es Walter Jr.!";
			}else{
				usaMuletas = false;
				document.getElementById("juego").innerHTML += "</br> Es Tuco Salamanca";
			}
		}
		else if(tieneCanas==undefined && cabelloNegro==false){
			if(respuesta=="si"){
				tieneCanas=true;
				document.getElementById("juego").innerHTML += "</br> Es Don Hector Salamanca";
			}else{
				tieneCanas=false;
				document.getElementById("juego").innerHTML += preguntasPosibles[9];
			}
		}
		else if(esJoven==undefined && tieneCanas==false){
			if(respuesta=="si"){
				esJoven=true;
				document.getElementById("juego").innerHTML += "</br>YOOOOOOOO!!!!Jesse Pinkman!";
			}else{
				esJoven = false;
				document.getElementById("juego").innerHTML += "</br>It`s all good man!";
			}
		}
		else if(esRubia==undefined && esHombre ==false){
			if(respuesta=="si"){
				esRubia = true;
				document.getElementById("juego").innerHTML += "</br> Es Skyler";
			}else{
				esRubia=false;
				document.getElementById("juego").innerHTML += "</br> Jane RIP";
			}
		}
		}
}
			
		
	
	
	

