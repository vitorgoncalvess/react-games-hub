import { Link } from "react-router-dom"
import styles from "./Hub.module.css"

function Hub() {
    const games = [{
        nome: "2048",
        img: "./assets/img/2048.svg",
        link: "/2048"
    }]
    return (
        <div className={styles.hubPage}>
            <div className={styles.hubGrid}>
            {games.map((jogo, index) => (
                <Link className={styles.link} to={jogo.link}>
                    <div key={index} className={styles.gameContainer}><img className={styles.imgJogo} src={jogo.img} alt={jogo.nome}/></div>
                </Link>
            ))}
            </div>
        </div>
    )
}

export default Hub