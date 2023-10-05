var status="";
var video="";
var detect_object="";

function preload(){
    video=createVideo("video.mp4");
    video.hide();
}

function setup(){
    canvas=createCanvas(580, 380);
    canvas.center();
}

function draw(){
    image(video, 0, 0, 580, 380);
}

function Iniciar(){
    detect_object=ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="Status:detectando objetos...";
}
function modelLoaded(){
    status=true;
    video.loop();
    video.volume(0);
    video.speed(1);
}