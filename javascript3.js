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
$("#cont-baratos,#titulo-productos,#cont-baratos-intro,#cont-productos-mas-baratos").show();
$("#cont-tabla").css({"display":"none"});
});



/*mostrar y ocultar divs al hacer click en un elemento del menú*/

$("#inicio").click(function(){
	$("#cont-inicio,#titulo-productos,#cont-productos").show(); //muestra el contenido de Inicio al hacer click en Inicio
		
	$("#cont-tabla").css({"display":"none"}); //oculto contenido de Tabla Comparativa (luego añadiré todos los divs a ocultar análogamente para las otras secciones del menú)
	$(this).css({ "background-color": "#1C1C1C"});
	$("#tabla,#vendidos,#baratos,#blog,#contacto").css({ "background-color": "black"});
});


$("#tabla").click(function(){

	$("#cont-tabla").css({"display":"block"}); //muestra el contenido de Tabla Comparativa al hacer click en Tabla Comparativa
		$("#comparison").css({"visibility":"visible"});
	$("#cont-inicio,#titulo-productos,#cont-productos,#cont-baratos,#cont-vendidos,#cont-blog").hide();
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
 	 $("#cont-tabla").css({"display":"block"});
 	 $("#add-fourth").css({"display":"none"});
 	 $("#cont-baratos-intro,#titulo-productos,#cont-productos-mas-baratos").css({ "display": "none"});
 	 document.getElementById("comparison").style.visibility="visible";
 
           if (document.getElementById("u10").checked){
	
 		   $(".u10").css({"display":"block"});
          }	
           else{
           $(".u10").css({"display":"none"});
          }
          if (document.getElementById("memteq").checked){
 		   $(".memteq").css({"display":"block"});
          }	
           else{
           $(".memteq").css({"display":"none"});
          }
          if (document.getElementById("uu").checked){
 		   $(".uu").css({"display":"block"});
          }	
           else{
           $(".uu").css({"display":"none"});
          }
          if (document.getElementById("zewatch").checked){
 		   $(".zewatch").css({"display":"block"});
          }	
           else{
           $(".zewatch").css({"display":"none"});
          }
          if (document.getElementById("u8").checked){
 		   $(".u8").css({"display":"block"});
          }	
           else{
           $(".u8").css({"display":"none"});
          }
          if (document.getElementById("u8-plus").checked){
 		   $(".u8-plus").css({"display":"block"});
          }	
           else{
           $(".u8-plus").css({"display":"none"});
          }
        
          if (document.getElementById("zewatch-2").checked){
 		   $(".zewatch-2").css({"display":"block"});
          }	
           else{
           $(".zewatch-2").css({"display":"none"});
          }
          
       if(cont1==1){
    
       	 $("#add-first,#add-second,#add-third").css({"display":"block"}); 
       }   
       
       if(cont1==2){
       	 $("#add-first,#add-second").css({"display":"block"});
       	 $("#add-third").css({"display":"none"});
       }   
       
       if(cont1==3){
       	 $("#add-first").css({"display":"block"});
       	 $("#add-second,#add-third").css({"display":"none"});
       }  
       
         if(cont1==4){
       	 $("#add-first,#add-second,#add-third").css({"display":"none"});
       }  
       
          
          
  }
          
  }	

}
 	
 
/*añadir atributo text a info*/
$(".info").attr("title","Selecciona 'Comparar' para añadir a la lista de comparación y a continuación haz click en 'Comparar selección'.");

/*añadir html en Tabla Comparativa*/


var classes= ["u10","memteq","uu","zewatch","u8","u8-plus","zewatch-2"]; /*array que contiene los nombres de las class de cada producto*/

var compatibility=["android 2.3+","	android 4.0+","	android 2.3+","	Compatible","	android 2.3+","	Compatible"	,"	android 2.3+"]; /*array que contiene los valores del campo compatibilidad para todos los productos, por orden de aparición en la página de inicio*/

for (var i=0; i < compatibility.length; i++) {
	
	var addHTML= "<div id='row-right-col' class='%class%'><li>%data%</li></div>";
	var replacedHTML= addHTML.replace("%data%", compatibility[i]); //escribe el valor del campo compatibilidad para cada producto
    var asignedClass= replacedHTML.replace("%class%", classes[i]); //cambia el nombre de la clase para identificar cada div con el correspondiente producto
	
	
	$("#comp").append(asignedClass);
}

var compatibility1=[ "Compatible*","	Compatible*","	Incompatible"	,"Compatible	","Incompatible"	,"Compatible"		,"iOS 7+"]; 

