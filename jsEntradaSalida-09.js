/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
var numerouno;
var numerodos;
var numerotres

function mostrarAumento()

{ 

 numerouno = parseFloat(document.getElementById("txtIdSueldo").value);
    
    numerodos= numerouno * 10 / 100;
    numerotres= numerouno + numerodos; 
    document.getElementById("txtIdResultado").value = numerotres;
    
}
