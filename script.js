function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  

document.addEventListener('DOMContentLoaded', function() {
    var words = ["Technology", "Engineering", "Trade", "Science"];
    var currentIndex = 0;
    var changingWord = document.getElementById('changing-word');

    function typeWord(word) {
        let letters = word.split('');
        changingWord.textContent = '';
        letters.forEach((letter, index) => {
            setTimeout(() => {
                changingWord.textContent += letter;
            }, index * 100); // Adjust the time for each letter to appear
        });
    }

    function changeWord() {
        currentIndex = (currentIndex + 1) % words.length;
        changingWord.style.opacity = 0; // Fade out effect
        setTimeout(function() {
            changingWord.style.opacity = 1; // Fade in effect
            typeWord(words[currentIndex]);
        }, 500); // Match this to the CSS transition duration
    }

    setInterval(changeWord, 2000);
    typeWord(words[currentIndex]); // Initialize with the first word
});
