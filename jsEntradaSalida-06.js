/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{   let numerouno;
	let numerodos;
	numerouno=parseInt(document.getElementById("txtIdNumeroUno").value);
    numerodos=parseInt(document.getElementById("txtIdNumeroDos").value);
    suma=numerouno+numerodos;
	alert("el resultado de la suma es " + suma);
}

