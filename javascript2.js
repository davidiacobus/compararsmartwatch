/*imagen del header cambia cada 1000ms*/

var cont=0
function cambia() {
cont++;
switch(cont%3+1)
 {
 case 1:
 document.getElementById("headerimg").src="compra2.png";
 break;
 case 2:
 document.getElementById("headerimg").src="compara2.png";
 break;
 case 3:
 document.getElementById("headerimg").src="y.png";
 break;
 
 }

}
function inicio() {
setInterval(cambia, 1000);
}
window.onload=inicio;


/*para que al hacer click en Comparar solo me aparezca en otro color Tabla Comparativa*/

$("#boton-comparar").click(function(){
	$("#inicio,#vendidos, #baratos, #blog, #contacto").css({ "background-color": "black"});
});

/*para que hacer click en 'Añadir reloj inteligente para comparar' se vuelva a la página de inicio*/
$(".add-product").click(function(){
$("#cont-inicio,#titulo-productos,#cont-productos").show();
$("#cont-tabla").css({"display":"none"});
});


/*mostrar y ocultar divs al hacer click en un elemento del menú*/

$("#inicio").click(function(){
	$("#cont-inicio,#titulo-productos,#cont-productos").show(); //muestra el contenido de Inicio al hacer click en Inicio
		
	$("#cont-tabla").css({"display":"none"}); //oculto contenido de Tabla Comparativa (luego añadiré todos los divs a ocultar análogamente para las otras secciones del menú)
	$(this).css({ "background-color": "#1C1C1C"});
	$("#tabla,#vendidos,#baratos,#blog,#contacto").css({ "background-color": "black"});
});

cont2=0;
$("#tabla").click(function(){
	cont2=cont2+1;
	if(cont=1){
		$(".add-product").css({"display":"block"});
	}
	else{
		$(".add-product").css({"display":"none"});
	}
	$("#cont-tabla").css({"display":"block"}); //muestra el contenido de Tabla Comparativa al hacer click en Tabla Comparativa
	$("#comparison").css({"visibility":"visible"});
	$("#cont-inicio,#titulo-productos,#cont-productos,#cont-baratos,#cont-vendidos,#cont-blog,#cont-contacto").hide();
	/*cambiar colores menú*/
	$(this).css({ "background-color": "#1C1C1C"});
	$("#inicio,#vendidos,#baratos,#blog,#contacto").css({ "background-color": "black"});
	
	
});

$("#vendidos").click(function(){
	
	$("#cont-tabla").css({"display":"none"}); //muestra el contenido de Tabla Comparativa al hacer click en Tabla Comparativa
	
	/*cambiar colores menú*/
	$(this).css({ "background-color": "#1C1C1C"});
	$("#inicio,#tabla,#baratos,#blog,#contacto").css({ "background-color": "black"});
});

$("#baratos").click(function(){
	
	$("#cont-tabla").css({"display":"none"}); //muestra el contenido de Tabla Comparativa al hacer click en Tabla Comparativa
	
	/*cambiar colores menú*/
	$(this).css({ "background-color": "#1C1C1C"});
	$("#inicio,#tabla,#vendidos,#blog,#contacto").css({ "background-color": "black"});
});

$("#blog").click(function(){
	
	$("#cont-tabla").css({"display":"none"}); //muestra el contenido de Tabla Comparativa al hacer click en Tabla Comparativa
	
	
	/*cambiar colores menú*/
	$(this).css({ "background-color": "#1C1C1C"});
	$("#inicio,#tabla,#vendidos,#baratos,#contacto").css({ "background-color": "black"});
});



/*mostrar post completo u mostrar menos al clikar en 'Leer más/menos'*/
$(".read-more").click(function(){
	$(".read-less").css({"display":"block"});
	$(".full-post").css({"display":"block"});
	$(this).css({"display":"none"});
});

$(".read-less").click(function(){
	$(".full-post").css({"display":"none"});
	$(".read-more").css({"display":"block"});
	$(this).css({"display":"none"});
});

/*alerta si se seleccionan más de 3 productos para comparar*/

