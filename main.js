//https://teachablemachine.withgoogle.com/models/towbc8zU1/

Webcam.set({
    height:300,
    width:350,
    image_formate: "png",
    png_quality: 90
})

camera = document.getElementById("camera");
Webcam.attach("camera");

function snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_img" src="'+data_uri+'">'
    })
}

console.log("ml5 version" , ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/towbc8zU1/model.json', modelLoaded);
 
function modelLoaded() {
    console.log("modelLoaded");
}