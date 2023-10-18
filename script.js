$(document).ready(function() {
    const submitButton = $("#submit-button");
    const questions = $(".question");
    const selectedAnswers = [];

    // Fonction pour mélanger un tableau aléatoirement
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Fonction pour mélanger les options de chaque question
    function shuffleOptions() {
        questions.each(function(index, question) {
            const optionsContainer = $(question).find(".options");
            const options = optionsContainer.find(".option");
            shuffleArray(options);

            options.each(function() {
                $(this).appendTo(optionsContainer);
            });
        });
    }

    // Appeler la fonction de mélange au chargement de la page
    // shuffleOptions();

    // Bouton "Mélanger les réponses" pour remélanger
    $("#shuffle-button").click(function() {
        shuffleOptions();
    });

    questions.each(function(index, question) {
        const options = $(question).find(".option img");

        options.click(function() {
            if (!$(question).hasClass("submitted")) {
                if (selectedAnswers[index]) {
                    selectedAnswers[index].removeClass("clicked");
                }
                $(this).addClass("clicked");
                selectedAnswers[index] = $(this);
            }
        });
    });

    submitButton.click(function() {
        let score = 0;

        questions.each(function(index, question) {
            const options = $(question).find(".option img");
            $(question).addClass("submitted");
            options.css("pointer-events", "none");

            options.each(function() {
                const isCorrect = $(this).data("correct") === true;

                if (selectedAnswers[index] && selectedAnswers[index].is($(this))) {
                    if (isCorrect) {
                        $(this).addClass("correct");
                        score += 1;
                    } else {
                        $(this).addClass("incorrect");
                    }
                }
            });
        });

        alert("Votre score est de : " + score + " sur " + questions.length);
    });
});

$(document).ready(function() {
    const v1Button = $("#v1-button");
    const v2Button = $("#v2-button");
    const v3Button = $("#v3-button");
    const v4Button = $("#v4-button");

    v1Button.click(function() {
        window.location.href = "v1.html";
    });

    v2Button.click(function() {
        window.location.href = "v2.html";
    });

    v3Button.click(function() {
        window.location.href = "v3.html";
    });

    v4Button.click(function() {
        window.location.href = "v4.html";
    });
});
