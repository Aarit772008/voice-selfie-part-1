var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

var Textbox = document.getElementById("textbox"); 

function start()
{
    Textbox.innerHTML = ""; 
    recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

var Content = event.results[0][0].transcript;

    Textbox.innerHTML = Content;
 speak();
}
function speak(){
    var synth=window.speechSynthesis;
    var speakdata=document.getElementById("textbox").ariaValueMax;
    var speech=new SpeechSynthesisUtterance(speakdata);
    synth.speak(speech);
      Webcam.attach(camera)  
    } 
Webcam.set({
    widht:360,
height:250,
image_format:'png',
png_quality:90
});

var camera=document.getElementById("camera");