function contar() {

$("#tabla").css({ "background-color": "#1C1C1C"}); 
$("#titulo-productos,#,#").css({ "display": "none"});
 
  var checkboxes = document.getElementsByName("option1"); //Array que contiene los checkbox

  var cont1 = 0; //Variable que lleva la cuenta de los checkbox pulsados

  for (var x=0; x < checkboxes.length; x++) {
   if (checkboxes[x].checked) {
    cont1 = cont1 + 1; 
   }
   
  }
  
  if (cont1 === 0) {
  	alert("Por favor, seleccione algún producto para comparar");
  	$("#cont-tabla").css({"display":"none"});
  	
  	
  }
  
  if (cont1>4){
  alert ("Por favor, selecciona un máximo de 4 smartwatches para comparar");
 }
 else{
 	if(cont1>0){
 	/*si se seleccionan 4 o menos productos aparece página comparar*/
 	 $("#cont-tabla").css({"display":"block"});/*muestra el contenido de la tabla comparativa si se slecciona algún producto*/
 	document.getElementById("comparison").style.visibility="visible";
 	document.getElementById("cont-inicio").style.display="none";
 	document.getElementById("titulo-productos").style.display="none";
 	document.getElementById("cont-productos").style.display="none";
 	
 	     if (document.getElementById("sony-sw-2").checked){
 		   $(".sony-sw-2").css({"display":"block"});
          }	
          else{
          	$(".sony-sw-2").css({"display":"none"});
          }
         if (document.getElementById("lg-g-watch-r").checked){
 		   $(".lg-g-watch-r").css({"display":"block"});
          }	
           else{
           $(".lg-g-watch-r").css({"display":"none"});
          }
        
          if (document.getElementById("motorola-moto-360").checked){
 		   $(".motorola-moto-360").css({"display":"block"});
          }	
          else{
          	$(".motorola-moto-360").css({"display":"none"});
          }
          if (document.getElementById("samsung-gear-fit").checked){
 		   $(".samsung-gear-fit").css({"display":"block"});
          }	
          else{
          	 $(".samsung-gear-fit").css({"display":"none"});
          }
          
          if (document.getElementById("sony-sw-3").checked){
 		   $(".sony-sw-3").css({"display":"block"});
          }	
          else{
          	  $(".sony-sw-3").css({"display":"none"});
          }
          if (document.getElementById("lg-g-watch").checked){
 		   $(".lg-g-watch").css({"display":"block"});
          }	
          else{
          	  $(".lg-g-watch").css({"display":"none"});
          }
          if (document.getElementById("samsung-gear-s").checked){
 		   $(".samsung-gear-s").css({"display":"block"});
          }	
          else{
          	  $(".samsung-gear-s").css({"display":"none"});
          }
          if (document.getElementById("samsung-gear-2").checked){
 		   $(".samsung-gear-2").css({"display":"block"});
          }	
          else{
          	  $(".samsung-gear-2").css({"display":"none"});
          }
          if (document.getElementById("sony-sw").checked){
 		   $(".sony-sw").css({"display":"block"});
          }	
          else{
          	$(".sony-sw").css({"display":"none"});
          }
          if (document.getElementById("samsung-gear").checked){
 		   $(".samsung-gear").css({"display":"block"});
          }	
          else{
          	$(".samsung-gear").css({"display":"none"});
          }
          if (document.getElementById("samsung-gear-2-neo").checked){
 		   $(".samsung-gear-2-neo").css({"display":"block"});
          }	
          else{
          	$(".samsung-gear-2-neo").css({"display":"none"});
          }
          if (document.getElementById("samsung-gear-2-lite").checked){
 		   $(".samsung-gear-2-lite").css({"display":"block"});
          }	
          else{
          	   $(".samsung-gear-2-lite").css({"display":"none"});
          }
          


          
       if (cont1==1){
       
       	 $("#add-first,#add-second,#add-third").css({"display":"block"}); 
       }   
       
       if (cont1==2){
       	 $("#add-first,#add-second").css({"display":"block"});
       	 $("#add-third").css({"display":"none"});
       }   
       
       if (cont1==3){
       	 $("#add-first").css({"display":"block"});
       	 $("#add-second,#add-third").css({"display":"none"});
       }  
       
         if (cont1==4){
       	 $("#add-first,#add-second,#add-third").css({"display":"none"});
       }  
       
          
          
  }
          
  }	

}
 	
 
/*añadir atributo text a info*/
$(".info").attr("title","Selecciona 'Comparar' para añadir a la lista de comparación y a continuación haz click en 'Comparar selección'.");

/*añadir html en Tabla Comparativa*/


