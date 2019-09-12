const MAX_DICES = 5


function genereateNewDiceNumbers(maximumDices = 1) {
    let dices = [];
    for (let dice = 1; dice <= maximumDices; dice++) {

        const diceNumber = Math.floor(Math.random() * 6) + 1;
        document.getElementById("dice-" + (dice)).className = "dice-" + (diceNumber);

        dices.push(diceNumber);
    }

    return dices;
}

// Roll dice when button is clicked
document.getElementById("rollDice").onclick = () => {
    let dices = genereateNewDiceNumbers(MAX_DICES);

    if (checkFullHouse(dices)) {
        console.log("You got fullhouse");
    }
}

function countYatzyPoints() {
    console.log("Button pressed");
}

document.getElementById("calculateGame").onclick = () => {
    countYatzyPoints();
}

function checkFullHouse(dices = [3, 3, 1, 1, 1]) {

    const maxDicesOfSameValue = 3;
    let compareTempDices = {};
    let sumOfSameDices = 0;

    for (dice of dices) {
        if (Object.keys(compareTempDices)[0] === undefined) {
            compareTempDices[dice] = 1
            continue;
        } else if (Object.keys(compareTempDices)[0] == String(dice)) {
            if (compareTempDices[dice] < maxDicesOfSameValue) {
                compareTempDices[dice]++;
            }
            continue;
        }

        if (Object.keys(compareTempDices)[1] === undefined) {
            compareTempDices[dice] = 1
            continue;
        } else if (Object.keys(compareTempDices)[1] === String(dice)) {
            if (compareTempDices[dice] < maxDicesOfSameValue) {
                compareTempDices[dice]++;
            }
        }

    }

    sumOfSameDices = compareTempDices[Object.keys(compareTempDices)[0]] + compareTempDices[Object.keys(compareTempDices)[1]];
    if (sumOfSameDices == MAX_DICES) {
        return true;
    } else {
        return false;
    }
}