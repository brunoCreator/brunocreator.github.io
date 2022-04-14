var sec1 = document.getElementById("section1").offsetTop;
var sec2 = document.getElementById("section2").offsetTop;
var sec3 = document.getElementById("section3").offsetTop;
var sec4 = document.getElementById("section4").offsetTop;
var sec5 = document.getElementById("section5").offsetTop;
function parallax() {
  if (window.pageYOffset > sec1 && window.pageYOffset <= sec2) {
      document.getElementById("section2").classList.add('animated', 'bounceInLeft');
  }else {
    document.getElementById("section2").classList.remove('animated', 'bounceInLeft');
  }
  if (window.pageYOffset > sec2 && window.pageYOffset <= sec3) {
      document.getElementById("section3").classList.add('animated', 'bounceInLeft');
  }else{
    document.getElementById("section3").classList.remove('animated', 'bounceInLeft');
  }
  if (window.pageYOffset > sec3 && window.pageYOffset <= sec4) {
      document.getElementById("section4").classList.add('animated', 'bounceInLeft');
  }else{
    document.getElementById("section4").classList.remove('animated', 'bounceInLeft');
  }
  if (window.pageYOffset >= sec4) {
      document.getElementById("section5").classList.add('animated', 'bounceInLeft');
  }else{
    document.getElementById("section5").classList.remove('animated', 'bounceInLeft');
  }
  if (window.pageYOffset == sec1) {
      document.getElementById("section1").classList.add('animated', 'bounceInLeft');
  }else{
    document.getElementById("section1").classList.remove('animated', 'bounceInLeft');
  }
}
window.addEventListener("scroll", parallax,false);

    var images = '.image-container',
    slide = $(images+' img').innerWidth();

function append(){$(images+' img').first().appendTo($(images));}
function prepend(){$(images+' img').last().prependTo($(images));}

$('.prev').click(function(){ prepend(); });
$('.next').click(function(){ append();  });


var imagese = '.image-containere',
slide = $(imagese+' img').innerWidth();

function appende(){$(imagese+' img').first().appendTo($(imagese));}
function prepende(){$(imagese+' img').last().prependTo($(imagese));}

$('.preve').click(function(){ prepende(); });
$('.nexte').click(function(){ appende();  });

var imagesen = '.image-containeren',
slide = $(imagesen+' img').innerWidth();

function appenden(){$(imagesen+' img').first().appendTo($(imagesen));}
function prependen(){$(imagesen+' img').last().prependTo($(imagesen));}

$('.preven').click(function(){ prependen(); });
$('.nexten').click(function(){ appenden ();  });


/*
document.getElementById("section2").classList.add('post visible animated bounceInLeft');
}else{
document.getElementById("section2").classList.remove('post visible animated bounceInLeft');
document.getElementById("section2").classList.add('hidden');
}
*/
