import { useEffect, useState } from "react";
import styles from "./App.module.css"
import "./App.module.css"

function App() {
  const [points, setPoints] = useState(0)
  const [maxPoints, setMaxPoints] = useState(0)
  const [grid, setGrid] = useState([
    2,2,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0
  ])

  function shuffleGrid() {
    const sortedGrid = grid.sort(() => Math.random() - 0.5);
    setGrid([...sortedGrid])
  }

  function keyHandler(e) {
    if (e.keyCode === 37) {
      const newGrid = grid;
      for (let x = 0; x < grid.length; x++) {
        while(newGrid[x-1<0] ? false : newGrid[x-1] === 0) {
          newGrid[x-1] = newGrid[x]
          newGrid[x] = 0;
        }
        setGrid([...newGrid])
      }
      console.log(grid)
    } else if (e.keyCode === 38) {
      console.log("up")
    } else if (e.keyCode === 39) {
      console.log("right")
    } else if (e.keyCode === 40) {
      console.log("down")
    }
  }


  useEffect(() => {
    shuffleGrid()
  }, [])

  useEffect(() => {
    window.addEventListener("keyup", keyHandler)
    return () => {
      window.removeEventListener("keyup", keyHandler)
    }
  }, [])


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
          <div onClick={shuffleGrid} className={styles.newGame}>Novo Jogo</div>
        </div>
        <div className={styles.gameBox}>
          <div className={styles.gameBlocks}>
          {grid.map(() => (
            <div className={styles.gameBlock}></div>
          ))}
          </div>
          <div className={styles.gameBlocksUp}>
          {grid ? grid.map((block) => (
            <div className={styles.gameBlockUp}>{block === 0 ? <div style={{display: "none"}}>0</div> : <div className={getClass(block)}>{block}</div>}</div>
          )) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
