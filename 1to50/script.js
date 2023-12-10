document.addEventListener("DOMContentLoaded", function () {
    const gameContainer = document.getElementById("game-container");
    let currentTarget = 1;

    const numbers = Array.from({ length: 25 }, (_, index) => index + 1);
    const shuffledNumbers = [...numbers].sort(() => Math.random() - 0.5);

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");

            const numberContainer = document.createElement("div");
            numberContainer.classList.add("number-container");
            numberContainer.innerText = shuffledNumbers[i * 5 + j];

            cell.addEventListener("click", function () {
                const clickedNumber = parseInt(numberContainer.innerText);
                if (clickedNumber === currentTarget) {
                    this.classList.add("clicked");

                    if (currentTarget < 25) {
                        numberContainer.innerText = currentTarget + 25;
                    } else if (currentTarget === 25) {
                        numberContainer.innerText = 50;
                    } else if (currentTarget > 25 && currentTarget <= 50) {
                        this.style.visibility = "hidden";
                    }

                    currentTarget++;

                    if (currentTarget === 51) {
                        alert("Congratulations! You completed the game!");
                    }
                }
            });

            cell.appendChild(numberContainer);
            gameContainer.appendChild(cell);
        }
    }
});
