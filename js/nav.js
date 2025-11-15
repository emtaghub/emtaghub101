document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobileMenu');
    const openBtn = document.getElementById('openMenuBtn');
    const closeBtn = document.getElementById('closeMenuBtn');
    const overlay = document.getElementById('mobileOverlay');
    const toggleButtons = document.querySelectorAll('.mobile-menu-container .toggle-btn');
    const mainNavLinks = document.querySelectorAll('.mobile-menu-container a:not(.toggle-btn)');

    // --- Menu Open/Close Logic ---

    function openMenu() {
        mobileMenu.classList.add('open');
        overlay.classList.add('open');
        document.body.style.overflow = 'hidden'; // Prevent scrolling background content
    }

    function closeMenu() {
        mobileMenu.classList.remove('open');
        overlay.classList.remove('open');
        document.body.style.overflow = ''; // Restore scrolling
    }

    openBtn.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu); // Close when clicking outside menu

    // --- Accordion Logic (Toggle Sub-Menus) ---

    toggleButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Prevent default navigation if it's a menu toggle button
            e.preventDefault(); 
            
            // Get the parent list item (li)
            const parentLi = btn.parentElement;
            // Find the immediate next sibling ul (the sub-menu)
            const subMenu = parentLi.querySelector('ul');

            if (subMenu) {
                // Toggle the 'open' class on the button itself
                btn.classList.toggle('open');
                
                // Toggle display/height of the sub-menu
                if (subMenu.style.display === 'block') {
                    subMenu.style.display = 'none';
                } else {
                    // Close all other open sub-menus at the same level (optional, but cleaner UX)
                    const currentLevelUl = parentLi.parentElement;
                    currentLevelUl.querySelectorAll('ul').forEach(otherSubMenu => {
                        if (otherSubMenu !== subMenu && otherSubMenu.style.display === 'block') {
                            otherSubMenu.style.display = 'none';
                            // Also update the button class of the sibling
                            otherSubMenu.previousElementSibling.classList.remove('open');
                        }
                    });
                    
                    subMenu.style.display = 'block';
                }
            }
        });
    });
    
    // --- Close Menu after clicking a terminal link ---
    mainNavLinks.forEach(link => {
        // Find links that do *not* have a sub-menu right after them
        if (!link.classList.contains('toggle-btn')) {
            link.addEventListener('click', closeMenu);
        }
    });
});
