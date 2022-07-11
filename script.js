var parcial,final,promedio;

	parcial = parseFloat(promtp("Parcial"));

	final = parseFloat(promtp("Final"));
    
	promedio = (parcial+final)/2;

	if(promedio >= 10.5){
		document.write("El promedio es "+promedio+" APROBADO");
	}else{
		document.write("El promedio es "+promedio+" DESAPROBADO");
	}