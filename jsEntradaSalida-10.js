/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{ /* esto es el ejercicio 10 tal como se pide */

   let importe;
   let descuento;
   let importefinal;
	 importe=parseInt(document.getElementById("txtIdImporte").value);
	 descuento=importe*.25;
	 importefinal=importe-descuento;
	 document.getElementById("txtIdResultado").value=importefinal;
	 

	 /*ejercicio 10 modificado con if - else para practicar*/

	/* let importe;
      let descuento;
      let importefinal;
	 importe=parseInt(document.getElementById("txtIdImporte").value);

	 if(importe>=50 && importe<=100)
      {  descuento=importe*.25;
	 	 importefinal=importe-descuento;
	 	document.getElementById("txtIdResultado").value=importefinal;
	  }
	    else
	    { 	if(importe>100 && importe<=200)
	  	     {descuento=importe*.50;
              importefinal=importe-descuento;
              document.getElementById("txtIdResultado").value=importefinal;
             } 
	  	    else
	  	     {descuento=importe*.50;
              importefinal=importe-descuento;
              document.getElementById("txtIdResultado").value=importefinal;
              alert("en su segundo producto tiene un 20% de descuento");
             } 
	  	} */
}
