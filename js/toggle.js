document.addEventListener('DOMContentLoaded', function() {
    // ------------------------------------------------------------------
    // 1. MOBILE MENU TOGGLE LOGIC
    // ------------------------------------------------------------------
    const toggleButton = document.getElementById('menuToggle');
    const navMenu = document.getElementById('mainNav');

    if (toggleButton && navMenu) {
        toggleButton.addEventListener('click', function() {
            // Toggles the classes for both the icon and the menu panel
            navMenu.classList.toggle('is-open');
            toggleButton.classList.toggle('is-active');
        });

        // Optional: Close menu when a link is clicked
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('is-open');
                toggleButton.classList.remove('is-active');
            });
        });
    }

    // ------------------------------------------------------------------
    // 2. LIGHTBOX/IMAGE ENLARGEMENT LOGIC (ADDED HERE)
    // ------------------------------------------------------------------
    
    // Note: The image click event is attached via `onclick` in the HTML, 
    // so we only need to define the functions globally.

});

/**
 * Global functions for the Lightbox feature. 
 * They must be defined globally to be accessible by the HTML `onclick` attribute.
 */
function openLightbox(event, imageUrl) {
    // Prevent the browser from navigating to the image URL
    event.preventDefault(); 

    const overlay = document.getElementById('lightbox-overlay');
    const image = document.getElementById('lightbox-image');

    // Set the source of the enlarged image using the link's href
    image.src = imageUrl;

    // Show the lightbox overlay
    overlay.style.display = 'flex';
}

function closeLightbox() {
    // Hide the lightbox overlay
    document.getElementById('lightbox-overlay').style.display = 'none';
    
    // Optional: Reset image source to free up resources
    document.getElementById('lightbox-image').src = '';
}
