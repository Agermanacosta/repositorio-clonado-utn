/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
var numerouno;
var numerodos;

function SacarResto()
{  numerouno = document.getElementById("txtIdNumeroDividendo").value;
    numerodos = document.getElementById("txtIdNumeroDivisor").value;
    numerouno = parseInt(numerouno);
    numerodos = parseInt(numerodos);

    alert(numerouno % numerodos);   
}
