// script.js

// Tableau d'objets représentant les questions, propositions et réponses correctes
const questions = [
    {   //Acer pseudoplatanus
        image: "plante/Acer pseudoplatanus.png",
        options: ["Viburnum opulus", "Herbe aux écouvillons Pennisetum villosum", "Spiraea x arguta", "Acer pseudoplatanus"],
        correctAnswer: 3
    },
    {   //Céanothe Ceanothus x demilianus Gloire de Versailles
        image: "plante/Céanothe Ceanothus x demilianus Gloire de Versailles.png",
        options: ["Cotoneaster franchetii", "Céanothe Ceanothus x demilianus Gloire de Versailles", "Photinia x fraseri 'Red Robin'", "Acer pseudoplatanus"],
        correctAnswer: 1
    },
    {   //Cotoneaster franchetii
        image: "plante/Cotoneaster franchetii.png",
        options: ["Céanothe Ceanothus x demilianus Gloire de Versailles", "Cotoneaster franchetii", "Salvia microphylla", "Spiraea x arguta"],
        correctAnswer: 1
    },
    {   //Euonymus alatus
        image: "plante/Euonymus alatus.png",
        options: ["Spiraea x arguta", "Euonymus alatus", "Viburnum opulus", "Acer pseudoplatanus"],
        correctAnswer: 1
    },
    {   //Fuchsia ' riccartonii'
        image: "plante/Fuchsia riccartonii.png",
        options: ["Viburnum opulus", "Fuchsia ' riccartonii'", "Céanothe Ceanothus x demilianus Gloire de Versailles", "Gattilier vitex agnus castus"],
        correctAnswer: 1
    },
    {   //Gattilier vitex agnus castus
        image: "plante/Gattilier vitex agnus castus.png",
        options: ["Cotoneaster franchetii", "Gattilier vitex agnus castus", "Cotoneaster franchetii", "Viburnum opulus"],
        correctAnswer: 1
    },
    {   //Herbe aux écouvillons Pennisetum villosum
        image: "plante/Herbe aux écouvillons Pennisetum villosum.png",
        options: ["Euonymus alatus", "Fuchsia ' riccartonii'", "Herbe aux écouvillons Pennisetum villosum", "Acer pseudoplatanus"],
        correctAnswer: 2
    }, 
    {   //Photinia x fraseri 'Red Robin'
        image: "plante/Photinia x fraseri Red Robin.png",
        options: ["Salvia microphylla", "Acer pseudoplatanus", "Euonymus alatus", "Photinia x fraseri 'Red Robin'"],
        correctAnswer: 3
    },
    {   // Salvia microphylla
        image: "plante/Salvia microphylla.png",
        options: ["Céanothe Ceanothus x demilianus Gloire de Versailles", "Euonymus alatus", "Cotoneaster franchetii", "Salvia microphylla"],
        correctAnswer: 3
    },
    {   // Spiraea x arguta
        image: "plante/Spiraea x arguta.png",
        options: ["Spiraea x arguta", "Fuchsia ' riccartonii'", "Euonymus alatus", "Gattilier vitex agnus castus"],
        correctAnswer: 0
    },
    {   // Viburnum opulus
        image: "plante/Viburnum opulus.png",
        options: ["Céanothe Ceanothus x demilianus Gloire de Versailles", "Viburnum opulus", "Acer pseudoplatanus", "Salvia microphylla"],
        correctAnswer: 0
    },
    
];

// Variables pour suivre la progression
let numeroQuestion = 0;
let score = 0;


// Fonction pour afficher une nouvelle question
function afficherQuestion() {
    const questionData = questions[numeroQuestion];
    
    // Mettre à jour l'image, la question, et les options de réponse
    document.getElementById("qcmImage").src = questionData.image;

    const form = document.getElementById("qcmForm");
    const inputs = form.querySelectorAll('input[name="answer"]');
    const labels = form.querySelectorAll('label');

    for (let i = 0; i < 4; i++) {
        // Mettre à jour le texte de chaque option sans supprimer l'input radio
        labels[i].innerHTML = `<input type="radio" name="answer" value="${i}"> ${questionData.options[i]}`;
        inputs[i].checked = false; // Réinitialiser l'état coché
    }

    // Réinitialiser le message de résultat
    document.getElementById("resultat").textContent = "";
}



// Fonction pour vérifier la réponse
function verifierReponse() {
    const choix = document.querySelector('input[name="answer"]:checked');

    if (!choix) {
        document.getElementById("resultat").textContent = "Veuillez sélectionner une réponse.";
        return;
    }

    const reponseChoisie = parseInt(choix.value);
    const reponseCorrecte = questions[numeroQuestion].correctAnswer;

    if (reponseChoisie === reponseCorrecte) {
        score++;
        document.getElementById("resultat").textContent = "Bonne réponse !";
        document.getElementById("resultat").style.color = "green";
    } else {
        document.getElementById("resultat").textContent = "Mauvaise réponse.";
        document.getElementById("resultat").style.color = "red";
    }

    // Passer à la question suivante après un délai
    setTimeout(passerQuestionSuivante, 1000); // Délai de 2 secondes avant la prochaine question
}

// Fonction pour passer à la question suivante
function passerQuestionSuivante() {
    numeroQuestion++;

    if (numeroQuestion < questions.length) {
        afficherQuestion(); // Afficher la prochaine question
    } else {
        afficherResultatFinal(); // Afficher le résultat final si toutes les questions sont terminées
    }
}

// Fonction pour afficher le résultat final
function afficherResultatFinal() {
    document.getElementById("qcmForm").style.display = "none"; // Cacher les options
    document.getElementById("resultat").textContent = `T'as fini bg ! Ton score est de ${score}/${questions.length}.`;
    document.getElementById("resultat").style.color = "black";
}

// Charger la première question au chargement de la page
afficherQuestion();
