function WorldMap() {
  this.places = {};
}
function Place(name, world, indoor) {
  this.name = name;
  this.world = world
  this.connections = {};
  this.isIndoor = indoor;
  this.contains = {};

  this.connectTo = connectedTo => {
    connectedTo.forEach(n => {
      this.connections[n] = this.world[n];
    });
  }
}

function precipitaion(place) {
  if(!place.isIndoor){
    const chance = Math.random * 100;
    //TODO: weather logic
  }
}

module.exports = {
  WorldMap: WorldMap,
  Place: Place
}
