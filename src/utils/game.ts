export const createArray = (n: number) => {
  const array = []
  for (let i = 0; i < n; i++) {
    const random = Math.random() < 0.08 ? 1 : 0
    array.push(random)
  }

  return array
}

export const createMatrix = (n: number, array: number[]) => {
  const matrix: number[][] = []
  for (let i = 0; i < n; i++) {
    const arrayRandom = createArray(array.length)
    matrix.push(arrayRandom)
  }

  return matrix
}

export const playCornwayGame = (matrix: number[][]) => {
  const newMatrix = matrix
  let x = 0
  for(const cols of matrix) {
    let y = 0
    for(const life of cols) {
      const isAlive = life == 1
      if(!isAlive) {
        let lifeAround = getNeighborhood(matrix, x, y)
        if(lifeAround == 3) {
          newMatrix[x][y] = 1
        }
      } else {
        let lifeAround = getNeighborhood(matrix, x, y)
        if(!(lifeAround == 3 || lifeAround == 2)) {
          newMatrix[x][y] = 0
        }
      }
      y++
    }
    x++
  }

  return newMatrix
}

function getNeighborhood(matrix: number[][], x: number, y:number) {
  let lifeAround = 0

  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      const neighborX = x + i;
      const neighborY = y + j;
      if (!(neighborX == x && neighborY == y) && neighborX >= 0 && neighborX < matrix.length && neighborY >= 0 && neighborY < matrix[0].length) {
        lifeAround += matrix[neighborX][neighborY]
      }
    }
  }

  return lifeAround;
}