
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.toggle-link');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const description = this.nextElementSibling;

            if (description.style.display === 'block') {
                description.style.display = 'none';
            } else {
                description.style.display = 'block';
            }
        });
    });
});




