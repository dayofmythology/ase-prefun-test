// TODO: Implement your animal race in this file
export default async function animalRace (animals) {
    const promises = [
        animals.snail()
        .then(result => ({result})),
        animals.turtle()
        .then(result => ({result, time: 2000})),
        animals.rabbit()
        .then(result => ({result, time:1000}))
    ];

    const results = await Promise.all(promises);
    results.sort((a,b)=> a.time - b.time);

    return results.map(result => result.result);
}
