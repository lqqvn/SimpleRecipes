document.addEventListener('DOMContentLoaded', () => {
    // Handle click events for recipe headers to toggle content visibility
    document.querySelectorAll('.recipe-header').forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Handle click events for navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            // Hide all sections
            document.querySelectorAll('section').forEach(section => {
                section.classList.add('hidden');
            });
            // Show target section
            const target = document.querySelector(link.getAttribute('href'));
            target.classList.remove('hidden');

            // Ensure the bottom section is always visible
            document.querySelector('.bottom-section').style.display = 'block';
        });
    });

    // Handle click event for the back button in the recipe detail
    document.getElementById('back-btn').addEventListener('click', () => {
        document.getElementById('recipe-detail').classList.add('hidden');

        // Show all sections except recipe-detail
        document.querySelectorAll('section').forEach(section => {
            section.classList.remove('hidden');
        });

        // Ensure the bottom section is always visible
        document.querySelector('.bottom-section').style.display = 'block';
    });
});
