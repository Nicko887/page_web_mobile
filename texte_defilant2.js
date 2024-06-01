document.addEventListener("DOMContentLoaded", function() {
const texts = [
    "Découvrez une gamme d'outils informatiques innovants pour booster votre productivité !",
    "Simplifiez vos transferts d'argent avec notre service rapide et sécurisé.",
    "Des outils informatiques de qualité professionnelle à des prix imbattables !",
    "Envoyez de l'argent à vos proches en toute tranquillité, où qu'ils soient dans le monde.",
    "Les dernières technologies informatiques à portée de clic, avec des offres spéciales chaque semaine !",
    "Transférez de l'argent en quelques secondes, sans tracas ni frais cachés.",
    "Profitez de notre expertise en informatique pour trouver les solutions adaptées à vos besoins.",
    "Envoyez de l'argent à vos proches en toute sécurité, avec un service clientèle disponible 24/7.",
    "Des outils informatiques pour chaque besoin, que vous soyez un professionnel ou un passionné de technologie.",
    "Faites confiance à notre plateforme pour des transferts d'argent rapides, fiables et abordables."
    // Ajoutez d'autres phrases d'accroche au besoin
];

    let currentIndex = 0;
    const scrollingTextElement = document.querySelector(".scrolling-text p");

    // Durée d'affichage du texte (en millisecondes)
    const displayDuration = 7000;
    // Délai entre l'affichage des textes (en millisecondes)
    const intervalDuration = 2000;

    function displayText() {
        const currentText = texts[currentIndex];
        scrollingTextElement.style.opacity = "0"; // Fait disparaître le texte actuel
        setTimeout(function() {
            scrollingTextElement.textContent = currentText; // Affiche le nouveau texte
            scrollingTextElement.style.opacity = "1"; // Fait apparaître le nouveau texte
            setTimeout(function() {
                scrollingTextElement.style.opacity = "0"; // Fait disparaître le nouveau texte après un certain délai
            }, displayDuration); // Délai avant de faire disparaître le texte
        }, intervalDuration); // Délai avant de faire apparaître le nouveau texte
        // Passage au prochain texte
        currentIndex = (currentIndex + 1) % texts.length;
    }

    // Appeler la fonction pour afficher le premier texte
    displayText();
    // Appeler la fonction à intervalles réguliers pour afficher les autres textes
    setInterval(displayText, intervalDuration + displayDuration); // Changer de texte toutes les 3 secondes (le délai total doit inclure le temps d'apparition et de disparition)
});