var classes= ["sony-sw-2", "lg-g-watch-r", "motorola-moto-360", "samsung-gear-fit", "sony-sw-3", "lg-g-watch", "samsung-gear-s", "samsung-gear-2", "sony-sw", "samsung-gear", "samsung-gear-2-neo", "samsung-gear-2-lite", 
"u10","memteq","uu","zewatch","u8","u8-plus","rkm-m3","zewatch-2"]; /*array que contiene los nombres de las class de cada producto*/

var compatibility=["android 4.0+",	"android 4.3+",	"android 4.3+",	"-",	"android 4.3+",	"android  4.3+",	"-",	"Samsung",	"android 2.1+",	"Samsung",	"Samsung",	"Samsung","-",	"-","android 2.3+",	"Compatible",
	"android 2.3+"]; /*array que contiene los valores del campo compatibilidad para todos los productos, por orden de aparición en la página de inicio*/

for (var i=0; i < compatibility.length; i++) {
	
	var addHTML= "<div id='row-right-col' class='%class%'><li>%data%</li></div>";
	var replacedHTML= addHTML.replace("%data%", compatibility[i]); //escribe el valor del campo compatibilidad para cada producto
    var asignedClass= replacedHTML.replace("%class%", classes[i]); //cambia el nombre de la clase para identificar cada div con el correspondiente producto
	
	
	$("#comp").append(asignedClass);
}

var compatibility1=["Incompatible",	"Incompatible",	"Incompatible", "Incompatible", "Incompatible", "Incompatible", "Incompatible", "Incompatible", "Incompatible", "Incompatible", "Incompatible", "Incompatible" ]; 

for (var i=0; i < compatibility1.length; i++) {
	
	var addHTML= "<div id='row-right-col' class='%class%'><li>%data%</li></div>";
	var replacedHTML= addHTML.replace("%data%", compatibility1[i]); //escribe el valor del campo compatibilidad para cada producto
    var asignedClass= replacedHTML.replace("%class%", classes[i]); //cambia el nombre de la clase para identificar cada div con el correspondiente producto
	
	
	$("#comp-1").append(asignedClass);
}

/*SCREEN*/

var screenSize=["1.6 pulgadas",	"1.3 pulgadas",	"1.56 pulgadas",	"1.84 pulgadas",	"1.6 pulgadas",	"1.65 pulgadas",	"2 pulgadas",	"1.63 pulgadas",	"1.3 pulgadas",	"1.63 pulgadas",	"1.63 pulgadas", "-"]; 

for (var i=0; i < screenSize.length; i++) {
	
	var addHTML= "<div id='row-right-col' class='%class%'><li>%data%</li></div>";
	var replacedHTML= addHTML.replace("%data%", screenSize[i]); //escribe el valor del campo compatibilidad para cada producto
    var asignedClass= replacedHTML.replace("%class%", classes[i]); //cambia el nombre de la clase para identificar cada div con el correspondiente producto
	
	
	$("#screen").append(asignedClass);
}

var screenRes=["220x176",	"320x320",	"320x290", 	"128x432",	"320x320", 	"280x280",	"-",	"320x320",	"128x128",	"320x320",	"320x320",	"-"]; 

for (var i=0; i < screenRes.length; i++) {
	
	var addHTML= "<div id='row-right-col' class='%class%'><li>%data%</li></div>";
	var replacedHTML= addHTML.replace("%data%", screenRes[i]); //escribe el valor del campo compatibilidad para cada producto
    var asignedClass= replacedHTML.replace("%class%", classes[i]); //cambia el nombre de la clase para identificar cada div con el correspondiente producto
	
	
	$("#screen-1").append(asignedClass);
}

var screenType=["LCD",	"P-OLED",	"LCD",	"Curva Super AMOLED",	"LCD TFT transflectiva",	"IPS LCD",	"Curva Super AMOLED",	"Super AMOLED",	"OLED",	"Super AMOLED",	"Super AMOLED",	"-"]; 

for (var i=0; i < screenType.length; i++) {
	
	var addHTML= "<div id='row-right-col' class='%class%'><li>%data%</li></div>";
	var replacedHTML= addHTML.replace("%data%", screenType[i]); //escribe el valor del campo compatibilidad para cada producto
    var asignedClass= replacedHTML.replace("%class%", classes[i]); //cambia el nombre de la clase para identificar cada div con el correspondiente producto
	
	
	$("#screen-2").append(asignedClass);
}

