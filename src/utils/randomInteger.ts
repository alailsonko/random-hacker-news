function randomIntegersArray(len: number, min: number, max: number) {
    const randomsIndexes: number[] = []
    for (let i = 1; i <= len; i++) {
        randomsIndexes.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return randomsIndexes
}
export {
    randomIntegersArray
}