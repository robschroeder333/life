let worldLoop = (lifeArray, eventsArray) => {
  lifeArray.forEach(ele => {
    ele.addressNeeds();

    if(ele.hasDesires && ele.needsMet){
      ele.pursueDesires();
    }
  });

  eventsArray.forEach(eve => {
    changeWorld(eve);
  });
}

let changeWorld = event => {
  event.trigger(event.conditions);
}
