const  {Game} = require('../src/gameOfLife.js')
let game;

// describe('Any live cell with fewer than two live neighbors dies,', () => {  
//   beforeEach(() => {
//     grid = game.init([[0, 1], [0, 0]]);
//   });
  
//   test('a grid should exist', () => {
//     expect(grid.cells).not.toBeUndefined();
//   });

//   test('a grid can be initialized', () => {
//     expect(grid.cells).toEqual([[0, 1], [0, 0]]);
//   });

//   test('after tick all cells should be dead', () => {
//     game.tick();
//     expect(grid.cells).toEqual([0,0],[0,0])
//   })
// });

describe('Any live cell with fewer than two live neighbors dies,', () => {  
  beforeEach(() => {
    game = new Game([[0, 1], [0, 0]])
  });
  
  test('a game should have cells', () => {
    expect(game.cells).not.toBeUndefined();
  });

  test('after tick all cells should be dead', () => {
    game.tick();
    expect(game.cells).toEqual([[0,0],[0,0]])
  })
});