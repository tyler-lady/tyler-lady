/*TODO:
on mobile view, the nav should contain a hamburger for the sections, and replace GitHub with an icon
mql.matches, does not change back to false even after its changed. Event Listener(?)
maybe need to use jquery for our attr change
*/

var logoDraft = document.getElementById("logoDraft");
var myNav = document.getElementById("myNav");
//this builds the media query list
var mql = window.matchMedia("(max-width: 900px)");

var navItems = document.getElementsByClassName("sectionLink");
// var gitHubLink = document.getElementById("");

console.log(mql);




//below is new syntax for the $(document).ready method. We simply call the handler. 
$(function() {
  $("#menuButton").hide();
  $("#githubIcon").hide();
  $("#menu").hide();
  $("#exitButton").hide();
  if (mql.matches) {
    $("#menuButton").show();
    $("#githubIcon").show();
  }
  
  $("#menuButton").click(function(){
    $("#menu").slideToggle("slow", function(){
      $("#menuButton").hide();
      $("#exitButton").show();
    })
  })

  $("#exitButton").click(function(){
    $("#menu").slideToggle("slow", function(){
      $("#exitButton").hide();
      $("#menuButton").show();
    })
  })
})

const navUpdate = () => {
  
}



$(document).addEventListener("resize", function(){
  $("#menuButton").hide();
  $("#githubIcon").hide();
  if (window.matchMedia("(max-width: 900px)").matches){
    $("#menuButton").show();
    $("#githubIcon").show();
  }
});

//this works to set the attr to hidden. However, I can't get it to reappear
// const attrChange = () => {
//   for(var i = 0; i < navItems.length; i++){
//     if(navItems){
//       navItems[i].setAttribute("hidden", "true");
//     }
//   }
// }

// const attrOrigin = () => {
//   for(var i = 0; i < navItems.length; i++){
//     if(navItems){
//       navItems[i].setAttribute("hidden", "false");
//     }
//   }
// }


//mediaQuery(mql.matches);

// //mediaQuery(x);
// x.addEventListener(mediaQuery, true)

// var hidden = true;


tester = () => {
console.log(mql, navItems);
}
tester();


$(window).scroll(function() {
    if ($(this).scrollTop() > 0){
      logoDraft.style.display = "none";
    }
    else {
        logoDraft.style.display = "inherit";
    }
});



