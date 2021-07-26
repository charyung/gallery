import ContentfulContext, { client } from "../context/contentfulClient";
import styles from "../styles/Home.module.css";
import Frames from "../components/frames/frames";
import Modal from "../components/modal/modal";

export default function Home() {
    return (
        <div className={styles.container}>
            <h1>Stuff I made.</h1>
            <Modal/>
            <ContentfulContext.Provider value={client}>
                <Frames/>
            </ContentfulContext.Provider>
        </div>
    );
}
