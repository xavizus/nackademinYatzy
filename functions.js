const MAX_DICE = 5


function genereateNewDiceNumbers(maximumDice = 1) {
    let dices = [];
    for (let die = 1; die <= maximumDice; die++) {

        const dieNumber = Math.floor(Math.random() * 6) + 1;
        document.getElementById("dice-" + (die)).className = "dice-" + (dieNumber);

        dices.push(dieNumber);
    }

    return dices;
}

// Roll dice when button is clicked
document.getElementById("rollDice").onclick = () => {
    let dices = genereateNewDiceNumbers(MAX_DICE);

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

function checkFullHouse(dice = [3, 3, 1, 1, 1]) {

    const maxDiceOfSameValue = 3;
    let compareTempDice = {};
    let sumOfSameDice = 0;

    for (die of dice) {
        if (Object.keys(compareTempDice)[0] === undefined) {
            compareTempDice[die] = 1
            continue;
        } else if (Object.keys(compareTempDice)[0] == String(die)) {
            if (compareTempDice[die] < maxDiceOfSameValue) {
                compareTempDice[die]++;
            }
            continue;
        }

        if (Object.keys(compareTempDice)[1] === undefined) {
            compareTempDice[die] = 1
            continue;
        } else if (Object.keys(compareTempDice)[1] === String(die)) {
            if (compareTempDice[die] < maxDiceOfSameValue) {
                compareTempDice[die]++;
            }
        }

    }

    sumOfSameDice = compareTempDice[Object.keys(compareTempDice)[0]] + compareTempDice[Object.keys(compareTempDice)[1]];
    if (sumOfSameDice == MAX_DICE) {
        return true;
    } else {
        return false;
    }
}