document.addEventListener('DOMContentLoaded', () => {
    // Toggle the visibility of recipe content on header click
    document.querySelectorAll('.recipe-header').forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Navigation link click event
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default anchor click behavior

            // Hide all sections
            document.querySelectorAll('section').forEach(section => {
                section.classList.add('hidden');
            });

            // Show the target section
            const target = document.querySelector(link.getAttribute('href'));
            target.classList.remove('hidden');

            // Check if the user navigates back to the homepage
            if (link.getAttribute('href') === '#homepage') {
                showBottomSection();
            }
        });
    });

    // Intro animation
    if (!sessionStorage.getItem('visited')) {
        const introAnimation = document.createElement('div');
        introAnimation.id = 'intro-animation';
        introAnimation.innerHTML = `
            <div class="title">Welcome to Simple Recipes!</div>
            <div class="subtitle">Created by Suzuki Harry</div>
            <!-- Circle Elements -->
            <div class="circle one"></div>
            <div class="circle two"></div>
            <div class="circle three"></div>
            <!-- Square Elements -->
            <div class="square one"></div>
            <div class="square two"></div>
            <div class="square three"></div>
            <!-- Message Elements -->
            <div class="message one">Simple Recipes!</div>
            <div class="message two">Very Cool!</div>
            <div class="message three">Easy and Simple!</div>
            <div class="message four">Find Your Loved Recipes Here!</div>
        `;
        document.body.appendChild(introAnimation);

        sessionStorage.setItem('visited', 'true');

        setTimeout(() => {
            introAnimation.remove();
        }, 5000); // Matches the duration of the animations + delays
    }

    // Real-time search functionality
    document.getElementById('search-input').addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        const recipes = document.querySelectorAll('.recipe');
        let found = false;

        recipes.forEach(recipe => {
            const recipeTitle = recipe.querySelector('h3').textContent.toLowerCase();
            if (recipeTitle.includes(searchTerm)) {
                recipe.style.display = 'block';
                found = true;
            } else {
                recipe.style.display = 'none';
            }
        });

        // Show or hide the "Not Found" message
        if (searchTerm === '' || found) {
            document.querySelector('.not-found').style.display = 'none';
        } else {
            document.querySelector('.not-found').style.display = 'block';
        }
    });

    // Back button functionality for navigation
    document.getElementById('back-button').addEventListener('click', () => {
        // Show all sections
        document.querySelectorAll('section').forEach(section => {
            section.classList.remove('hidden');
        });

        // Ensure the bottom section is visible
        showBottomSection();

        // Clear search input and show all recipes
        document.getElementById('search-input').value = '';
        const recipes = document.querySelectorAll('.recipe');
        recipes.forEach(recipe => {
            recipe.style.display = 'block'; // Show all recipes
        });
        document.querySelector('.not-found').style.display = 'none'; // Hide "Not Found" message
    });
});

// Function to ensure the bottom section is visible
function showBottomSection() {
    const bottomSection = document.querySelector('.bottom-section');
    if (bottomSection) {
        bottomSection.style.display = 'block';
    }
}

