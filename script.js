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
        link.addEventListener('click', () => {
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

    // Back button functionality
    document.getElementById('back-btn').addEventListener('click', () => {
        document.getElementById('recipe-detail').classList.add('hidden');
        document.querySelectorAll('section').forEach(section => {
            section.classList.remove('hidden');
        });

        // Ensure the bottom section is visible when going back
        showBottomSection();
    });
});

// Function to ensure the bottom section is visible
function showBottomSection() {
    document.querySelector('.bottom-section').style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    // Check if the user has visited before during this session
    if (!sessionStorage.getItem('visited')) {
        // Show the intro animation
        const introAnimation = document.createElement('div');
        introAnimation.id = 'intro-animation';
        introAnimation.innerHTML = `
            <div class="title">Welcome to Simple Recipes!</div>
            <div class="subtitle">Made by Harry</div>
        `;
        document.body.appendChild(introAnimation);

        // Set the session storage so the animation doesn't replay
        sessionStorage.setItem('visited', 'true');

        // Remove the animation div after it finishes
        setTimeout(() => {
            introAnimation.remove();
        }, 5000); // Matches the duration of the animations + delays
    }
});
// Search Button
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const backButton = document.getElementById('back-button'); // Add an ID for the back button
    const recipeSections = document.querySelectorAll('section');
    
    function filterRecipes(query) {
        let found = false;
        recipeSections.forEach(section => {
            const recipes = section.querySelectorAll('.recipe');
            let sectionVisible = false;
            
            recipes.forEach(recipe => {
                const title = recipe.querySelector('h3').innerText.toLowerCase();
                if (title.includes(query.toLowerCase())) {
                    recipe.style.display = 'block';
                    sectionVisible = true;
                    found = true;
                } else {
                    recipe.style.display = 'none';
                }
            });
            
            section.style.display = sectionVisible ? 'block' : 'none';
        });
        
        if (!found) {
            document.querySelector('.not-found').style.display = 'block'; // Show "Not Found" message
        } else {
            document.querySelector('.not-found').style.display = 'none'; // Hide "Not Found" message
        }
    }
    
    searchInput.addEventListener('input', () => {
        filterRecipes(searchInput.value);
    });
    
    searchButton.addEventListener('click', () => {
        filterRecipes(searchInput.value);
    });

    backButton.addEventListener('click', () => {
        searchInput.value = ''; // Clear search input
        filterRecipes(''); // Show all recipes
    });
});



// Existing Scripts Below