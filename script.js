const domTargets = document.querySelectorAll('.target');

// Activate/deactivate menu on click

document.querySelector('.menu').addEventListener('click', () => {

    // Add class change to navbar, menu, and sections

    domTargets.forEach((item) => {

        item.classList.toggle("change");

    });

});

// If user clicks any section, close menu

document.querySelectorAll('.wrapper').forEach((item) => {

    item.addEventListener('click', () => {

        domTargets.forEach((item) => {

            item.classList.remove("change");
    
        });

    });

});