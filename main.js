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
    Webcam.snap(function(data_uri){document.getElementById("result").innerHTML="<img id='capture_img' src="+data_uri+">"})
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
function cam(){
var img=document.getElementById("capture_img")
classifier.classify(img,gotResults)
}
function gotResults(error,results){
if(error){
    console.log(error)
}
else if(results){
    console.log(results)
    document.getElementById("result_emotion_name").innerHTML=results[0].label
    document.getElementById("result_emotion_name_2").innerHTML=results[1].label
    prediction_1=results[0].label
    prediction_2=results[1].label
    ttos()
    if(prediction_1=="happy"){
        document.getElementById("emo").innerHTML="&#128522;"
    }
    if(prediction_2=="happy"){
        document.getElementById("emo_2").innerHTML="&#128522;"
    } 
    
    if(prediction_1=="sad"){
        document.getElementById("emo").innerHTML="&#128532;"
    }

    if(prediction_2=="sad"){
        document.getElementById("emo_2").innerHTML="&#128532;"
    }

    if(prediction_1=="Angry"){
        document.getElementById("emo").innerHTML="&#128548;"
    }

    if(prediction_1=="Angry"){
        document.getElementById("emo_2").innerHTML="&#128548;"
    }
}
}
