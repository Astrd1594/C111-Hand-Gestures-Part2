var prediction1 = '';
var prediction2 = '';
Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById('camera');
Webcam.attach('camera');
function capture_image(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='hand_picture' src='" + data_uri + "'>"
    });
}
console.log("ML5 Version: " + ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/1Grsbvoty/model.json", loadedtrue);
function loadedtrue(){
    console.log("Model loaded!");
}
function speak(){
    var synth = window.speechSynthesis;
    var speakdata1 = "The first prediction is" + prediction1;
    var speakdata2 = 'The second prediction is' + prediction2;
    var utterThis = new SpeechSynthesisUtterance(speakdata1, speakdata2);
    synth.speak(utterThis);
}