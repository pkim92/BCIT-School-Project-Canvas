

function drawCar() {
			var drawCar = document.getElementById("myCanvas").getContext("2d");
			
			drawCar.fillStyle = 'black';
			drawCar.beginPath();
			drawCar.moveTo(80,270);
			drawCar.lineTo(250,290);
			drawCar.lineTo(250,295);
			drawCar.lineTo(80,275);
			drawCar.lineTo(80,270);
			drawCar.closePath();
			drawCar.fill();
			
			//Car hood.
			drawCar.fillStyle = "#e21f23";
			drawCar.beginPath();
			drawCar.moveTo(240,270);
			drawCar.lineTo(80,250);
			drawCar.quadraticCurveTo(100,220,230,210);
			drawCar.quadraticCurveTo(300,205,420,223);
			drawCar.lineTo(470,210);
			drawCar.lineTo(478,223);
			drawCar.lineTo(240,270);
			drawCar.closePath();
			drawCar.stroke();
			drawCar.fill();
			
			//Front Window
			drawCar.fillStyle = "#e8fffc";
			drawCar.beginPath();
			drawCar.moveTo(230,210);
			drawCar.lineTo(250,150);
			drawCar.quadraticCurveTo(320,130,390,150);
			drawCar.lineTo(390,220);
			drawCar.closePath();
			drawCar.fill();
			
			
			//Side Window
			drawCar.fillStyle = "#e8fffc";
			drawCar.beginPath();
			drawCar.moveTo(395,145);
			drawCar.lineTo(395,220);
			drawCar.lineTo(420,223);
			drawCar.lineTo(395,145);
			drawCar.closePath();
			drawCar.fill();
			
			//Space between windows
			drawCar.fillStyle = "#e82236";
			drawCar.beginPath();
			drawCar.moveTo(252,143);
			drawCar.quadraticCurveTo(320,123,395,145);
			drawCar.lineTo(395,220);
			drawCar.lineTo(390,220);
			drawCar.lineTo(390,150);
			drawCar.quadraticCurveTo(320,130,250,150);
			drawCar.lineTo(252,143);
			drawCar.closePath();
			drawCar.fill();
		
			//Car top
			drawCar.fillStyle = "#ff2327";
			drawCar.beginPath();
			drawCar.moveTo(250,143);
			drawCar.quadraticCurveTo(350,108,445,140);
			drawCar.lineTo(440,150);
			drawCar.lineTo(395,145);
			drawCar.quadraticCurveTo(320,123,252,143);
			drawCar.closePath();
			drawCar.fill();
			
			//Car top - right triangle
			drawCar.fillStyle = "#a51222";
			drawCar.beginPath();
			drawCar.moveTo(445,140);
			drawCar.lineTo(448,150);
			drawCar.lineTo(440,150);
			drawCar.lineTo(445,140);
			drawCar.closePath();
			drawCar.fill();
			
			//Car top - top line
			drawCar.fillStyle = "#a51222";
			drawCar.beginPath();
			drawCar.moveTo(445,140);
			
			drawCar.lineTo(395,145);
			drawCar.lineTo(443,150);
			drawCar.lineTo(445,140);
			drawCar.closePath();
			drawCar.fill();

			//Car top - below top line
			drawCar.fillStyle = "#a51222";
			drawCar.beginPath();
			drawCar.moveTo(395,145);
			drawCar.lineTo(449,150);
			drawCar.lineTo(449,155);
			drawCar.lineTo(451,157);
			drawCar.lineTo(395,150);
			drawCar.lineTo(395,145);
			drawCar.closePath();
			drawCar.fill();
			
			//Car beside the side window
			drawCar.fillStyle = "#a51222";
			drawCar.beginPath();
			drawCar.moveTo(440,153);
			drawCar.lineTo(450,155);
			drawCar.lineTo(470,210);
			drawCar.lineTo(460,212);
			drawCar.lineTo(440,153);
			drawCar.closePath();
			drawCar.fill();
			
			// Car far right side window
			drawCar.fillStyle = "#9DE0E8";
			drawCar.beginPath();
			drawCar.moveTo(440,153);
			drawCar.lineTo(460,212);
			drawCar.lineTo(420,223);
			drawCar.lineTo(395,150);
			drawCar.lineTo(440,153);
			drawCar.closePath();
			drawCar.fill();
				
			//Car side
			drawCar.fillStyle = "#CEC9CA";
			drawCar.beginPath();
			drawCar.moveTo(240,270);
			drawCar.quadraticCurveTo(300,270,480,230);
			drawCar.lineTo(480,223);
			drawCar.lineTo(240,270);
			drawCar.closePath();
			drawCar.fill();
			
			//Car trunk top
			drawCar.fillStyle = "#958E93";
			drawCar.beginPath();
			drawCar.moveTo(467,200);
			drawCar.lineTo(464,193);
			drawCar.lineTo(600,190);
			drawCar.lineTo(610,196);
			drawCar.lineTo(467,200);
			drawCar.closePath();
			drawCar.fill();
			
			// side trunk top
			drawCar.fillStyle = "#BAB0B0";
			drawCar.beginPath();
			drawCar.moveTo(480,223);
			drawCar.lineTo(480,230);
			drawCar.lineTo(615,200);
			drawCar.lineTo(610,197);
			drawCar.lineTo(480,223);
			drawCar.closePath();
			drawCar.fill();
			
			//trunk top front
			drawCar.fillStyle = "#991518";
			drawCar.beginPath();
			drawCar.moveTo(470,210);
			drawCar.lineTo(605,192);
			drawCar.lineTo(610,197);
			drawCar.lineTo(478,223);
			drawCar.lineTo(470,210);
			drawCar.closePath();
			drawCar.fill();
			
			//trunk inside
			drawCar.fillStyle ="#5e0d0f";
			drawCar.beginPath();
			drawCar.moveTo(565,197);
			drawCar.lineTo(467,200);
			drawCar.lineTo(470,210);
			drawCar.lineTo(565,197);
			drawCar.closePath();
			drawCar.fill();
			
			
			// Car Front.
			drawCar.fillStyle ="#967373";
			drawCar.beginPath();
			drawCar.moveTo(80,320);
			drawCar.lineTo(250,340);
			drawCar.quadraticCurveTo(260,310,250,295);
			drawCar.lineTo(80,275);
			drawCar.quadraticCurveTo(66,292,80,320);
			drawCar.closePath();
			drawCar.fill();
			
			// car bumper.
			drawCar.fillStyle ="#D0CABC";
			drawCar.beginPath();
			drawCar.moveTo(65,330);
			drawCar.lineTo(265,352);
			drawCar.quadraticCurveTo(265,360,260,365);
			drawCar.lineTo(70,345);
			drawCar.quadraticCurveTo(70,350,65,330);
			drawCar.closePath();
			drawCar.fill();
			
			//car bumper top.
			drawCar.fillStyle ="#EAF1FB";
			drawCar.beginPath();
			drawCar.moveTo(65,330);
			drawCar.lineTo(80,320);
			drawCar.lineTo(250,340);
			drawCar.lineTo(265,352);
			drawCar.moveTo(65,330);
			drawCar.closePath();
			drawCar.fill();
			
			//car side shadow
			drawCar.fillStyle = "#a80505";
			drawCar.beginPath();
			drawCar.moveTo(250,280);
			drawCar.quadraticCurveTo(280,290,300,290);
			drawCar.quadraticCurveTo(350,290,380,330);
			drawCar.quadraticCurveTo(350,290,300,280);
			drawCar.quadraticCurveTo(280,282,250,280);
			drawCar.closePath();
			drawCar.fill();
			
			//Area near the front wheel
			drawCar.fillStyle = "#c41f1f"
			drawCar.beginPath();
			drawCar.moveTo(250,280);
			drawCar.lineTo(250,295);
			drawCar.quadraticCurveTo(260,310,250,340);
			drawCar.lineTo(265,352);
			drawCar.quadraticCurveTo(265,360,260,360);
			drawCar.lineTo(263,360);
			drawCar.lineTo(275,359);
			drawCar.bezierCurveTo(290,285,330,285,345,347);
			drawCar.lineTo(380,338);
			drawCar.lineTo(380,330);
			drawCar.quadraticCurveTo(350,290,300,290);
			drawCar.quadraticCurveTo(280,290,250,280);
			drawCar.closePath();
			drawCar.fill();
			
			//Car left side.
			drawCar.fillStyle = "#d11d1d"
			drawCar.beginPath();
			drawCar.moveTo(250,270);
			drawCar.lineTo(400,248);
			drawCar.lineTo(400,334);
			drawCar.lineTo(380,338);
			drawCar.lineTo(380,330);
			drawCar.quadraticCurveTo(350,290,300,280);
			drawCar.quadraticCurveTo(280,282,250,280);
			drawCar.lineTo(250,270);
			drawCar.closePath();
			drawCar.fill();
			
			//Car middle side.
			drawCar.fillStyle = "#bc1818"
			drawCar.beginPath();
			drawCar.moveTo(400,248);
			drawCar.lineTo(480,230);
			drawCar.lineTo(480,307);
			drawCar.lineTo(400,334);
			drawCar.lineTo(400,248);
			drawCar.closePath();
			drawCar.fill();

			//Lower half of the car.
			drawCar.fillStyle = "#b21717"
			drawCar.beginPath();
			drawCar.moveTo(480,307);
			drawCar.lineTo(555,283);
			drawCar.quadraticCurveTo(570,240,594,267);
			drawCar.quadraticCurveTo(620,260,616,245);
			drawCar.lineTo(615,200);
			drawCar.lineTo(480,230);
			drawCar.lineTo(480,307);
			drawCar.closePath();
			drawCar.fill();
			
			
			//left head light
			drawCar.fillStyle = "#fcf341";
			drawCar.beginPath();
			drawCar.moveTo(80,300);
			drawCar.quadraticCurveTo(90,270,100,300);
			drawCar.quadraticCurveTo(90,330,80,300);
			drawCar.closePath();
			drawCar.fill();
			
			//right head light
			drawCar.fillStyle = "#fcf341";
			drawCar.beginPath();
			drawCar.moveTo(215,315);
			drawCar.quadraticCurveTo(225,350,235,315);
			drawCar.quadraticCurveTo(225,285,215,315);
			drawCar.closePath();
			drawCar.fill();
			
			
			//left front wheel
			drawCar.fillStyle = "#2F2E2D";
			drawCar.beginPath();
			drawCar.moveTo(280,360);
			drawCar.bezierCurveTo(289,295,330,298,335,365);
			drawCar.bezierCurveTo(330,445,275,430,280,360);
			drawCar.closePath();
			drawCar.fill();
			
			//Gap between wheen and car
			drawCar.fillStyle = "#160000";
			drawCar.beginPath();
			drawCar.moveTo(275,359);
			drawCar.bezierCurveTo(290,284,330,284,345,347);
			drawCar.lineTo(333,347);
			drawCar.quadraticCurveTo(310,274,275,359);
			drawCar.closePath();
			drawCar.fill();
			
			//left wheel 3d
			drawCar.fillStyle = "#232325";
			drawCar.beginPath();
			drawCar.moveTo(260,365);
			drawCar.quadraticCurveTo(260,415,290,420);
			drawCar.lineTo(305,419);
			drawCar.quadraticCurveTo(272,408,287,330);
			drawCar.lineTo(275,359);
			drawCar.lineTo(263,360);
			drawCar.closePath();
			drawCar.fill();
			
			//below hood
			drawCar.fillStyle = "#311F2C";
			drawCar.beginPath();
			drawCar.moveTo(250,270);
			drawCar.lineTo(250,295);
			drawCar.lineTo(80,275);
			drawCar.lineTo(80,250);
			drawCar.lineTo(250,270);
			drawCar.closePath();
			drawCar.fill();
			
			//right wheel
			drawCar.fillStyle = "#2F2E2D";
			drawCar.beginPath();
			drawCar.moveTo(100,348);
			drawCar.quadraticCurveTo(125,410,165,355);
			drawCar.lineTo(100,348);
			drawCar.closePath();
			drawCar.fill();
			
			//right wheel 3D
			drawCar.fillStyle = "#311F2C";
			drawCar.beginPath();
			drawCar.moveTo(85,347);
			drawCar.quadraticCurveTo(100,380,115,380);
			drawCar.lineTo(130,381);
			drawCar.quadraticCurveTo(115,378,100,348);
			drawCar.lineTo(85,347);
			drawCar.closePath();
			drawCar.fill();

			//right back wheel
			drawCar.fillStyle = "#2F2E2D";
			drawCar.beginPath();
			drawCar.moveTo(550,285);
			drawCar.quadraticCurveTo(555,320,580,310);
			drawCar.quadraticCurveTo(600,300,594,267);
			drawCar.quadraticCurveTo(570,240,555,283);
			drawCar.lineTo(550,285);
			drawCar.closePath();
			drawCar.fill();
			
			//right back wheel 3D
			drawCar.fillStyle = "#311F2C";
			drawCar.beginPath();
			drawCar.moveTo(540,293);
			drawCar.quadraticCurveTo(546,313,555,312);
			drawCar.lineTo(565,312);
			drawCar.quadraticCurveTo(552,300,550,283);
			drawCar.lineTo(540,287);
			drawCar.closePath();
			drawCar.fill();
}

