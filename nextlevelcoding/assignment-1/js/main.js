// Tutorial 8.4 Collision Detection - Frogger, Xin Xin, 2020. ✨ Special thanks to artist & SUNY Purchase professor Lee Tusman for giving me the idea of using Frogger to teach class and objects ✨

let cars = []; // empty array
let frog1;
let carsNum = 10;
let sceneNum = 0;
let frogLives = 7;

function setup() {
  createCanvas(400, 400);
  
  for (let i = 0; i < carsNum; i++){
    
    cars[i] = new Car (random(width), random(height-100), color(random(255), random(255), random(255)));
    
  }
  
  frog1 = new Frog();
  

}

function draw() {
  background(220);
  
  for (let i = 0; i < carsNum; i++){
    cars[i].body();
    cars[i].move();
    cars[i].checkCollision();
  }
  
  frog1.body();
  frog1.move();
  frog1.home();
  
//    switch (sceneNum) {

//     case 0:

//       console.log('scene 0');

//       break; // stop right here & exit

//     case 1:

//       console.log('scene 1');

//       break;

//     case 2:

//       console.log('scene 2');

//       break;

//   }
  currentFrogLives();
}

function currentFrogLives(){
  for (let i = 0; i < frogLives; i++){
    ellipse(i*20, height-10, 20);
  }
}

class Frog {
  constructor(){
    this.x = width/2;
    this.y = height - 50;
    this.w = 30;
    this.h = 30;
    this.c = color(0,255,0);
  }
  
  body(){
    fill(this.c);
    ellipse(this.x, this.y, this.w, this.h);
  }
  
  move(){
      if (keyIsDown(38)){
    this.y-=3;
  }
  if (keyIsDown(40)){
    this.y+=3;
  }
  }
  
  home(){
    if (this.y < 0){
      sceneNum++;
      this.y = height-50;
    }
    
    if (sceneNum > 2){
      sceneNum = 0;
    }
  }
  
}

class Car {
  
  constructor(x, y, c){ // a special method that creates the car object
    
  this.x = x;
  this.y = y;
  this.w = 50;
  this.h = 35;
  this.c = c;
    
  }
  
  body(){
    fill(this.c);
    rect(this.x, this.y, this.w, this.h);
  }
  
  move(){
    this.x++;
    
    if (this.x > width){
      this.x = 0;
    }
  }
  
  checkCollision(){
    if (frog1.x + frog1.w/2 > this.x && frog1.x < this.x + this.w && frog1.y + frog1.h/2 > this.y && frog1.y < this.y + this.h){
      console.log('bumped!');
      frog1.y = height - 50; // reset frog pos
      frogLives--;
    } 
  }
  
}