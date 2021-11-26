var prediction_1=""
var prediction_2=""

Webcam.set({
    width:350,
    height:455,
    image_format:"png",
    png_quality:90,
})
var camera=document.getElementById("camera")

Webcam.attach("#camera")

function capture(){
    Webcam.snap(function(data_uri){document.getElementById("result").innerHTML="<img src="+data_uri+">"})
}

function ttos(){
    var symth=window.speechSynthesis
    var text1= "First emotion is "+prediction_1 
    var text2="and second emotion is"+prediction_2
    var speech=new SpeechSynthesisUtterance(text1+text2)
    symth.speak(speech)
}
console.log(ml5.version)
var classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/UM9AI1pk4/model.json",modelLoaded)

function modelLoaded(){
    console.log("modelLoaded")
}
