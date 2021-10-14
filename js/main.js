let navbar = document.getElementById('navbar');

window.onscroll = function() {
    if(document.documentElement.scrollTop > 20){
        navbar.classList.add('nav-active')
    }else {
        navbar.classList.remove('nav-active');
    }
}