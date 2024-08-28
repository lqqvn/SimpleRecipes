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
