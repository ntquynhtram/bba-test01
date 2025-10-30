//Bìa tập 1//
function createCharacters() {
    const characters = [
        { name: "Leo", level: 15, health: 300 },
        { name: "JR", level: 25, health: 450 },
        { name: "Mike", level: 30, health: 1100 },
    ]
    let charactersPowerUp = characters.map(after => ({
        name: after.name.toUpperCase(),
        level: after.level * 2,
        health: after.health * 3,
    }))
    console.log(charactersPowerUp);

    let possibleWinners = characters.filter(strong => strong.health > 1000);
    console.log(possibleWinners);
};
createCharacters();

//Bài tập 2//
function printLeaderboard() {
    const players = [
        { name: "Luigi", score: 900 },
        { name: "Mario", score: 1000 },
        { name: "Peach", score: 850 },
        { name: "Yoshi", score: 800 },
        { name: "Phong", score: 500 },
    ]
    players.sort((a, b) => b.score - a.score);
    console.log(players);
}
printLeaderboard();
