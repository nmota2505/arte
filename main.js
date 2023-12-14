var last_position_of_x, last_position_of_y
color = "black"
width_of_line = 2;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
   
    var width = screen.width;

    new_width = screen.width - 70;
    new_heigth = screen.height -300;
    if(width <992>)
    {
        document.getElementById("myCanvas").width = new_width;
        document.getElementById("myCanvas").height = new_height;
        document.body.style.overflow = "hidden";
        }
    
    canvas.addEventListener("touchstart", my_touchstart);
    
    
    function my_touchstart(e) 
    {
        console.log("my_touchstart");
      //Actividad adicional
      color = document.getElementById("color").value;
      width_of_line = document.getElementById("width_of_line").value;
      //Fin de la actividad adicional
             
        last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
        last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
    }
    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e) 
    {
        console.log("my_touchMove");
    
        current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
        current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
        // Igual que la app pasada de pintar
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
    
        console.log("Última posición de las coordenadas X y Y = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);
    
        console.log("Posición actual de las coordenadas X y Y = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();
    
        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
        // fin de la app pasada de pintar
    }
        // Igual que la app pasada de pintar
    function clearArea() {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }
        
    