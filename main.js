canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");


rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;


background_image="mars.jpg";
rover_image="rover.png";


function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;

    rover_imgTag=new Image();
    rover_imgTag.onload=uploadRover;
    rover_imgTag.src=rover_image;


}
 
function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadRover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){

    keyPressed=e.keyCode;
    console.log("keyPressed is : "+keyPressed);
     
    if(keyPressed=='38'){
       console.log("up key is pressed!!");

       up();

    }
    if(keyPressed=='39'){
        console.log("right key is pressed!!");
 
       right();
 
     }
     if(keyPressed=='37'){
        console.log("left key is pressed!!");
 
        left();
 
     }
     if(keyPressed=='40'){
        console.log("down key is pressed!!");
 
       down();
 
     }
}
function up(){
    if (rover_y >0){
        rover_y=rover_y-10;
        uploadBackground();
        uploadRover();
        
        
    }
}
function down(){
    if (rover_y <=500){
        rover_y=rover_y+10;
        uploadBackground();
        uploadRover();
        
        
    }
}
function right(){
    if (rover_x <=700){
        rover_x=rover_x+10;
        uploadBackground();
        uploadRover();
        
        
    }
}
function left(){
    if (rover_x >0){
        rover_x=rover_x-10;
        uploadBackground();
        uploadRover();
        
        
    }
}