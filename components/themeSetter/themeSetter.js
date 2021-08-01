import React, { useContext } from "react";
import classNames from "classnames";
import ThemeContext, { AVAILABLE_THEMES } from "../../context/theme";
import styles from "./themeSetter.module.scss";

export default function ThemeSetter() {
    const { currentTheme, setTheme } = useContext(ThemeContext);
    const themeLayout = Object.keys(AVAILABLE_THEMES).map(theme => (
        <React.Fragment key={theme}>
            /
            <button
                onClick={() => setTheme(AVAILABLE_THEMES[theme])}
                className={classNames(currentTheme === AVAILABLE_THEMES[theme] && styles.active)}
            >
                {theme}
            </button>
        </React.Fragment>
    ));

    return <div className={styles.themesContainer}>{themeLayout}</div>;
}