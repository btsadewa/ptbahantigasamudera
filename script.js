const nav = document.getElementById('nav');

window.addEventListener('scroll', function() {
    posisi = window.scrollY;

    if (posisi >= 60) {
        nav.classList.add('nav-green')
    }else if (posisi <= 60 ) {
        nav.classList.remove('nav-green')
    }
})