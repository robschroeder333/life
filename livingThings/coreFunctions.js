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
  this.idealConditions = idealConditions; //not needed?
  this.stage = 0;
  this.canBreed = true;
}

function Apple(name, location, idealConditions, growthRate, maturity) {
  Plant.call(this, name, location, idealConditions);
  this.growthRate = growthRate;
  this.maturity = maturity;
  this.breedSeason = 'fall';
  this.breed = () => {
    // spread a certain amount of apples, creating new one after rng
    this.canBreed = false;
  }
  this.description = () => {
    switch (this.stage) {
      case 0:
        return 'It looks like something might be growing here';

      default:
        return 'I dont know';
    }
  }
  this.live = (currentInfo) => {
    if (this.daysAlive < maturity) {
      if (this.daysAlive % this.growthRate === 0) {
        this.stage++;
      }
    } else {
        if (this.canBreed && currentInfo.season === this.breedSeason) {
          this.breed();
        } else {
          if (currentInfo.season !== this.breedSeason) {
            this.canBreed = true;
          }
        }

    }
  }
}

module.exports = {
  Apple: Apple
}
