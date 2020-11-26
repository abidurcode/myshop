function openmenu() {
    document.getElementById("my-sidemenu").style.display="block";
    document.getElementById("menu-btn").style.display="none";
    document.getElementById("close-btn").style.display="block";
  }
  function closemenu() {
    document.getElementById("my-sidemenu").style.display="none";
    document.getElementById("menu-btn").style.display="block";
    document.getElementById("close-btn").style.display="none";
  }
 function chatopen() {
  document.getElementById("chathere").style.display="block";
 }
 function topback() {
  document.body.scrollTop=0;
  document.documentElement.scrollTop=0;
 }
 function categories() {
   document.getElementById("categories").style.display="grid";
   document.getElementById("categoriesbr").style.borderBottom="2px solid black";
   document.getElementById("brand").style.display="none";
   document.getElementById("brandbr").style.border="none";
   document.getElementById("shopping").style.display="none";
   document.getElementById("shoppingbr").style.border="none";
 }
 function brand() {
   document.getElementById("categories").style.display="none";
   document.getElementById("categoriesbr").style.border="none";
   document.getElementById("brand").style.display="grid";
   document.getElementById("brandbr").style.borderBottom="2px solid black";
   document.getElementById("shopping").style.display="none";
   document.getElementById("shoppingbr").style.border="none";
 }
 function shopping() {
   document.getElementById("categories").style.display="none";
   document.getElementById("categoriesbr").style.border="none";
   document.getElementById("brand").style.display="none";
   document.getElementById("brandbr").style.border="none";
   document.getElementById("shopping").style.display="grid";
   document.getElementById("shoppingbr").style.borderBottom="2px solid black";
 }