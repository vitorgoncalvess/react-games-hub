import { Link } from "react-router-dom"
import styles from "./Credito.module.css"

function Credito(props) {
    const links = {
        github: "/assets/img/github.png",
        youtube: "/assets/img/youtube.png",
        insta: "/assets/img/insta.webp",
        twitter: "/assets/img/twitter.png",
        linkedin: "/assets/img/linkedin.png"
    }
    return (
        <div className={styles.creditoContainer}>
            <div className={styles.creditoNome}>{props.nome}</div>
            <div className={styles.linksContainer}>
                {props.links.map((link, index) => (
                    <Link to={link.link}>
                        <img key={index} src={links[link.aplicativo]} className={styles.link} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Credito