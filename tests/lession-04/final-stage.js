function findPairDivisbleBy17() {
    let count = 1;
    for (let i = 1; i <= 100; i++) {
        for (let j = 1; j <= 100; j++) {
            let total = (i + j);
            if (total % 17 === 0) {
                console.log(`(${i},${j})`, count++);
            }
        }
    }
}
findPairDivisbleBy17()