import styles from "./Game2048.module.css"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { useState, useEffect } from "react"
import ButtonVoltar from "../../../components/ButtonVoltar"
import Credito from "../../../components/Credito"

function Game2048() {
    const [points, setPoints] = useState(0)
  const [maxPoints, setMaxPoints] = useState(0)
  const [grid, setGrid] = useState([
    2,2,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0
  ])
  const [canPlay, setCanPlay] = useState(true)

  function shuffleGrid() {
    const gridNew = [
      2,2,0,0,
      0,0,0,0,
      0,0,0,0,
      0,0,0,0
    ]
    const sortedGrid = gridNew.sort(() => Math.random() - 0.5);
    setGrid([...sortedGrid])
    setPoints(0)
    setCanPlay(true)
  }

  function listToMatrix(list, elementsPerSubArray) {
    var matrix = [], i, k;

    for (i = 0, k = -1; i < list.length; i++) {
        if (i % elementsPerSubArray === 0) {
            k++;
            matrix[k] = [];
        }

        matrix[k].push(list[i]);
    }
    return matrix;
}

function moverBlocosEsquerda() {
  const newGrid = listToMatrix([...grid], 4);
  for (let y = 0; y < 4; y++) {
    let nextPos = 0;
    for (let x = 0; x < 4; x++) {
      if (newGrid[y][x] !== 0) {
        if (x > 0 && newGrid[y][nextPos-1] === newGrid[y][x]) {
          setPoints(points + (newGrid[y][nextPos-1] *= 2));
          newGrid[y][x] = 0;
        } else {
          newGrid[y][nextPos] = newGrid[y][x];
          if (x !== nextPos) {
            newGrid[y][x] = 0;
          }
          nextPos++;
        }
      }
    }
  }
  const flatGrid = newGrid.flat();
  setGrid(flatGrid);
  newBloco(flatGrid);
  endGame(flatGrid)
}

function moverBlocosBaixo() {
  const newGrid = listToMatrix([...grid], 4);
  for (let x = 0; x < 4; x++) {
    let nextPos = 3;
    for (let y = 3; y >= 0; y--) {
      if (newGrid[y][x] !== 0) {
          if (nextPos < 3 && newGrid[nextPos + 1][x] === newGrid[y][x]) {
            setPoints(points + (newGrid[nextPos + 1][x] *= 2));
            newGrid[y][x] = 0;
          } else {
            newGrid[nextPos][x] = newGrid[y][x];
            if (y !== nextPos) {
              newGrid[y][x] = 0;
            }
            nextPos--;
          }
      }
    }
  }
  const flatGrid = newGrid.flat();
  setGrid(flatGrid);
  newBloco(flatGrid)
  endGame(flatGrid)
}



function moverBlocosCima() {
  const newGrid = listToMatrix([...grid], 4);
  for (let x = 0; x < 4; x++) {
    let nextPos = 0;
    for (let y = 0; y < 4; y++) {
      if (newGrid[y][x] !== 0) {
        if (nextPos > 0 && newGrid[nextPos-1][x] === newGrid[y][x]) {
          setPoints(points + (newGrid[nextPos - 1][x] *= 2));
          newGrid[y][x] = 0;
        } else {
          newGrid[nextPos][x] = newGrid[y][x];
          if (y !== nextPos) {
            newGrid[y][x] = 0;
          }
          nextPos++;
        }
      }
    }
  }
  const flatGrid = newGrid.flat();
  setGrid(flatGrid);
  newBloco(flatGrid)
  endGame(flatGrid)
}


function moverBlocosDireita() {
  const newGrid = listToMatrix([...grid], 4);
  for (let y = 0; y < 4; y++) {
    let nextPos = 3;
    for (let x = 3; x >= 0; x--) {
      if (newGrid[y][x] !== 0) {
        if (x < 3 && newGrid[y][nextPos + 1] === newGrid[y][x]) {
          setPoints(points + (newGrid[y][nextPos + 1] *= 2));
          newGrid[y][x] = 0;
        } else {
          newGrid[y][nextPos] = newGrid[y][x];
          if (x !== nextPos) {
            newGrid[y][x] = 0;
          }
          nextPos--;
        }
      }
    }
  }
  const flatGrid = newGrid.flat();
  setGrid(flatGrid);
  newBloco(flatGrid)
  endGame(flatGrid)
}

  function newBloco(grid) {
    const gridNew = grid
    let nums = []
    for (let x = 0; x < gridNew.length; x++) {
      if (gridNew[x] === 0) {
        nums.push(x)
      }
    }
    let pos = Math.floor(Math.random() * nums.length)
    gridNew[nums[pos]] = 2
    setGrid(gridNew)
  }

  function endGame(grid) {
    const gridNew = grid
    var hasEnded = true
    for (let x = 0; x < gridNew.length; x++) {
      if (gridNew[x] === 0) {
        hasEnded = false
      }
    }
    if (hasEnded) {
      setCanPlay(false)
    }
  }

  function keyHandler(e) {
    if (canPlay) {
      if (e.keyCode === 37) {
        moverBlocosEsquerda()
      } else if (e.keyCode === 38) {
        moverBlocosCima()
      } else if (e.keyCode === 39) {
        moverBlocosDireita()
      } else if (e.keyCode === 40) {
        moverBlocosBaixo()
      }
    }
  }


  useEffect(() => {
    shuffleGrid()
  }, [])

  useEffect(() => {
    if (points >= maxPoints) {
      setMaxPoints(points)
    }
    // eslint-disable-next-line
  }, [points])

  useEffect(() => {
    window.addEventListener("keyup", keyHandler)
    return () => {
      window.removeEventListener("keyup", keyHandler)
    }
  })


  function getClass(block) {
    const blockClasses = {
      2: styles.block2,
      4: styles.block4,
      8: styles.block8,
      16: styles.block16,
      32: styles.block32,
      64: styles.block64,
      128: styles.block128,
      256: styles.block256,
      512: styles.block512,
      1024: styles.block1024,
      2048: styles.block2048,
    };
  
    return blockClasses[block] || '';
  }
  

  return (
    <>
    <ButtonVoltar backgroundColor={"#FEECD0"}/>
    <div className={styles.gamePage}> 
      <div className={styles.gameContainer}>
        <div className={styles.gameInfo}>
          <div className={styles.gameName}>2048</div>
          <div className={styles.gamePoints}>
            <div className={styles.gamePoint}>
                <div className={styles.gamePointName}>PONTO</div>
                <div className={styles.points}>{points}</div>
            </div>
            <div className={styles.gamePoint}>
              <div className={styles.gamePointName}>O MELHOR</div>
              <div className={styles.points}>{maxPoints}</div>
            </div> 
          </div>
          <div onClick={() => shuffleGrid(grid)} className={styles.newGame}>Novo Jogo</div>
        </div>
        <div className={styles.gameBox}>
          <div className={styles.gameBlocks}>
          {grid.map(() => (
            <div className={styles.gameBlock}></div>
          ))}
          </div>
          <TransitionGroup className={styles.gameBlocksUp}>
          {grid.map((block, index) => (
            <CSSTransition key={index} timeout={300} classNames={styles.block}>
              <div className={styles.gameBlockUp}>
                {block === 0 ? (
                  <div style={{ display: "none" }}>0</div>
                ) : (
                  <div className={`${styles.block} ${getClass(block)}`}>{block}</div>
                )}
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
          </div>
        </div>
      </div>
      <Credito nome={"Vitor Gonçalves"} links={[{link: "https://github.com/vitorgoncalvess", aplicativo: "github"}]}/>
      </>
  )
}

export default Game2048