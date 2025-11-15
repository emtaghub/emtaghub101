/* 1. Mobile Menu Transition (Copied from previous inline style block) */
.mobile-menu {
    transition: transform 0.3s ease-out;
    transform: translateX(-100%);
    z-index: 50;
    width: 80%; 
    max-width: 300px;
}

.mobile-menu.open {
    transform: translateX(0);
}

/* 2. Sub-menu styling for mobile (Accordion functionality) */
.mobile-submenu {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease-in-out;
}

.mobile-submenu.open {
    max-height: 500px; 
}

/* 3. Neon Glow Effect (Desktop: 10px, Soft Cyan) */
.neon-glow {
    filter: drop-shadow(0 0 10px rgba(0, 255, 255, 0.4));
}

/* 4. Mobile Overrides (Matching your original @media (max-width: 600px) CSS) */
@media (max-width: 640px) { 
    
    /* Logo: 60px height, specific padding, softer glow */
    .banner-logo-mobile {
        height: 60px;
        width: auto;
        padding: 10px 0 10px 10px; /* Reduced left padding for edge alignment */
        filter: drop-shadow(0 0 6px rgba(0, 255, 255, 0.4));
    }
    
    /* Title: Smaller text size */
    .banner-title-mobile {
        font-size: 0.9rem !important; /* Overriding Tailwind's default mobile size */
        margin-bottom: 2px;
        line-height: 1.2;
    }
    
    /* Tagline: Smaller text size and hidden to save space */
    .banner-tagline-mobile {
        display: none !important;
    }

    /* Banner Text Wrapper: Ensure text doesn't overflow */
    .banner-text-wrapper {
        flex-shrink: 1; 
        min-width: 0;
    }
}