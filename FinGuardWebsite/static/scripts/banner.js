const images=[
 "ChainBridge.jpg",
 "CardiffBay.jpg",
 "Danube.jpg",
 "EdinburghCastle.jpg",
 "FreedomMonument.jpg",
 "HungarianParliament.jpg",
 "Leadenhall.jpg",
 "MillenniumBridge.jpg",
 "TowerBridge.jpg",
];

let currentimage=0;

function cycleimages(){
    /*currentimage++;
    if( currentimage> images.length-1){
        currentimage = 0;
    }*/
    const imageurl='url(../static/resources/${images[0])';
    document.getElementById("location-banner").style.backgroundImage=imageurl;

}
cycleimages();

/* setinterval(cycleimages,100);     // This is a call-back fucntion, and the first argument should have no arguments.  */