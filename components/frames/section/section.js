import Frame from "../frame/frame";
import styles from "./section.module.scss";

export default function Section({ title, data }) {
    const pictures = data.map(entry => <Frame pictureData={entry.fields} key={entry.sys.id}/>);

    return (
        <>
            <h2 className={styles.header}>{title}</h2>
            <hr/>
            <div className={styles.grid}>
                {pictures}
            </div>
        </>
    );
}