document.addEventListener('DOMContentLoaded', () => {
    const interactiveBtn = document.getElementById('interactive-btn');

    if (interactiveBtn) {
        interactiveBtn.addEventListener('click', () => {
            // Log interaction to console
            console.log('System Connection button clicked.');
            console.log('Vesper Dynamics Platform: Handshake initiated.');

            // Trigger alert message
            alert('🚀 Connection Initialized Successfully!\n\nWelcome to Vesper Dynamics. The custom digital workspace is active and running.');

            // Add visual feedback to the button
            const originalText = interactiveBtn.textContent;
            interactiveBtn.textContent = '✓ Connected';
            interactiveBtn.style.background = 'linear-gradient(135deg, #fbbf24, #f97316)';
            interactiveBtn.style.color = '#09090b';

            // Reset button text after 3 seconds
            setTimeout(() => {
                interactiveBtn.textContent = originalText;
                interactiveBtn.style.background = '';
                interactiveBtn.style.color = '';
            }, 3000);
        });
    }
});
