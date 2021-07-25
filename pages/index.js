import ContentfulContext, { client } from "../components/contentfulClient";
import styles from "../styles/Home.module.css";
import Frames from "../components/frames/frames";

export default function Home() {
    return (
        <div className={styles.container}>
            <h1>Stuff I made.</h1>
            <ContentfulContext.Provider value={client}>
                <Frames/>
            </ContentfulContext.Provider>
        </div>
    );
}
