const dashbar = document.getElementById('dash');
const secondnavbtn = document.getElementById('secondnav');
const mainhomepart = document.getElementById('homemain');
const crossbar = document.getElementById('cross');
function ondash(){
   mainhomepart.style.display="none";
   secondnavbtn.style.display="flex";
   dashbar.style.display="none";
   crossbar.style.display="block";


}
function crossbtn(){
    mainhomepart.style.display="flex";
    secondnavbtn.style.display="none";
    dashbar.style.display="block";
    crossbar.style.display="none";


}