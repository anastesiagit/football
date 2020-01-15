var t, u;

function draw(){
    var marker = document.getElementById("myCanvas").getContext("2d");
    //  function images(sources, callback){
    //      var image = {};
    //      var loadimage = 0;
    //      var numImages =0;

    //      for(var src in sources ){
    //          numImages++;
    //      }
    //      for(var src in sources){
    //         image[src] = new Image();
    //         image[src].onload = function(){
    //             if(++loadimage >= numImages){
    //                 callback(image);
    //             }
    //         };
    //         image[src].src = source[src];
    //     }
    //  }
    // var source = {
    //     Alves2 : "Alves2.jpg",
    // };
    // images(source, function(image){
    //     marker.drawImage(image.Alves2, 0,0);
        
    // })

    var img = document.getElementById("alve");
     marker.drawImage(img,35,130,120,120);
     var img = document.getElementById("alba");
     marker.drawImage(img,230,130,120,120);
     var img = document.getElementById("arjen");
     marker.drawImage(img,420,130,120,120);
     var img = document.getElementById("bale");
     marker.drawImage(img,600,130,120,120);
     
     var srt = document.getElementById("cavanni");
     marker.drawImage(srt,500,310,115,115);
     var srt = document.getElementById("CR");
     marker.drawImage(srt,300,310,120,120);
     var srt = document.getElementById("gerard");
     marker.drawImage(srt,100,310,120,120);

     var set = document.getElementById("gotze");
     marker.drawImage(set,35,490,120,120);
     var set = document.getElementById("hazard");
     marker.drawImage(set,230,490,120,120);
     var set = document.getElementById("iniesta");
     marker.drawImage(set,420,490,120,120);
     var set = document.getElementById("xabi");
     marker.drawImage(set,600,490,120,120);
   
    fillStyle = "#fff";
    marker.fillRect(34,240,120,23);
    marker.stroke();
    fillStyle = "#fff";
    marker.fillRect(34,240,120,23);
    marker.stroke();

    marker.moveTo(290,0)
    marker.lineTo(290,50)
    marker.stroke();
    marker.moveTo(440,0)
    marker.lineTo(440,50)
    marker.stroke();
    marker.moveTo(290,50)
    marker.lineTo(441,50)
    marker.stroke();
    marker.moveTo(500,0)
    marker.lineTo(500,120)
    marker.stroke();
    marker.moveTo(230,0)
    marker.lineTo(230,120)
    marker.stroke();
    marker.moveTo(230,120)
    marker.lineTo(500,120)
    marker.stroke();
    marker.moveTo(500,820)
    marker.lineTo(500,620)
    marker.stroke();
    marker.moveTo(230,820)
    marker.lineTo(230,620)
    marker.stroke();
    marker.moveTo(230,620) 
    marker.lineTo(500,620)
    marker.stroke();
    marker.moveTo(440,820)
    marker.lineTo(440,700)
    marker.stroke();
    marker.moveTo(290,820)
    marker.lineTo(290,700)
    marker.stroke();
    marker.moveTo(290,700)
    marker.lineTo(441,700)
    marker.stroke();
    marker.moveTo(750,375)
    marker.lineTo(0,375)
    marker.stroke();
    marker.beginPath();
	marker.arc(370,375,90,0,2*Math.PI);
    marker.stroke();
}
window.onload = draw;
function sert(){
    t = document.getElementById('teamone').value;
    t += document.getElementById('firstteam').innerHTML;
    firstteam.innerHTML = teamone.value;
    }
    function sear(){
        u = document.getElementById('teamtwo').value;
        u += document.getElementById('secondteam').innerHTML;
    secondteam.innerHTML = teamtwo.value;
    }   
function player(marking,slidetackle,standtackle,Ballcontrols,dribbling,aggression,reaction,interception,vision,composure,acceleration,stamina,strength,agility,jumping,balance){
     this.marking = marking;
     this.slidetackle = slidetackle;
     this.standtackle = standtackle;
     this.Ballcontrols = Ballcontrols;
     this.dribbling = dribbling;
     this.aggression = aggression;
     this.reaction = reaction;
     this.interception =interception;
     this.vision = vision;
     this.composure = composure;
     this.acceleration = acceleration;
     this.stamina = stamina;
     this.strength = strength;
     this.agility = agility;
     this.jumping = jumping;
     this.balance = balance;
}
function show(){
    t = alve.innerHTML;
    document.getElementById('display').style.display = "block";
    
}