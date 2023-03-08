
var to = '';
var gift_url = '';
var gift_image_url = 'https://scontent.fhan2-3.fna.fbcdn.net/v/t1.15752-9/332889575_603852327852739_6189333062089831371_n.png?_nc_cat=108&ccb=1-7&_nc_sid=ae9488&_nc_ohc=TuRWnEam1YEAX8Bp9xD&_nc_ht=scontent.fhan2-3.fna&oh=03_AdTQ54FAoFgU4KkeGH2dS6BHU_I8E2dRSVfZr9UMAvVdtA&oe=642FC2E3';



var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");


function init() {
  
  var _giftLink, 
      _giftImg;
  
  if (gift_url) {
    _giftLink = document.createElement("a");
    _giftLink.href = gift_url;
    _giftLink.target = "_blank";
    presentImage.appendChild(_giftLink);
  }
  
  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    if(_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }
    
  present.addEventListener("click", function(e){
    present.classList.toggle("open");
    document.getElementById('card').classList.add('cardshow');
  }, false);
  
  
  
  nametag.innerText = to;
}

init();

