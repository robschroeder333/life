function WorldMap() {
  this.places = {};
}
function Place(name, world, indoor) {
  this.name = name;
  this.world = world
  this.connections = {};
  this.isIndoor = indoor;

  this.connectTo = connectedTo => {
    connectedTo.forEach(n => {
      this.connections[n] = this.world[n];
    });
  }
}

module.exports = {
  WorldMap = WorldMap,
  Place = Place
}
