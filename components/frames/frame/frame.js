import { useContext } from "react";
import ModalPictureContext from "../../../context/modalPicture";
import styles from "./frame.module.css";

const format = (date, format) => (
    new Intl.DateTimeFormat("en", format).format(date)
);

const dateModFuncs = {
    yearOnly: (date) => format(date, { year: "numeric" }),
    yearMonthOnly: (date) => format(date, { year: "numeric", month: "numeric" }),
    fullDate: (date) => format(date, { year: "numeric", month: "numeric", day: "numeric" })
};

export default function Frame({ pictureData }) {
    const { setPictureUrl } = useContext(ModalPictureContext);
    console.log(pictureData);
    
    return (
        <div className={styles.frame}>
            <img
                src={pictureData.thumbnail.fields.file.url}
                onClick={() => {
                    const url = pictureData.image.fields.file.url;
                    setPictureUrl(url);
                }}
                className={styles.picture}
            />
            <span className={styles.date}>
                {dateModFuncs[pictureData.dateFormat](new Date(pictureData.creationDate))}
            </span>
        </div>
    );
}