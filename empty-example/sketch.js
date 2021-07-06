function arr2d(row, col) {
  arr = new Array(row);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(col);
  }
  return arr;
}

let grid;
let cols;
let rows;
let resolution = 10;
let next;
let count;
let length = 500;
function setup() {
  createCanvas(length, length);
  cols = width / resolution;
  rows = height / resolution;
  grid = arr2d(cols, rows);
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      grid[i][j] = floor(random(2));
    }
  }
  console.table(grid);
}

function draw() {
  background(0);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * resolution;
      let y = j * resolution;
      if (grid[i][j] == 1) {
        noStroke();
        fill(255);
        //stroke(0);
        rect(x, y, resolution - 1, resolution - 1);
      }
    }
  }
  
  
noStroke();
fill(255);
rect(0, 0,length,resolution*2-1)
noStroke();
rect(0,2*resolution-1,resolution*2-1,length)
rect(length-20,2*resolution-1,resolution*2,length-1)
rect(0, length-20,length,resolution*2)
//*/
  next = arr2d(cols, rows);
  for (let i = 1; i < cols-1; i++) {
    for (let j = 1; j < rows-1; j++) {
      count = grid[i - 1][j - 1] + grid[i - 1][j] + grid[i - 1][j + 1] + grid[i][j - 1] + grid[i][j + 1] + grid[i + 1][j - 1] + grid[i + 1][j] + grid[i + 1][j + 1];
      //console.log(count);
      if (grid[i][j] == 0 && count == 3) {
        next[i][j] = 1;
      } else if (grid[i][j] == 1 && (count < 2 || count > 3)) {
        next[i][j] = 0;
      } else {
        next[i][j] = grid[i][j];
      }

    }
  }
  //console.log(next)
  grid = next;
}