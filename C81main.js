canvas=document.getElementById("canvas1");

ctx=canvas.getContext("2d");
var color="red";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,200, 30, 0, 2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    color=document.getElementById("inputcolor").value;
 console.log(color);

 mouse_x=e.clientX-canvas.offsetLeft;
 mouse_y=e.clientY-canvas.offsetTop;

 circle(mouse_x, mouse_y);
}

function circle(mouse_x, mouse_y){
    
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(mouse_x,mouse_y, 30, 0, 2*Math.PI);
ctx.stroke();

}

function clear_canvas(){
    ctx.clearRect(0,0, canvas.width,canvas.height);
}