/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/

function mostrar()

{	//declaro las variables

	var nombreingresado;
	var edadingresada;
	var textoconcatenado;

	//seteamos las variables con lo ingresado a la entrada

	nombreingresado = document.getElementById("txtIdNombre").value;
	edadingresada = document.getElementById("txtIdEdad").value;

    //concatenamos el texto
	textoconcatenado = "usted se llama";
	textoconcatenado = textoconcatenado  +  nombreingresado;
	textoconcatenado = textoconcatenado  +  "y tiene";
	textoconcatenado = textoconcatenado  +  edadingresada;
	textoconcatenado = textoconcatenado  +  "anos";
	alert (textoconcatenado);
}

