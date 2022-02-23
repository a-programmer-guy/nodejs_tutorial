// console.log('first task')
// setTimeout(() => {
//   console.log('second task')
// }, 0)

// console.log('next task')

console.log('first task')
console.time()
for (let i = 0; i < 10000000; i++ ) {
  const h3 = document.querySelector('h3')
  h3.textContent = `Hey, everyone is waiting on me`
}
console.timeEnd()

console.log('next task')