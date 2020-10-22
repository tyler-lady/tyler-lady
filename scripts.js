/*TODO:
code script for project descriptions to display onHover over their images 
*/

var logoDraft = document.getElementById("logoDraft");
var myNav = document.getElementById("myNav");

tester = () => {
console.log(logoDraft.style);
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


