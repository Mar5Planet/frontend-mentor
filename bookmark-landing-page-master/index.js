var tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels=document.querySelectorAll(".tabContainer  .tabPanel");

function showPanel(panelIndex) {
    tabButtons.forEach(function(node){
        node.style.borderBottom= '1px solid hsl(229, 8%, 60%)';
        node.style.color= 'hsla(229, 31%, 21%, 0.8)';
    });
    tabButtons[panelIndex].style.borderBottom= '3px solid hsl(0, 94%, 66%)';
    tabButtons[panelIndex].style.color="black";
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="block";
    tabPanels[panelIndex].style.backgroundColor="white";
}
showPanel(0);

  let letter = "h";
  function change() {
    var image = document.getElementById('img');
    var navbar = document.getElementById('navbar');
    var logo = document.getElementById('navbar-brand')
    if (letter ==="h") {
      image.src = 'images/icon-close.svg';
      navbar.style.backgroundColor = 'hsla(229, 31%, 21%,0.9)';
      logo.src = 'images/logo-bookmark2.svg';
      letter = "g";
    }
    else {
      image.src = 'images/icon-hamburger.svg';
      navbar.style.backgroundColor = 'inherit';
      logo.src = 'images/logo-bookmark.svg';
      letter = "h";
    }
  }

  let letter2 = "a";
  function arrowFlip() {
    var arrow = document.getElementById('arrow');
    if (letter2 === "a") {
      arrow.src = "images/icon-arrow2.svg"
      arrow.style.transform= "rotate(180deg)";
      letter2 = "b";
    }
    else {
      arrow.style.transform= "none";
      arrow.src = "images/icon-arrow.svg"
      letter2 = "a";
    }
  }
