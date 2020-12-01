document.addEventListener('DOMContentLoaded', function () {
const grid = document.querySelector('.grid');
const scoreDisplay = document.getElementById('score')
const width = 28; //28 X 28 = 784 squares
let score = 0;


//layout of grid and what is in the squares
//The array has to have 784 items that will make up the squares in the grid
const layout = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
]


//Legend
 // 0 - pac-dots
  // 1 - wall
  // 2 - ghost-lair
  // 3 - power-pellet
  // 4 - empty

 //'square' elements get added here after being created and assigned a class in the loop
  const squares = []

  //draw the grid and render
  function createBoard() {
      for(let i = 0; i < layout.length; i++) {
          const square = document.createElement('div');
          grid.appendChild(square)
          squares.push(square)

          //add layout to the board

          //If index in array is 0
          if(layout[i] === 0)  
          //...add class
          {squares[i].classList.add('pac-dot');}
          else if (layout[i] === 1) 
          {squares[i].classList.add('wall');} 
          else if (layout[i] === 2) 
          {squares[i].classList.add('ghost-lair')}
          else if (layout[i] === 3) 
          {squares[i].classList.add('power-pellet')}
      }
  }


  createBoard()


  //starting position of pac-man

  let pacmanCurrentIndex = 490;

  squares[pacmanCurrentIndex].classList.add('pac-man');

  //Create function to move pac-man
  //Using switch cases, we assign movements for each arrow key
  function movePacman(e) {
    
    squares[pacmanCurrentIndex].classList.remove('pac-man');

    switch(e.keyCode) {

        case 37:
        if(
          pacmanCurrentIndex % width !== 0 &&
          !squares[pacmanCurrentIndex -1].classList.contains('wall') &&
          !squares[pacmanCurrentIndex -1].classList.contains('ghost-lair')
          )
        pacmanCurrentIndex -= 1
        //If pacman is in the left exit space index minus 1, put it in a specific index
        if (squares[pacmanCurrentIndex -1] === squares[363]) {
          pacmanCurrentIndex = 391
        }
        break
      case 38:
        if(
          pacmanCurrentIndex - width >= 0 &&
          !squares[pacmanCurrentIndex -width].classList.contains('wall') &&
          !squares[pacmanCurrentIndex -width].classList.contains('ghost-lair')
          ) 
        pacmanCurrentIndex -= width
        break
      case 39:
        if(
          pacmanCurrentIndex % width < width - 1 &&
          !squares[pacmanCurrentIndex +1].classList.contains('wall') &&
          !squares[pacmanCurrentIndex +1].classList.contains('ghost-lair')
        )
        pacmanCurrentIndex += 1
        //Check if pacman is in the index thats next index is 392, specify for it to appear somewhere else
        if (squares[pacmanCurrentIndex +1] === squares[392]) {
          pacmanCurrentIndex = 364
        }
        break
      case 40:
        if (
          pacmanCurrentIndex + width < width * width &&
          !squares[pacmanCurrentIndex +width].classList.contains('wall') &&
          !squares[pacmanCurrentIndex +width].classList.contains('ghost-lair')
        )
        pacmanCurrentIndex += width
        break

    }

    squares[pacmanCurrentIndex].classList.add('pac-man')

    pacDotEaten();
    powerPelletEaten();
    checkForGameOver();
    checkForWin();


  }


  document.addEventListener('keyup', movePacman)


//What happens when pac-man eats a dot
function pacDotEaten() {
    if(squares[pacmanCurrentIndex].classList.contains('pac-dot')) {
        score++
        scoreDisplay.innerHTML = score
        squares[pacmanCurrentIndex].classList.remove('pac-dot')
    }
}


//What happens when you eat a power pellet
function powerPelletEaten() {
    if(squares[pacmanCurrentIndex].classList.contains('power-pellet')) {
        score+=10
        ghosts.forEach(function(ghost) {ghost.isScared = true})
        setTimeout(unScareGhosts, 5000)
        squares[pacmanCurrentIndex].classList.remove('power-pellet')
    }

}

//make the ghosts stop appearing as aquamarine
function unScareGhosts() {

    ghosts.forEach(function(ghost) {ghost.isScared = false})

}


//Create Our Ghosts Template
class Ghost {
    constructor(className, startIndex, speed) {
        this.className = className;
        this.startIndex = startIndex;
        this.speed = speed;
        this.currentIndex = startIndex;
        this.timerId = NaN;
        this.isScared = false;

    }
}


//all my ghosts
    ghosts = [
    new Ghost('blinky', 348, 100),
    new Ghost('pinky', 376, 100),
    new Ghost('inky', 351, 100),
    new Ghost('clyde', 379, 100)
    ]


//draw ghosts onto grid

ghosts.forEach(function (ghost) { 
    squares[ghost.currentIndex].classList.add(ghost.className)
    squares[ghost.currentIndex].classList.add('ghost')
})

//Move the Ghosts randomly
ghosts.forEach(function(ghost) {moveGhost(ghost)})

//Defining Move Ghost function
function moveGhost(ghost) {
    //Directions it can move
    const directions = [-1, +1, width, -width]
    //Generate a random index within the directions array
    let direction = directions[Math.floor(Math.random() * directions.length)];

    ghost.timerId= setInterval(function() {
        //If the next square your ghost is going, does not contain a wall and a ghost you can go there
        if(!squares[ghost.currentIndex + direction].classList.contains('wall') &&
           !squares[ghost.currentIndex + direction].classList.contains('ghost')
        )
        
        {
        //You can go here
        //Remove all ghost related classes
        squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost')
        //change the currentindex to the new safe square
        ghost.currentIndex += direction
        //redraw the ghost in the new safe space
        squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')

        }
         //else find a new direction to try
        else direction = directions[Math.floor(Math.random() * directions.length)]


        //If the ghost is currently scared
        if(ghost.isScared) {
            squares[ghost.currentIndex].classList.add('scared-ghost')
        }

        if(ghost.isScared && squares[ghost.currentIndex].classList.contains('pac-man')) {
            squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost')
            ghost.currentIndex = ghost.startIndex
            squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
        }
        
        checkForGameOver();

    }, ghost.speed)

}

//check for a game over
function checkForGameOver() {
    if (squares[pacmanCurrentIndex].classList.contains('ghost') &&
      !squares[pacmanCurrentIndex].classList.contains('scared-ghost')) {
      ghosts.forEach(ghost => clearInterval(ghost.timerId))
      document.removeEventListener('keyup', movePacman)
      scoreDisplay.innerHTML = 'Game Over'
    }
  }

//Check for a win
function checkForWin() {
    if (score === 274) {
      ghosts.forEach(ghost => clearInterval(ghost.timerId))
      document.removeEventListener('keyup', movePacman)
      scoreDisplay.innerHTML = "YOU WON DAWG!!!"
    }
}




});

