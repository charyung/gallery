import { useState } from "react";
import ContentfulContext, { client } from "../context/contentfulClient";
import ModalPictureContext from "../context/modalPicture";
import Frames from "../components/frames/frames";
import Modal from "../components/modal/modal";
import SectionHeader from "../components/frames/section/section";
import styles from "../styles/Home.module.css";

export default function Home() {
    const [pictureUrl, setPictureUrl] = useState(null);
    return (
        <div className={styles.container}>
            <h1>Stuff I made.</h1>
            <ModalPictureContext.Provider value={{pictureUrl, setPictureUrl}}>
                {pictureUrl ? <Modal/> : <></>}
                <ContentfulContext.Provider value={client}>
                    <Frames/>
                </ContentfulContext.Provider>
            </ModalPictureContext.Provider>
        </div>
    );
}
