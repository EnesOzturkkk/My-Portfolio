document.addEventListener('DOMContentLoaded', () => {
    const animatedDivs = document.querySelectorAll('#aboutContent');
    const animatedHeaderButtons = document.querySelectorAll('.headerButtons');
    const skillsDiv = document.querySelectorAll('#skills');
    const socialMedias = document.querySelectorAll('#contactRight');

    const observerOptions = {
        root: null, // relative to the viewport
        rootMargin: '0px', // no margin
        threshold: 0.2 // Trigger when 20% of the item is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // If the div is in the viewport
                entry.target.classList.add('is-visible');
                // Optional: Stop observing once it's animated to save resources
                // observer.unobserve(entry.target); // it blocks more than once in animation.
            } else {
                // Optional: If you want the animation to reset when scrolled out of view, i added.
                entry.target.classList.remove('is-visible');
            }
        });
    }, observerOptions);

    // Observe each animated div
    animatedDivs.forEach(div => {
        observer.observe(div);
    });

    animatedHeaderButtons.forEach(button => {
        observer.observe(button);
    });

    skillsDiv.forEach(skillsDiv=> {
        observer.observe(skillsDiv);
    });

    socialMedias.forEach(socialMedia=> {
        observer.observe(socialMedia);
    });
});