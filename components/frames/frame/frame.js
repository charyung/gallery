import { useContext } from "react";
import classNames from "classnames";
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

const PIXEL_TYPE = "pixel";

export default function Frame({ pictureData }) {
    const { setPictureData } = useContext(ModalPictureContext);
    
    return (
        <div className={styles.frame}>
            <img
                src={pictureData.thumbnail.fields.file.url}
                onClick={() => {
                    const url = pictureData.image.fields.file.url;
                    const isPixel = pictureData.imageType === PIXEL_TYPE;
                    setPictureData({url, isPixel});
                }}
                className={classNames(styles.picture, pictureData.imageType === PIXEL_TYPE && styles.pixel)}
            />
            <span className={styles.date}>
                {dateModFuncs[pictureData.dateFormat](new Date(pictureData.creationDate))}
            </span>
        </div>
    );
}