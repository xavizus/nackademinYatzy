class score {

    constructor() {
        let score = {
            ones: 0,
            twos: 0,
            threes: 0,
            fours: 0,
            fives: 0,
            sixs: 0,
            sum: 0,
            bonus: 0,
            pair: 0,
            two_pairs: 0,
            three_of_a_kind: 0,
            four_of_a_kind: 0,
            small_straight: 0,
            large_straight: 0,
            full_house: 0,
            chance: 0,
            yatzy: 0,
            total: 0,
        }
    }

    get score() {
        return this.score.total;
    }

    checkOnesToSixes(dice) {

    }

    checkBonus() {

    }

    checkSameOfKinds(dice) {

    }

    checkStraights(dice) {

    }

    checkChance(dice) {

    }

    diceGotScore(dice) {
        let currentDiceScore = 0;

    }

    setScoreFromDice(dice) {
        let highestScore = diceGotScore();
        if (highestScore) {

        }
    }

}