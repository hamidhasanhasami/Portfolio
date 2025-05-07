const icon  = document.querySelector(".icon i");
const navbaar = document.querySelector('nav ul.flex');
const cut = document.querySelector('.close-icon i');

icon.onclick = ()=>{
    icon.classList.toggle('bx-x');
    navbaar.classList.toggle('active');
}

window.onscroll = () =>{
    icon.classList.remove('bx-x');
    navbaar.classList.remove('active');
}

var typed = new Typed('.main_content_span',{
    strings:['Frontend Developer','Web Designer'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
});


cut.addEventListener('click',()=>{
    navbaar.style.display = 'none';  
})


