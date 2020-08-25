// const game = {
//   init: (initialState) => {
//     this.grid = initialState
//   },
//   grid: [],
//   tick: () => {
//     this.grid = [[0,0], [0,0]]
//   }
// }

class Game {
  constructor(initialState) {
    this.cells = initialState;
  }
  tick() {
    // this.cells.forEach((row, yIndex) => {
    //   row.forEach((cell, xIndex) => {

    //   })
    // })
    this.cells = [[0,0], [0,0]]
    console.log({cells: this.cells})
  }

}
module.exports = {
  Game
}