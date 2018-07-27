function WorldMap() {
  this.places = {};
}
function Place(name, world, indoor) {
  this.name = name;
  this.connections = {};
  this.isIndoor = indoor;

  this.connectTo = connectedTo => {
    connectedTo.forEach(n => {
      this.connections[n] = world[n];
    });
  }
}

module.exports = {
  WorldMap = WorldMap,
  Place = Place
}
