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
    return (
        <div className={styles.frame}>
            <img src={pictureData.thumbnail.fields.file.url}/>
            <span className={styles.date}>
                {dateModFuncs[pictureData.dateFormat](new Date(pictureData.creationDate))}
            </span>
        </div>
    );
}