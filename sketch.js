var userUpload;
var lastPixel

function preload(){
    userUpload = loadImage("snap.png");
}

function setup(){
    createCanvas(userUpload.width, userUpload.height);
}

function draw(){
    background(0);
    image(userUpload, 0, 0);
    loadPixels();
    
    for(var row = 0; row < height; row++){
        for(var col = 0; col < width; col++){
            var startingIndex = (col + row * width)*4;
            
            var r = pixels[startingIndex];
            var g = pixels[startingIndex + 1];
            var b = pixels[startingIndex + 2];
            var a = pixels[startingIndex + 3];
            
            if(keyIsPressed){
                if(key=="1"){
                    gray_filter(startingIndex, g, a );
                }
                if(key=="2"){
                    pixels[startingIndex] = 0;
                    pixels[startingIndex + 1] = g;
                    pixels[startingIndex + 2] = 0;
                    pixels[startingIndex + 3] = a;
                }
                if(key=="3"){
                    pixels[startingIndex] = r;
                    pixels[startingIndex + 1] = b;
                    pixels[startingIndex + 2] = g;
                    pixels[startingIndex + 3] = a;
                }
                if(key=="4"){
                  pixels[startingIndex] = r/2;
                  pixels[startingIndex + 1] = g/2;
                  pixels[startingIndex + 2] = b/2;
                  pixels[startingIndex + 3] = a;   
                }
                if(key=="5"){
                  pixels[startingIndex] = r*2;
                  pixels[startingIndex + 1] = g*2;
                  pixels[startingIndex + 2] = b*2;
                  pixels[startingIndex + 3] = a;   
                }
                if(key=="6"){
                  pixels[startingIndex] = 255 - r;
                  pixels[startingIndex + 1] = 255 - g;
                  pixels[startingIndex + 2] = 255 - b;
                  pixels[startingIndex + 3] = a;   
                }
                 if(key=="7"){
                  pixels[startingIndex] = r + row - 50;
                  pixels[startingIndex + 1] = g + col - 300;
                  pixels[startingIndex + 2] = b;
                  pixels[startingIndex + 3] = a;   
                }
                 if(key=="8"){
                  if(startingIndex % 20 == 0)
                  pixels[startingIndex] = 255;
                  pixels[startingIndex + 1] = 0;
                  pixels[startingIndex + 2] = 0;
                  pixels[startingIndex + 3] = a;   
                }
             var lastPixel = pixels.length - 1; 
                  if(key=="9"){
                  pixels[lastPixel - startingIndex - 3] = r;
                  pixels[lastPixel - startingIndex - 2] = g;
                  pixels[lastPixel - startingIndex - 1] = b;
                  pixels[lastPixel - startingIndex - 0] = a;
                }
        }
    }
    }
    
    updatePixels();
}

function gray_filter(startingIndex, g, a){
             pixels[startingIndex + 0] = g; //red
             pixels[startingIndex + 1] = g; //green
             pixels[startingIndex + 2] = g; //blue
             pixels[startingIndex + 3] = a; //alpha
}