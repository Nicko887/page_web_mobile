document.addEventListener("DOMContentLoaded", function() {
    const texts = [
        "Bienvenue sur notre site web votre destination idéale pour les bonnes affaire",
        "découvrez un trésoir de services de qualité",
        "Texte 3 à faire défiler",
        "Entrez dans l'univers de nico et laissez vous guidez"
        // Ajoutez autant de textes que vous le souhaitez
    ];
    let currentIndex = 0;
    const scrollingTextElement = document.querySelector(".scrolling-text p");

    // Temps entre chaque changement de texte (en millisecondes)
    const textChangeInterval = 10000; // Réduit à 10 secondes

    // Vitesse de défilement des textes (en pixels par seconde)
    const scrollSpeed = 200; // Augmenté à 100 pixels par seconde

    function scrollText() {
        scrollingTextElement.textContent = texts[currentIndex];
        const textWidth = scrollingTextElement.offsetWidth;
        const containerWidth = scrollingTextElement.parentNode.offsetWidth;

        // Réinitialise la position de départ pour chaque texte
        scrollingTextElement.style.transform = `translateX(${containerWidth}px)`;

        // Calcul de la durée de l'animation en fonction de la longueur du texte et de la vitesse de défilement
        const animationDuration = (textWidth + containerWidth) / scrollSpeed;

        scrollingTextElement.style.animation = `scroll ${animationDuration}s linear infinite`;

        // Passage au prochain texte
        currentIndex = (currentIndex + 1) % texts.length;
    }

    // Appeler la fonction pour démarrer le défilement immédiatement
    scrollText();
    // Appeler la fonction à intervalles réguliers pour changer de texte
    setInterval(scrollText, textChangeInterval);
});

