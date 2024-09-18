window.addEventListener('scroll', function() {
    let navbar = document.getElementById('navbar');
    if (this.window.scrollY > 0) {
        navbar.classList.add('scrolled');
    }
    else {
        navbar.classList.remove('scrolled');
    }
});

new SimpleLightbox({elements: '#portfolio .row a'});

function formSubmit() {
    document.getElementById('name').disabled = true;
    document.getElementById('name').style.background = "transparent";
    document.getElementById('name').style.border = "2px solid white";

    document.getElementById('email').disabled = true;
    document.getElementById('email').style.background = "transparent";
    document.getElementById('email').style.border = "2px solid white";

    document.getElementById('phone').disabled = true;
    document.getElementById('phone').style.background = "transparent";
    document.getElementById('phone').style.border = "2px solid white";

    document.getElementById('message').disabled = true;
    document.getElementById('message').style.background = "transparent";
    document.getElementById('message').style.border = "2px solid white";

    document.getElementById('submitbutton').disabled = true;
}