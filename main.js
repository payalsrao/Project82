var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;
canvas= document.getElementById('myCanvas');
ctx= canvas.getContext("2d");
color="pink";
width_of_line = 6;
radius_of_circle = 40;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    
    mouseEvent= "mousedown";
   
    color = document.getElementById("color").value;
    width_of_line= document.getElementById("width").value;
        radius_of_circle = document.getElementById("rad").value;
    
}



canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){

   
    current_position_of_x = e.clientX - canvas.offsetLeft;
    current_position_of_y = e.clientY - canvas.offsetTop;
 if (mouseEvent=="mousedown"){
     ctx.beginPath();
     ctx.strokeStyle = color;
     ctx.lineWidth = width_of_line;
     console.log ("Last Position of x and y is as follows: ");
     console.log ("x =" + last_position_of_x + " , " + "y = " + last_position_of_y);
     

     console.log ("Current Position of x and y is as follows: ");
     console.log ("x =" + current_position_of_x + " , " + "y = " + current_position_of_y);
     ctx.arc(current_position_of_x, current_position_of_y,radius_of_circle,0, 2*Math.PI);
          ctx.stroke();
 }
 last_position_of_x=current_position_of_x;
 last_position_of_y= current_position_of_y;
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent= "mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent= "mouseleave";
}
function clearArea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
