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

const form = document.getElementById('contactform');
form.addEventListener("submit", e => {
  e.preventDefault();
 
  fetch(form.action, {
    method : "post",
    body: new FormData(document.getElementById("contactform")),
  }).then(
      response => response.json()
  ).then((html) => {
    document.getElementById('contact-me-text').innerHTML = "Thank You!"
    document.getElementById('submit-button-div').style.display = "none";
    document.getElementById('name').disabled = "true";
    document.getElementById('email').disabled = "true";
    document.getElementById('phone').disabled = "true";
    document.getElementById('message').disabled = "true";
    document.getElementById('thank-you-message').style.display = "block";
  });
});
