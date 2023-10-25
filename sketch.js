 // Global variable to store the classifier
let classifier;

// Label
let label = '알림없음';

let bg;
let bg_ratio;

// Teachable Machine model URL:
let soundModel = 'https://teachablemachine.withgoogle.com/models/67jHNygJe/';

function preload() {
  // Load the model
  classifier = ml5.soundClassifier(soundModel + 'model.json');
  //bg = loadImage('back.jpg');
  bg = loadImage('back.png'); 
}

function setup() {
  createCanvas (597, 417);
  bg_ratio = bg.height/bg.width;
  
  // Start classifying
  // The sound model will continuously listen to the microphone
  classifier.classify(gotResult);
}

function draw() {
  background(255);
  // Draw the label in the canvas
  
  image(bg, 0, 0, 597, 597*bg_ratio);
  
  fill(0);
  textSize(32);
  textAlign(CENTER, CENTER);
  text(label, 520-width /7, height / 7);
  
    strokeWeight(2);
    noFill();
    stroke(232,62,125);
  
  if(label == "물 떨어지는 소리 안내"){
      rect(474, 263, 108, 26);
      ellipse(236, 134, 70, 70);
      ellipse(311, 260, 70, 70);
  }
  
    if(label == "노크 소리 안내"){
      rect(474, 346, 108, 26);
      ellipse(314, 167, 70, 70);

  }
    if(label == "아이 울음소리 안내"){
      rect(474, 318, 108, 26);
      ellipse(390, 274, 70, 70);

  }
    if(label == "가전 알림 소리 안내"){
      rect(474, 291, 108, 26);
      ellipse(126, 134, 70, 70);

  }
    if(label == "아파트 안내 음성 안내"){
      rect(474, 373, 108, 26);
      ellipse(109, 271, 70, 70);
       
  }
  
}


// The model recognizing a sound will trigger this event
function gotResult(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  // console.log(results[0]);
  label = results[0].label;
}
