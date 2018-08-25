let World = require('./places/inExistence').World;


// tests
let count = 0;
let tester = () => console.log(count++);
setInterval(tester, 1000)
