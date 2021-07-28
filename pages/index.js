import { useState } from "react";
import ContentfulContext, { client } from "../context/contentfulClient";
import ModalPictureContext from "../context/modalPicture";
import Frames from "../components/frames/frames";
import Modal from "../components/modal/modal";
import styles from "../styles/Home.module.css";

export default function Home() {
    const [pictureData, setPictureData] = useState(null);
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Stuff I made.</h1>
            <ModalPictureContext.Provider value={{pictureData, setPictureData}}>
                {pictureData ? <Modal/> : <></>}
                <ContentfulContext.Provider value={client}>
                    <Frames/>
                </ContentfulContext.Provider>
            </ModalPictureContext.Provider>
        </div>
    );
}