for (var i=0; i < compatibility1.length; i++) {
	
	var addHTML= "<div id='row-right-col' class='%class%'><li>%data%</li></div>";
	var replacedHTML= addHTML.replace("%data%", compatibility1[i]); //escribe el valor del campo compatibilidad para cada producto
    var asignedClass= replacedHTML.replace("%class%", classes[i]); //cambia el nombre de la clase para identificar cada div con el correspondiente producto
	
	
	$("#comp-1").append(asignedClass);
}

/*SCREEN*/

var screenSize=["1.54 pulgadas"	,"1.56 pulgadas",	"0.96 pulgadas"	,"-",	"1.54 pulgadas",	"1.44 pulgadas"		,"-"]; 

for (var i=0; i < screenSize.length; i++) {
	
	var addHTML= "<div id='row-right-col' class='%class%'><li>%data%</li></div>";
	var replacedHTML= addHTML.replace("%data%", screenSize[i]); //escribe el valor del campo compatibilidad para cada producto
    var asignedClass= replacedHTML.replace("%class%", classes[i]); //cambia el nombre de la clase para identificar cada div con el correspondiente producto
	
	
	$("#screen").append(asignedClass);
}

var screenRes=["240X240",	"240x240",	"-"	,"128X32"	,"128x128",	"128x128",	"96x64"]; 

for (var i=0; i < screenRes.length; i++) {
	
	var addHTML= "<div id='row-right-col' class='%class%'><li>%data%</li></div>";
	var replacedHTML= addHTML.replace("%data%", screenRes[i]); //escribe el valor del campo compatibilidad para cada producto
    var asignedClass= replacedHTML.replace("%class%", classes[i]); //cambia el nombre de la clase para identificar cada div con el correspondiente producto
	
	
	$("#screen-1").append(asignedClass);
}

var screenType=["OLED","	LCD TFT"	,"OLED"	,"OLED"	,"LCD TFT"	,"LCD	","OLED"]; 

for (var i=0; i < screenType.length; i++) {
	
	var addHTML= "<div id='row-right-col' class='%class%'><li>%data%</li></div>";
	var replacedHTML= addHTML.replace("%data%", screenType[i]); //escribe el valor del campo compatibilidad para cada producto
    var asignedClass= replacedHTML.replace("%class%", classes[i]); //cambia el nombre de la clase para identificar cada div con el correspondiente producto
	
	
	$("#screen-2").append(asignedClass);
}

/*DIMENSIONS*/

var thickness=["9 mm",	"12.5 mm","9.9 mm","12.5 mm	","9.8 mm	","9.9 mm"	,"9 mm"]; 

for (var i=0; i < thickness.length; i++) {
	
	var addHTML= "<div id='row-right-col' class='%class%'><li>%data%</li></div>";
	var replacedHTML= addHTML.replace("%data%", thickness[i]); //escribe el valor del campo compatibilidad para cada producto
    var asignedClass= replacedHTML.replace("%class%", classes[i]); //cambia el nombre de la clase para identificar cada div con el correspondiente producto
	
	
	$("#dim").append(asignedClass);
}

var bandWidth=[]; 

for (var i=0; i < bandWidth.length; i++) {
	
	var addHTML= "<div id='row-right-col' class='%class%'><li>%data%</li></div>";
	var replacedHTML= addHTML.replace("%data%", bandWidth[i]); //escribe el valor del campo compatibilidad para cada producto
    var asignedClass= replacedHTML.replace("%class%", classes[i]); //cambia el nombre de la clase para identificar cada div con el correspondiente producto
	
	
	$("#dim-1").append(asignedClass);
}

var weight=["41 g",	"75 g",	"48 g"	,"32 g"	,"49 g",	"56 g",		"35 g"]; 

for (var i=0; i < weight.length; i++) {
	
	var addHTML= "<div id='row-right-col' class='%class%'><li>%data%</li></div>";
	var replacedHTML= addHTML.replace("%data%", weight[i]); //escribe el valor del campo compatibilidad para cada producto
    var asignedClass= replacedHTML.replace("%class%", classes[i]); //cambia el nombre de la clase para identificar cada div con el correspondiente producto
	
	
	$("#dim-2").append(asignedClass);
}

/*PROCESSOR*/

var processorChar=["MTK6260 360MHz",	"MTK6260A 533MHZ",	"MTK6260 360MHz",	"-"	,"MTK6260 360MHz",	"MTK2501 108 MHz",		"-"]; 

