import Head from "next/head";
import { useState } from "react";
import classNames from "classnames";
import ContentfulContext, { client } from "../context/contentfulClient";
import ModalPictureContext from "../context/modalPicture";
import ThemeContext from "../context/theme";
import Frames from "../components/frames/frames";
import Modal from "../components/modal/modal";
import ThemeSetter from "../components/themeSetter/themeSetter";
import styles from "../styles/Home.module.scss";
import themes from "../styles/themes.module.scss";

export default function Home() {
    const [pictureData, setPictureData] = useState(null);
    const [theme, setTheme] = useState(themes.light);
    return (
        <div className={classNames(styles.container, theme)}>
            <Head>
                <title>Gallery</title>
            </Head>
            <ThemeContext.Provider value={{currentTheme: theme, setTheme}}>
                <h1 className={styles.header}>Stuff I made.</h1>
                <ThemeSetter/>
                <ModalPictureContext.Provider value={{pictureData, setPictureData}}>
                    {pictureData ? <Modal/> : <></>}
                    <ContentfulContext.Provider value={client}>
                        <Frames/>
                    </ContentfulContext.Provider>
                </ModalPictureContext.Provider>
            </ThemeContext.Provider>
        </div>
    );
}
