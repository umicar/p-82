var mouseEvent="empty";
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width=1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
   width=document.getElementById("width").value;
mouseEvent="mouseDown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
mouseEvent="mouseUP";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_x=e.clientX-canvas.offsetLeft;
    current_y=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
      console.log("Current position of x and y coordinates = "); 
      console.log("x = " + current_x + "y = " + current_y);
      ctx.arc(current_x,current_y,20,0,2*Math.PI);
      ctx.stroke();

    }
    last_x=current_x;
    last_y=current_y;
}
function clearArea() {
     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
     }
