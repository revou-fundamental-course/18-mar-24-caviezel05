document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        const slides = document.getElementsByClassName("banner-slide");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex-1].style.display = "block";
        setTimeout(showSlides, 2000); 
    }

    const form = document.querySelector('#contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let destination = document.getElementById('destination').value;

        if (name === '' || email === '' || destination === '') {
            alert('Please fill in all fields');
            return false;
        } else {
            alert('Form submitted successfully');
        }
    });
});
