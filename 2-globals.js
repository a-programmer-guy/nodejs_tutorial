// Globals

// __ dirname - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module(file)
// process    - info about env where program is being exectued

console.log(__dirname)

const myInterval = setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
  console.log(date.toLocaleTimeString());
}