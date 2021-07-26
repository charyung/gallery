import { useContext } from "react";
import ModalPictureContext from "../../context/modalPicture";
import styles from "./modal.module.css";

export default function Modal() {
    const { pictureUrl, setPictureUrl } = useContext(ModalPictureContext);
    return (
        <div
            className={styles.modal}
            onClick={() => { setPictureUrl(null); }}
        >
            <img className={styles.image} src={pictureUrl}/>
        </div>
    );
}