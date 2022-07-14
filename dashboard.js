$(".fa-comment").click(function(){
  $("#theMenu").addClass("visible");
});

$(".fa-xmark").click(function(){
  $("#theMenu").removeClass("visible");
});

$(".fa-video").click(function(){
  $("#theStoriesMenu").addClass("visible");
  $("#hideNavbar").addClass("visible");
  $("#reactionsmenu").addClass("visible");
});

$(".fa-arrow-left").click(function(){
  $("#theStoriesMenu").removeClass("visible");
  $("#hideNavbar").removeClass("visible");
  $("#reactionsmenu").removeClass("visible");
});

document.onkeydown = checkKey;

function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '37') {
       $("#prev")[0].click();
    }
    else if (e.keyCode == '39') {
       $("#next")[0].click();
    }
}

// chat menu

