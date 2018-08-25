const core = require('./coreFunctions');

const world = new core.WorldMap();

// create places
world.places.forest = new core.Place('forest', world.places, false);
world.places.cave = new core.Place('cave', world.places, false);
world.places.town = new core.Place('town', world.places, false);
world.places.inn = new core.Place('inn', world.places, true);

// connect places
world.places.forest.connectTo(['cave', 'town']);
world.places.cave.connectTo(['forest']);
world.places.town.connectTo(['forest', 'inn']);
world.places.inn.connectTo(['town']);

module.exports = {World: world}
