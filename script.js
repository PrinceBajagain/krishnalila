const dashbar = document.getElementById('dash');
const secondnavbtn = document.getElementById('secondnav');
const mainhomepart = document.getElementById('homemain');
const myhome = document.getElementById('home');
const myvideo = document.getElementById('video');
const myabout = document.getElementById('about');
const down = document.getElementsByClassName('fa-caret-down');
const up = document.getElementsByClassName('fa-caret-up');

function videobtn(){
    myhome.classList.add('hidden');
    myvideo.classList.remove('hidden');
    myabout.classList.add('hidden');
}
function homebtn(){
    myhome.classList.remove('hidden');
    myvideo.classList.add('hidden');
    myabout.classList.add('hidden');
}
function aboutbtn(){
    myhome.classList.add('hidden');
    myvideo.classList.add('hidden');
    myabout.classList.remove('hidden');  
}


dashbar.addEventListener('click',function (){
secondnavbtn.classList.toggle('flex');
secondnavbtn.classList.toggle('hidden');
dashbar.classList.toggle('fa-caret-down');
dashbar.classList.toggle('fa-caret-up');
})

if(window.innerWidth>=594){
   secondnavbtn.style.display="none";
}

