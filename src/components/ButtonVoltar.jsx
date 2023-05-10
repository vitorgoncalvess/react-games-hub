import { Link } from "react-router-dom"
import styles from "./ButtonVoltar.module.css"

function ButtonVoltar(props) {
    return (
        <Link to={"/hub"}>
        <div style={{backgroundColor: props.backgroundColor}} className={styles.buttonContainer}>
            <div>Voltar</div>
        </div>
        </Link>
    )
}

export default ButtonVoltar