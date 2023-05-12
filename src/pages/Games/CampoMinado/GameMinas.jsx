import ButtonVoltar from "../../../components/ButtonVoltar"
import Credito from "../../../components/Credito"
import styles from "./GameMinas.module.css"

function GameMinas() {
    return (
        <div className={styles.page}>
            <ButtonVoltar backgroundColor={"#F0F656"}/>
            
            <Credito nome={"Vitor Gonçalves"} links={[{link: "https://github.com/vitorgoncalvess", aplicativo: "github"}]}/>
        </div>
    )
}

export default GameMinas