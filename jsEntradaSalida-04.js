/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()

{   //declaro las variable que voy a usar
	var nombre;
	//guardo en la variable el nombre ingresado por el usuario
	nombre = prompt("ingrese su nombre"); 
	//copio el nombre de la variable dentro de la caja de texto
	document.getElementById("txtIdNombre").value = nombre;

}
	

