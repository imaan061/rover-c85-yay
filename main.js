function add(){
background_imgtag = new Image();
background_imgtag.onload = uploadbackground;
background_imgtag.src = background_image;

rover_imgtag = new Image();
rover_imgtag.onload = uploadrover;
rover_imgtag.src = rover_image;

}

function uploadbackground() {
    ctx.drawimage(background_imgtag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawimag(rover_imgtag, rover_X, rover_Y, rover_width, rover_height);
}

Window.addeventlistener("keydown", my_keydown);

function my_keydown(e)
{
    keypressed = e.keycode;
    console.log(keypressed);
    if(keypressed == "38")
    {
         up();
        console.log("up");
    }

    if(keypressed == "40")
    {
         down();
        console.log("down");
    }

    if(keypressed == "37")
    {
         left();
        console.log("left");
    }

    if(keypressed == "39")
    {
         right();
        console.log("right");
    }

}