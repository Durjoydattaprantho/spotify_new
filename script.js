document.addEventListener('DOMContentLoaded', () => {
    const playButtons = document.querySelectorAll('.play-btn');

    playButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.textContent === 'Play') {
                button.textContent = 'Pause';
                // Add functionality to play the song
            } else {
                button.textContent = 'Play';
                // Add functionality to pause the song
            }
        });
    });
});