for (var i=0; i < processorChar.length; i++) {
	
	var addHTML= "<div id='row-right-col' class='%class%'><li>%data%</li></div>";
	var replacedHTML= addHTML.replace("%data%", processorChar[i]); //escribe el valor del campo compatibilidad para cada producto
    var asignedClass= replacedHTML.replace("%class%", classes[i]); //cambia el nombre de la clase para identificar cada div con el correspondiente producto
	
	
	$("#processor").append(asignedClass);
}

var coreN=["1",	"1"	,"1",	"-"	,"1",	"1"	,	"-"];


for (var i=0; i < coreN.length; i++) {
	
	var addHTML= "<div id='row-right-col' class='%class%'><li>%data%</li></div>";
	var replacedHTML= addHTML.replace("%data%", coreN[i]); //escribe el valor del campo compatibilidad para cada producto
    var asignedClass= replacedHTML.replace("%class%", classes[i]); //cambia el nombre de la clase para identificar cada div con el correspondiente producto
	
	
	$("#processor-1").append(asignedClass);
}

var ramMemo=["128 MB",	"64 MB"	,"-","	-",	"128 MB",	"32 MB"	,	"-"]; 

for (var i=0; i < ramMemo.length; i++) {
	
	var addHTML= "<div id='row-right-col' class='%class%'><li>%data%</li></div>";
	var replacedHTML= addHTML.replace("%data%", ramMemo[i]); //escribe el valor del campo compatibilidad para cada producto
    var asignedClass= replacedHTML.replace("%class%", classes[i]); //cambia el nombre de la clase para identificar cada div con el correspondiente producto
	
	
	$("#processor-2").append(asignedClass);
	
}
/*CHARACTERISTICS*/

var alarm=["Sí",	"Sí"	,"-",	"-"	,"-",	"-",		"Sí"]; 

for (var i=0; i < alarm.length; i++) {
	
	var addHTML= "<div id='row-right-col' class='%class%'><li>%data%</li></div>";
	var replacedHTML= addHTML.replace("%data%",alarm[i]); //escribe el valor del campo compatibilidad para cada producto
    var asignedClass= replacedHTML.replace("%class%", classes[i]); //cambia el nombre de la clase para identificar cada div con el correspondiente producto
	
	
	$("#char").append(asignedClass);
}

var viewContent=["Sí"	,"-",	"Sí",	"Llamadas y SMS"	,"Sí","	-"		,"Sí"]; 

for (var i=0; i < viewContent.length; i++) {
	
	var addHTML= "<div id='row-right-col' class='%class%'><li>%data%</li></div>";
	var replacedHTML= addHTML.replace("%data%", viewContent[i]); //escribe el valor del campo compatibilidad para cada producto
    var asignedClass= replacedHTML.replace("%class%", classes[i]); //cambia el nombre de la clase para identificar cada div con el correspondiente producto
	
	
	$("#char-1").append(asignedClass);
}

var vibration=["Sí",	"-"	,"-"	,"Sí",	"-",	"-"	,	"-"]; 

for (var i=0; i < vibration.length; i++) {
	
	var addHTML= "<div id='row-right-col' class='%class%'><li>%data%</li></div>";
	var replacedHTML= addHTML.replace("%data%", vibration[i]); //escribe el valor del campo compatibilidad para cada producto
    var asignedClass= replacedHTML.replace("%class%", classes[i]); //cambia el nombre de la clase para identificar cada div con el correspondiente producto
	
	
	$("#char-2").append(asignedClass);
}

var gps=[ "No"	,"-"	,"-"	,"No"	,"-"	,"No"	,	"-"]; 

for (var i=0; i < gps.length; i++) {
	
	var addHTML= "<div id='row-right-col' class='%class%'><li>%data%</li></div>";
	var replacedHTML= addHTML.replace("%data%", gps[i]); //escribe el valor del campo compatibilidad para cada producto
    var asignedClass= replacedHTML.replace("%class%", classes[i]); //cambia el nombre de la clase para identificar cada div con el correspondiente producto
	
	
	$("#char-3").append(asignedClass);
}

var multitouch=[]; 

for (var i=0; i < multitouch.length; i++) {
	
	var addHTML= "<div id='row-right-col' class='%class%'><li>%data%</li></div>";
	var replacedHTML= addHTML.replace("%data%",multitouch[i]); //escribe el valor del campo compatibilidad para cada producto
    var asignedClass= replacedHTML.replace("%class%", classes[i]); //cambia el nombre de la clase para identificar cada div con el correspondiente producto
	
	
	$("#char-4").append(asignedClass);
}

var sensor=[]; 

for (var i=0; i < sensor.length; i++) {
	
	var addHTML= "<div id='row-right-col' class='%class%'><li>%data%</li></div>";
	var replacedHTML= addHTML.replace("%data%", sensor[i]); //escribe el valor del campo compatibilidad para cada producto
    var asignedClass= replacedHTML.replace("%class%", classes[i]); //cambia el nombre de la clase para identificar cada div con el correspondiente producto
	
	
	$("#char-5").append(asignedClass);
}