/*DIMENSIONS*/

var thickness=["8.89 mm",	"11.1 mm",	"11.55 mm",	"11.95 mm",	"10 mm",	"9.95 mm",	"12.5 mm",	"10 mm",	"8 mm",	"11.1 mm",	"10 mm",	"-"]; 

for (var i=0; i < thickness.length; i++) {
	
	var addHTML= "<div id='row-right-col' class='%class%'><li>%data%</li></div>";
	var replacedHTML= addHTML.replace("%data%", thickness[i]); //escribe el valor del campo compatibilidad para cada producto
    var asignedClass= replacedHTML.replace("%class%", classes[i]); //cambia el nombre de la clase para identificar cada div con el correspondiente producto
	
	
	$("#dim").append(asignedClass);
}

var bandWidth=["24 mm",	"22 mm","22 mm","23.4 mm",	"-","22 mm","-","-","-","-","-","-"]; 

for (var i=0; i < bandWidth.length; i++) {
	
	var addHTML= "<div id='row-right-col' class='%class%'><li>%data%</li></div>";
	var replacedHTML= addHTML.replace("%data%", bandWidth[i]); //escribe el valor del campo compatibilidad para cada producto
    var asignedClass= replacedHTML.replace("%class%", classes[i]); //cambia el nombre de la clase para identificar cada div con el correspondiente producto
	
	
	$("#dim-1").append(asignedClass);
}

var weight=["122 g", "62 g", "49 g",	"27 g",	"45 g",	"63 g",	"67-84 g", "68 g",	"41.5 g",	"72.8 g",	"55 g",	"-"]; 

for (var i=0; i < weight.length; i++) {
	
	var addHTML= "<div id='row-right-col' class='%class%'><li>%data%</li></div>";
	var replacedHTML= addHTML.replace("%data%", weight[i]); //escribe el valor del campo compatibilidad para cada producto
    var asignedClass= replacedHTML.replace("%class%", classes[i]); //cambia el nombre de la clase para identificar cada div con el correspondiente producto
	
	
	$("#dim-2").append(asignedClass);
}

/*PROCESSOR*/

var processorChar=["ARM Cortex-M4 180 MHz",	"Qualcomm Snapdragon 400 1.2 GHz",	"TI OMAP 3","-"	,"ARM Cortex 1.2 GHz"	,"CPU 1.2 GHz"	,"1 GHz"	,"1 GHz",	"-"	,"-",	"1 GHz"	,"-"]; 

for (var i=0; i < processorChar.length; i++) {
	
	var addHTML= "<div id='row-right-col' class='%class%'><li>%data%</li></div>";
	var replacedHTML= addHTML.replace("%data%", processorChar[i]); //escribe el valor del campo compatibilidad para cada producto
    var asignedClass= replacedHTML.replace("%class%", classes[i]); //cambia el nombre de la clase para identificar cada div con el correspondiente producto
	
	
	$("#processor").append(asignedClass);
}

var coreN=["1", "1", "1",	"-",	"4",	"1",	"2",	"2",	"-",	"-",	"2",	"-"];


for (var i=0; i < coreN.length; i++) {
	
	var addHTML= "<div id='row-right-col' class='%class%'><li>%data%</li></div>";
	var replacedHTML= addHTML.replace("%data%", coreN[i]); //escribe el valor del campo compatibilidad para cada producto
    var asignedClass= replacedHTML.replace("%class%", classes[i]); //cambia el nombre de la clase para identificar cada div con el correspondiente producto
	
	
	$("#processor-1").append(asignedClass);
}

var ramMemo=["-",	"512MB"	,"512 MB",	"-"	,"512 MB",	"512MB"	,"512 MB"	,"512 MB",	"-","-",	"512 MB",	"-"]; 

for (var i=0; i < ramMemo.length; i++) {
	
	var addHTML= "<div id='row-right-col' class='%class%'><li>%data%</li></div>";
	var replacedHTML= addHTML.replace("%data%", ramMemo[i]); //escribe el valor del campo compatibilidad para cada producto
    var asignedClass= replacedHTML.replace("%class%", classes[i]); //cambia el nombre de la clase para identificar cada div con el correspondiente producto
	
	
	$("#processor-2").append(asignedClass);
	
}
/*CHARACTERISTICS*/

