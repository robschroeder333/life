const travelTo = (currentLocation, desiredLocation) => {
  // if a path to the location exists, travel to the next step in the path
}

const mentalMap = {
  paths: {} // investigate further
}

function LivingThing(name, location, static) {
  this.name = name;
  this.location = location;
  this.isStatic = static;
  this.daysAlive = 0;
  this.storedWater = 100;
  this.storedFood = 100;
}

function Plant(name, location, idealConditions) {
  LivingThing.call(this, name, location, true);
  this.idealConditions = idealConditions;
}

function Apple(name, location, idealConditions, growthRate) {
  Plant.call(this, name, location, idealConditions);
  this.growthRate = growthRate;
  this.breedSeason = 2;
  this.breed = () => {
    // spread a certain amount of apples, creating new one after rng
  }
  this.description = () => {
    if (this.daysAlive <= 25) {
      return 'It looks like something might be growing here';
    }
  }
}
