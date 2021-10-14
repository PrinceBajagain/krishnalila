const dashbar = document.getElementById('dash');
const secondnavbtn = document.getElementById('secondnav');
const mainhomepart = document.getElementById('homemain');
const down = document.getElementsByClassName('fa-caret-down');
const up = document.getElementsByClassName('fa-caret-up')

dashbar.addEventListener('click',function (){
secondnavbtn.classList.toggle('flex');
secondnavbtn.classList.toggle('hidden');
dashbar.classList.toggle('fa-caret-down');
dashbar.classList.toggle('fa-caret-up');
})

if(window.innerWidth>=594){
   secondnavbtn.style.display="none";
}

