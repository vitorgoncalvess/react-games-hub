import { Link } from "react-router-dom"
import styles from "./Hub.module.css"
import json from "./../games.json"

function Hub() {
    return (
        <div className={styles.hubPage}>
            <div className={styles.hubGrid}>
            {json.games.map((jogo, index) => (
                <Link className={styles.link} to={jogo.link}>
                    <div key={index} className={styles.gameContainer}><img className={styles.imgJogo} src={jogo.img} alt={jogo.nome}/></div>
                </Link>
            ))}
            </div>
        </div>
    )
}

export default Hub