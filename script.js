document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.recipe-header').forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            document.querySelectorAll('section').forEach(section => {
                section.classList.add('hidden');
            });
            const target = document.querySelector(link.getAttribute('href'));
            target.classList.remove('hidden');
        });
    });

    document.getElementById('back-btn').addEventListener('click', () => {
        document.getElementById('recipe-detail').classList.add('hidden');
        document.querySelectorAll('section').forEach(section => {
            section.classList.remove('hidden');
        });
    });
});