var alarm=["Sí",	"SÍ",	"Sí",	"Sí",	"Sí",	"-",	"Sí",	"-"	,"-",	"-",	"-"	,"-"]; 

for (var i=0; i < alarm.length; i++) {
	
	var addHTML= "<div id='row-right-col' class='%class%'><li>%data%</li></div>";
	var replacedHTML= addHTML.replace("%data%",alarm[i]); //escribe el valor del campo compatibilidad para cada producto
    var asignedClass= replacedHTML.replace("%class%", classes[i]); //cambia el nombre de la clase para identificar cada div con el correspondiente producto
	
	
	$("#char").append(asignedClass);
}

var viewContent=["Sí",	"Sí","Sí",	"No",	"Sí",	"-"	,"Sí",	"-"	,"Sí",	"-",	"-","-"]; 

for (var i=0; i < viewContent.length; i++) {
	
	var addHTML= "<div id='row-right-col' class='%class%'><li>%data%</li></div>";
	var replacedHTML= addHTML.replace("%data%", viewContent[i]); //escribe el valor del campo compatibilidad para cada producto
    var asignedClass= replacedHTML.replace("%class%", classes[i]); //cambia el nombre de la clase para identificar cada div con el correspondiente producto
	
	
	$("#char-1").append(asignedClass);
}

var vibration=["Sí",	"-"	,"Sí"	,"-",	"Sí",	"-"	,"Sí"	,"-",	"-"	,"-",	"-",	"-"]; 

for (var i=0; i < vibration.length; i++) {
	
	var addHTML= "<div id='row-right-col' class='%class%'><li>%data%</li></div>";
	var replacedHTML= addHTML.replace("%data%", vibration[i]); //escribe el valor del campo compatibilidad para cada producto
    var asignedClass= replacedHTML.replace("%class%", classes[i]); //cambia el nombre de la clase para identificar cada div con el correspondiente producto
	
	
	$("#char-2").append(asignedClass);
}

var gps=[ "Sí",	"-",	"No",	"-",	"Sí",	"-"	,"Sí",	"-",	"-",	"-"	,"-",	"-"]; 

for (var i=0; i < gps.length; i++) {
	
	var addHTML= "<div id='row-right-col' class='%class%'><li>%data%</li></div>";
	var replacedHTML= addHTML.replace("%data%", gps[i]); //escribe el valor del campo compatibilidad para cada producto
    var asignedClass= replacedHTML.replace("%class%", classes[i]); //cambia el nombre de la clase para identificar cada div con el correspondiente producto
	
	
	$("#char-3").append(asignedClass);
}

var multitouch=[ ]; 

for (var i=0; i < multitouch.length; i++) {
	
	var addHTML= "<div id='row-right-col' class='%class%'><li>%data%</li></div>";
	var replacedHTML= addHTML.replace("%data%",multitouch[i]); //escribe el valor del campo compatibilidad para cada producto
    var asignedClass= replacedHTML.replace("%class%", classes[i]); //cambia el nombre de la clase para identificar cada div con el correspondiente producto
	
	
	$("#char-4").append(asignedClass);
}

var sensor=["Sí",	"No",	"No",	"-"	,"Sí" ,	"Sí",	"-"	,"-",	"-"	,"-"	,"-",	"-"]; 

for (var i=0; i < sensor.length; i++) {
	
	var addHTML= "<div id='row-right-col' class='%class%'><li>%data%</li></div>";
	var replacedHTML= addHTML.replace("%data%", sensor[i]); //escribe el valor del campo compatibilidad para cada producto
    var asignedClass= replacedHTML.replace("%class%", classes[i]); //cambia el nombre de la clase para identificar cada div con el correspondiente producto
	
	
	$("#char-5").append(asignedClass);
}

var waterResistance=["Sí",	"Sí IP67",	"Sí IP67"	,"-"	,"Sí IP68"	,"Sí IP67"	,"Sí IP67"	,"Sí IP67"	,"No"	,"No"	,"Sí IP67"	,"-"]; 

for (var i=0; i < waterResistance.length; i++) {
	
	var addHTML= "<div id='row-right-col' class='%class%'><li>%data%</li></div>";
	var replacedHTML= addHTML.replace("%data%", waterResistance[i]); //escribe el valor del campo compatibilidad para cada producto
    var asignedClass= replacedHTML.replace("%class%", classes[i]); //cambia el nombre de la clase para identificar cada div con el correspondiente producto
	
	
	$("#char-6").append(asignedClass);
}