var waterResistance=["Sí",	"-"	,"Sí"	,"No",	"Sí",	"-","No"]; 

for (var i=0; i < waterResistance.length; i++) {
	
	var addHTML= "<div id='row-right-col' class='%class%'><li>%data%</li></div>";
	var replacedHTML= addHTML.replace("%data%", waterResistance[i]); //escribe el valor del campo compatibilidad para cada producto
    var asignedClass= replacedHTML.replace("%class%", classes[i]); //cambia el nombre de la clase para identificar cada div con el correspondiente producto
	
	
	$("#char-6").append(asignedClass);
}

/*CONNECTIVITY*/
var bluetooth=["3.0"	,"3.0	","-"	,"2.1"	,"3.0	","4.0",	"4.0"]; 

for (var i=0; i < bluetooth.length; i++) {
	
	var addHTML= "<div id='row-right-col' class='%class%'><li>%data%</li></div>";
	var replacedHTML= addHTML.replace("%data%", bluetooth[i]); //escribe el valor del campo compatibilidad para cada producto
    var asignedClass= replacedHTML.replace("%class%", classes[i]); //cambia el nombre de la clase para identificar cada div con el correspondiente producto
	
	
	$("#connect").append(asignedClass);
}
var NFC=["No"	,"No",	"No","No",	"No"	,"No",	"No"]; 

for (var i=0; i < NFC.length; i++) {
	
	var addHTML= "<div id='row-right-col' class='%class%'><li>%data%</li></div>";
	var replacedHTML= addHTML.replace("%data%", NFC[i]); //escribe el valor del campo compatibilidad para cada producto
    var asignedClass= replacedHTML.replace("%class%", classes[i]); //cambia el nombre de la clase para identificar cada div con el correspondiente producto
	
	
	$("#connect-1").append(asignedClass);
}


/*BATTERY*/
var batteryCapacity=["250 mAh",	"-"	,"200 mAh"	,"150 mAh",	"-"	,"230 mAh",	"130 mAh"];  

for (var i=0; i < batteryCapacity.length; i++) {
	
	var addHTML= "<div id='row-right-col' class='%class%'><li>%data%</li></div>";
	var replacedHTML= addHTML.replace("%data%", batteryCapacity[i]); //escribe el valor del campo compatibilidad para cada producto
    var asignedClass= replacedHTML.replace("%class%", classes[i]); //cambia el nombre de la clase para identificar cada div con el correspondiente producto
	
	
	$("#bat").append(asignedClass);
}
var batteryDuration=["4 días",	"3 días"	,"2-3 días","1-2 días",	"4 días"	,"-","3 días"]; 

for (var i=0; i < batteryDuration.length; i++) {
	
	var addHTML= "<div id='row-right-col' class='%class%'><li>%data%</li></div>";
	var replacedHTML= addHTML.replace("%data%", batteryDuration[i]); //escribe el valor del campo compatibilidad para cada producto
    var asignedClass= replacedHTML.replace("%class%", classes[i]); //cambia el nombre de la clase para identificar cada div con el correspondiente producto
	
	
	$("#bat-1").append(asignedClass);
}
var baterryType=["Lithium-Ion",	"-",	"-"	,"Lithium-Ion",	"Lithium-Ion","Li-Polymer",		"Lithium-Ion"];  

for (var i=0; i < baterryType.length; i++) {
	
	var addHTML= "<div id='row-right-col' class='%class%'><li>%data%</li></div>";
	var replacedHTML= addHTML.replace("%data%", baterryType[i]); //escribe el valor del campo compatibilidad para cada producto
    var asignedClass= replacedHTML.replace("%class%", classes[i]); //cambia el nombre de la clase para identificar cada div con el correspondiente producto
	
	
	$("#bat-2").append(asignedClass);
}

/*CUSTOMIZATION*/
var interchangeable=["-",	"-","	-"	,"-",	"-"	,"-"	,"-"]; 

for (var i=0; i < interchangeable.length; i++) {
	
	var addHTML= "<div id='row-right-col' class='%class%'><li>%data%</li></div>";
	var replacedHTML= addHTML.replace("%data%", interchangeable[i]); //escribe el valor del campo compatibilidad para cada producto
    var asignedClass= replacedHTML.replace("%class%", classes[i]); //cambia el nombre de la clase para identificar cada div con el correspondiente producto
	
	
	$("#custom").append(asignedClass);
}
