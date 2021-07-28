import { useContext } from "react";
import classNames from "classnames";
import ModalPictureContext from "../../context/modalPicture";
import styles from "./modal.module.css";

export default function Modal() {
    const { pictureData, setPictureData } = useContext(ModalPictureContext);
    return (
        <div
            className={styles.modal}
            onClick={() => { setPictureData(null); }}
        >
            <img className={classNames(styles.image, pictureData.isPixel && styles.pixel)} src={pictureData.url}/>
        </div>
    );
}