// ------BEGINNING OF SHAM'S CODE------
var ctx = document.getElementById("myCanvas").getContext("2d");
var slider = document.getElementById("myRange");

//Updating slider input.
slider.oninput = function () {
    clearInterval(interval);
    interval = setInterval(function(){
        drawSmoke();
        drawCar();
    }, this.value)
};
//Setting the interval value.
var interval = setInterval(function() {
    drawSmoke();
    drawCar();
},slider.value);

//X,Y,and radius for all circles.
var x1 = Math.floor(Math.random() * 4) + 600;
var y1 = 275;
var x2 = 620;
var y2 = 270;
var x3 = Math.floor(Math.random() * 4) + 595;
var y3 = 255;
var x4 = 620;
var y4 = 260;
var x5 = 600;
var y5 = 270;
var rad1 = Math.floor((Math.random() * 10) + 12);
var rad2 = Math.floor((Math.random() * 10) + 12);
var rad3 = Math.floor((Math.random() * 10) + 12);
var rad4 = Math.floor((Math.random() * 10) + 12);
var rad5 = Math.floor((Math.random() * 10) + 12);


function drawSmoke() {
    
    var circle = document.getElementById("myCanvas").getContext("2d");

    
    ctx.clearRect(0, 0, ctx.canvas.width,ctx.canvas.height);

    circle.beginPath();
    circle.arc(x1, y1, rad1, 0, 2 * Math.PI);
    circle.stroke();
    circle.fillStyle = "grey";
    circle.fill();
    
    circle.beginPath();
    circle.arc(x2, y2, rad2, 0, 2 * Math.PI);
    circle.stroke();
    circle.fillStyle = "grey";
    circle.fill();
    
    circle.beginPath();
    circle.arc(x3, y3, rad3, 0, 2 * Math.PI);
    circle.stroke();
    circle.fillStyle = "grey";
    circle.fill();
    
    circle.beginPath();
    circle.arc(x4, y4, rad4, 0, 2 * Math.PI);
    circle.stroke();
    circle.fillStyle = "grey";
    circle.fill();
    
    circle.beginPath();
    circle.arc(x5, y5, rad5, 0, 2 * Math.PI);
    circle.stroke();
    circle.fillStyle = "grey";
    circle.fill();
        drawCar();

    
     
    //Animates the smoke.
    x1 += 2;
    y1 -= 2;
    x2 += 2;
    y2 -= 2;
    x3 += 2.5;
    y3 -= 2;
    x4 += 2;
    y4 -= 2;
    x5 += 1;
    y5 -= 2;
    
    circle.globalAlpha = 0.7;
    
    if(x1 > ctx.canvas.width + 35){
        x1 = Math.floor(Math.random() * 4) + 600;
        rad1 = Math.floor((Math.random() * 10) + 12);
        y1 = 265;

       }
    if(x2 > ctx.canvas.width + 35){
       x2 = Math.floor(Math.random() * 4) + 595;
        rad2 = Math.floor((Math.random() * 10) + 12);
        y2 = 270;

       }
    if(x3 > ctx.canvas.width + 35){
       x3 = Math.floor(Math.random() * 4) + 610;
        rad3 = Math.floor((Math.random() * 10) + 12);
        y3 = 255;
       }
    if(x4 > ctx.canvas.width + 35){
       x4 = Math.floor(Math.random() * 4) + 610;
        rad4 = Math.floor((Math.random() * 10) + 12);
        y4 = 270;
       }
     if(x5 > ctx.canvas.width + 35){
       x5 = Math.floor(Math.random() * 4) + 605;
         rad5 = Math.floor((Math.random() * 10) + 12);
        y5 = 270;
       }
    
}
// ------END OF SHAM'S CODE------