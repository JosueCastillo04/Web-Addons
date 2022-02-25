$(document).ready(function () {
 
  
   /* botones del menui responsivo */
   document.getElementById("nav-button1").addEventListener("click", myFunction);
   document.getElementById("nav-button2").addEventListener("click", myFunction);
   document.getElementById("nav-button3").addEventListener("click", myFunction);
   document.getElementById("nav-button4").addEventListener("click", myFunction);
   
    /*  Funcion collapse o para cerrar el nav en dispositivo mobiles por que permanece abiertos*/
   function myFunction() {
    var obj=document.getElementById('collapse');
    obj.click();
  }



  
});