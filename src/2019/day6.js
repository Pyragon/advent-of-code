function part1(contents, split) {
    let planets = {};
    for (let line of split) {
        let [planet, orbiter] = line.split(")");
        if (!planets[planet])
            planets[planet] = {
                name: planet,
                orbiters: [],
                orbiting: '',
            };
        if (!planets[orbiter])
            planets[orbiter] = {
                name: planet,
                orbiters: [],
                orbiting: planet
            };
        planets[orbiter].orbiting = planet;
        planets[planet].orbiters.push(orbiter);
    }
    let total = 0;
    //count total orbits and indirect orbits
    for (let planet in planets)
        total += countTotalOrbits(planets[planet], planets);
    console.log('Answer to part 1: ' + total);
}

function countTotalOrbits(planet, planets) {
    let total = planet.orbiters.length;
    for (let orbiter of planet.orbiters)
        total += countTotalOrbits(planets[orbiter], planets);
    return total;
}

function part2(contents, split) {
    let planets = split.map(s => s.split(')')).reduce((acc, [value, key]) => ({...acc, [key]: value }), {});


}

let chain = [];

function findPath(start, end, planets) {

}

const dijkstra = (graph, source, dest, cbNeighbors) => {
    const allKeys = new Set([source]);
    const nodes = new Set([source]);
    const dist = new Map();
    const prev = new Map();

    const getDist = key => (dist.has(key) ? dist.get(key) : Infinity);
    dist.set(source, 0);

    while (nodes.size) {
        const closest = [...nodes].reduce(minBy(n => getDist(n)));
        if (dest && closest === dest) {
            return [dist.get(dest), toPath(prev, source, dest)];
        }
        nodes.delete(closest);
        const neighbors = cbNeighbors ? cbNeighbors(graph, closest) : graph[closest];
        neighbors.forEach(neighbor => {
            if (!allKeys.has(neighbor)) {
                allKeys.add(neighbor);
                nodes.add(neighbor);
            }
            const alt = getDist(closest) + 1;
            if (alt < getDist(neighbor)) {
                dist.set(neighbor, alt);
                prev.set(neighbor, closest);
            }
        });
    }
};

module.exports = { part1, part2 };