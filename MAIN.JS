var canvas=document.getElementById("myCanvas");
ctx= canvas.getContext("2d"); //La variable ctx se usa como referencia del lienzo para dibujar
var color="red";

ctx.beginPath(); //usa el comando beginPath() le indica al lienzo que comience a dibujar una figura u objeto.

ctx.strokeStyle=color;  //usa el comando strokeStyle y establece el color del objeto dibujado usando la variable color

ctx.lineWidth=2; //usa el comando lineWidth y ponle un valor de 2 para establecer el ancho de la línea que vamos a dibujar

ctx.arc(200, 200, 40 ,0 , 2*Math.PI);//el comando arc dibuja el circulo, los parametros que usa son : arco(x, y, r, startAngle, endAngle); x - La coordenada horizontal del centro del arco es la coordenada "X"; y - La coordenada vertical del centro del arco es la coordenada "Y"; r - El radio del arco;  startAngle - El ángulo en el que comienza el arco. Este se mide a partir del eje X. endAngle - El ángulo donde termina el arco. Este se mide a partir del eje X.

canvas.addEventListener("mousedown", my_mousedown);//es un escuchador que indica al navegador que este atento a la interacción del usuario.

function my_mousedown(e)
{
    
    
    // crea una variable que se llame color y usa el comando document.getElementById().value para obtener valor del input que tiene el id color
    color=document.getElementById("color").value;
    console.log(color);
    
     mouse_x = e.clientX - canvas.offsetLeft;//vamos a obtener las coordenadas "X" cuando se haga clic en el mouse.
     mouse_y = e.clientY - canvas.offsetTop;//vamos a obtener las coordenadas "Y" cuando se haga clic en el mouse.

    console.log("X = " + mouse_x + " ,Y =  " + mouse_y);
    circle(mouse_x , mouse_y);   //Después de obtener las coordenadas, llamamos a la funcion circle y le mandamos las coordenadas almacenadas en las variables mouse_x y mouse_y
}

//Crea una funcion que se llame circle y que reciba los parametros mouse_x , mouse_y
function circle(mouse_x, mouse_y)
{
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(mouse_x, mouse_y, 40 ,0 , 2*Math.PI);
ctx.stroke();
}
//actividad adicional

function clearArea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}