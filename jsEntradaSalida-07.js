/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
var numerouno;
var numerodos;
var resultado;

function sumar()
{	numerouno = document.getElementById("txtIdNumeroUno").value;
    numerodos = document.getElementById("txtIdNumeroDos").value;
    numerouno = parseInt(numerouno);
    numerodos = parseInt(numerodos)
    resultado = numerouno + numerodos;

	alert(numerouno + numerodos);	
}

function restar()
{
	alert(numerouno - numerodos);
}

function multiplicar()
{ 
	alert(numerouno * numerodos);
}

function dividir()
{
	alert(numerouno / numerodos);
}

