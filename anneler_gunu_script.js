document.addEventListener('DOMContentLoaded', () => {
    const letter = document.querySelector('.letter');
    
    letter.addEventListener('click', () => {
        letter.classList.toggle('flipped');
    });
}); 