/*CONNECTIVITY*/
var bluetooth=["3.0",	"4.0",	"4.0",	"-"	,"4.1"	,"4.0"	,"4.1"	,"4.0"	,"3.0"	,"4.0"	,"4.0"	,"-"]; 

for (var i=0; i < bluetooth.length; i++) {
	
	var addHTML= "<div id='row-right-col' class='%class%'><li>%data%</li></div>";
	var replacedHTML= addHTML.replace("%data%", bluetooth[i]); //escribe el valor del campo compatibilidad para cada producto
    var asignedClass= replacedHTML.replace("%class%", classes[i]); //cambia el nombre de la clase para identificar cada div con el correspondiente producto
	
	
	$("#connect").append(asignedClass);
}
var NFC=["Sí","No"	,"No","-",	"Sí", "-" ,"No"	,"-",	"-"	,"-"	,"-",	"-"]; 

for (var i=0; i < NFC.length; i++) {
	
	var addHTML= "<div id='row-right-col' class='%class%'><li>%data%</li></div>";
	var replacedHTML= addHTML.replace("%data%", NFC[i]); //escribe el valor del campo compatibilidad para cada producto
    var asignedClass= replacedHTML.replace("%class%", classes[i]); //cambia el nombre de la clase para identificar cada div con el correspondiente producto
	
	
	$("#connect-1").append(asignedClass);
}


/*BATTERY*/
var batteryCapacity=["225 mAh"	,"410 mAh",	"320 mAh"	,"210 mAh","420 mAh",	"400 mAh"	,"300 mAh"	,"300 mAh"	,"-","-",	"300 mAh","-"];  

for (var i=0; i < batteryCapacity.length; i++) {
	
	var addHTML= "<div id='row-right-col' class='%class%'><li>%data%</li></div>";
	var replacedHTML= addHTML.replace("%data%", batteryCapacity[i]); //escribe el valor del campo compatibilidad para cada producto
    var asignedClass= replacedHTML.replace("%class%", classes[i]); //cambia el nombre de la clase para identificar cada div con el correspondiente producto
	
	
	$("#bat").append(asignedClass);
}
var batteryDuration=["3-4 días"	,"2 días" ,"1 día","3-4 días","	2 días",	"1 día",	"2 días",	"2-3 días",	"1-2 días",	"1-2 días","2-3 días",	"-"]; 

for (var i=0; i < batteryDuration.length; i++) {
	
	var addHTML= "<div id='row-right-col' class='%class%'><li>%data%</li></div>";
	var replacedHTML= addHTML.replace("%data%", batteryDuration[i]); //escribe el valor del campo compatibilidad para cada producto
    var asignedClass= replacedHTML.replace("%class%", classes[i]); //cambia el nombre de la clase para identificar cada div con el correspondiente producto
	
	
	$("#bat-1").append(asignedClass);
}
var baterryType=["Li-Polymer",	"Lithium-Ion",	"1080p OLED","-","-","Lithium-Ion","-","-","-","-","-","-"];  

for (var i=0; i < baterryType.length; i++) {
	
	var addHTML= "<div id='row-right-col' class='%class%'><li>%data%</li></div>";
	var replacedHTML= addHTML.replace("%data%", baterryType[i]); //escribe el valor del campo compatibilidad para cada producto
    var asignedClass= replacedHTML.replace("%class%", classes[i]); //cambia el nombre de la clase para identificar cada div con el correspondiente producto
	
	
	$("#bat-2").append(asignedClass);
}

/*CUSTOMIZATION*/
var interchangeable=["Sí"	,"Sí",	"Sí",	"Sí	",	"Sí","-"	,"Sí",	"Sí",	"-	","-	", "Sí"	,"-"]; 

for (var i=0; i < interchangeable.length; i++) {
	
	var addHTML= "<div id='row-right-col' class='%class%'><li>%data%</li></div>";
	var replacedHTML= addHTML.replace("%data%", interchangeable[i]); //escribe el valor del campo compatibilidad para cada producto
    var asignedClass= replacedHTML.replace("%class%", classes[i]); //cambia el nombre de la clase para identificar cada div con el correspondiente producto
	
	
	$("#custom").append(asignedClass);
}
