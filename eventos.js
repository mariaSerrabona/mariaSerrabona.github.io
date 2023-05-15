//          EVENTO 1: Modo oscuro y Modo claro

const boton_oscuro=document.getElementById("BotonOscuro");
const boton_claro=document.getElementById("BotonClaro");
var imagen_informacion1=document.getElementById("Mates");
var imagen_informacion2=document.getElementById("FotoDatos");

//Cambio al modo oscuro, cambio de fondo y letras más las imágenes de la primera pantalla
function CambiarModoOscuro(color_fondo, color_letras){
    if ( document.URL.includes("informacion.html") || document.URL.includes("Portfolio.html") ){

        document.body.style.backgroundColor = color_fondo;
        document.body.style.color= color_letras;

        //Cambiar el color de los títulos para que destaque mas
        //Se genera una lista con todos los títulos(h2) y se recorren los elementos y se les va cambiando el color
        let titulos=document.getElementsByTagName("h2");
        for(var i=0;i<titulos.length;i++){
            titulos[i].style.color="white";
        }

        if ( document.URL.includes("informacion.html") ) {
            imagen_informacion1.src="https://marvel-b1-cdn.bc0a.com/f00000000100045/www.elmhurst.edu/wp-content/uploads/2021/10/data-science-skills-illustration.jpg";
            imagen_informacion2.src="https://www.cloudyml.com/wp-content/uploads/2022/06/Insurance-Leadspace-Aniamted.gif";
        }
    }

}

//Cambio al modo claro, cambio de fondo y letras más las imágenes de la primera pantalla
function CambiarModoClaro(color_fondo, color_letras){
    if ( document.URL.includes("informacion.html") || document.URL.includes("Portfolio.html") ){
        document.body.style.backgroundColor = color_fondo;
        document.body.style.color= color_letras;

        //Cuando se cambia al modo claro, se reetablecen los títulos a negro
        let titulos=document.getElementsByTagName("h2");
        for(var i=0;i<titulos.length;i++){
            titulos[i].style.color="black";
        }

        if ( document.URL.includes("informacion.html") ) {
            imagen_informacion1.src="https://digitalcreativemind.com/wp-content/uploads/2021/06/Analytics_amp_Data_Science.gif";
            imagen_informacion2.src="https://cdni.iconscout.com/illustration/premium/thumb/data-science-illustration-concept-1457949-1239367.png";
        }
    }
}


//Solo se da la opción del cambio de tema en las dos primeras páginas de HTML
if ( document.URL.includes("informacion.html") || document.URL.includes("Portfolio.html") ){

    boton_oscuro.addEventListener("click", function()  { CambiarModoOscuro("#353232", "#A6A6A6")});
    boton_claro.addEventListener("click", function()  { CambiarModoClaro("#E4E0E4", "black")});

}










//          Alerta: recordatorio de contacto (10" después de recargar la página).


setTimeout(function(){alert("Hey! Si te gusta mi perfil, no dudes en contactar conmigo!")},10000);





















//          EVENTO 2: Scroll hacia arriba


var gotop=document.getElementsByClassName("go-top")[0];

// estética del botón al hacer scroll
window.onscroll=function(){scrollFunction()};

//Función que se realiza al hacer scroll en alguna de las dos primeras páginas de HTML
function scrollFunction() {
    if ( document.URL.includes("informacion.html") ||document.URL.includes("Portfolio.html")) {
        //solo si se hace scroll aparece el botón, de otra manera, desaparece (porque se entiende que estás arriba de la pantalla)
        if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
            gotop.style.display = "block";
        } else {
            gotop.style.display = "none";
        }
    }
}
//función que se lleva a cabo cuando se presiona el botón (ir arriba del todo)
function topFunction() {
    //document.documentElement.scrollTop = 0;
    window.scrollTo(0,0);
}

//Solo se permite hacer scroll en las dos páginas con texto.
if ( document.URL.includes("informacion.html") ||document.URL.includes("Portfolio.html")) {
    gotop.addEventListener("click", function()  { topFunction}, false);

}
















//          EVENTO 3: Validación de formulario

let nombre=document.getElementById("Nombre");
let correo=document.getElementById("email");
let outputNombre=document.getElementById("Validacion");
let formulario =document.getElementById("form");
let asunto=document.getElementById("asunto");
let conjuntoErrores=document.getElementById("Validacion");
let respuesta=document.getElementById("respuesta");

//Solo se ejecuta esta parte del script si estamos en la página relativa al formulario
if (document.URL.includes("Contacta.html")){

    formulario.addEventListener("submit" ,(e)=>{
        let errores=[]
        //Nombre vacío
        if (nombre.value.value==""){
            errores.push("nombre vacío");
        }
        //Nombre muy corto
        if (nombre.value.length <=3){
            errores.push("El campo Nombre es demasiado corto, aporta nombre y apellidos");
        }
        //Nombre muy largo
        if(nombre.value.length> 30){
            errores.push("El campo nombre es demasiado largo. Aporta un nombre y el primer apellido");
        }
        //Asunto demasiado largo
        if (asunto.value.length >=20){
            errores.push("El campo Asunto debe ser más corto");
        }

        //Si hay errores, entonces se muestran al usuario
        if (errores.length >0){
            //Con este comando se evita que el botón envíe directamente los datos, primero los valida
            e.preventDefault();
            conjuntoErrores.innerText="Se han encontrado los siguientes errores: "+"\n"+errores.join('\n');
        //Si no se han encontrado errores, entonces nos muestra una alerta con el nombre, que el formulario ha sido rellenado de forma correcta
        }else {
            alert("Hola, "+nombre.value+"! Gracias por contactar conmigo."+"\n" +"Formulario enviado con éxito! En breves recibirá respuesta.")
        }
    })
}
















//          EVENTO 4: Validación de formulacion por tecla enter

if (document.URL.includes("Contacta.html")){
    //keydown: se ejecuta cuando se presiona una tecla (enter)
    formulario.addEventListener("keydown", function(event) {
        //enter tiene de código de tecla el 13
        //Misma validación que antes
        if (event.keyCode === 13) {
            let errores=[]
            if (nombre.value.value==""){
                errores.push("nombre vacío");
            }
            if (nombre.value.length <=3){
                errores.push("El campo Nombre es demasiado corto, aporta nombre y apellidos");
            }
            if(nombre.value.length> 30){
                errores.push("El campo nombre es demasiado largo. Aporta un nombre y el primer apellido");
            }
            if (asunto.value.length >=20){
                errores.push("El campo Asunto debe ser más corto");
            }
            console.log(errores.length);
            if (errores.length >0){
                e.preventDefault();
                conjuntoErrores.innerText="Se han encontrado los siguientes errores: "+"\n"+errores.join('\n');
            }else {
                alert("Hola, "+nombre.value+"! Gracias por contactar conmigo."+"\n" +"Formulario enviado con éxito! En breves recibirá respuesta.")
            }
        }
    });
}
