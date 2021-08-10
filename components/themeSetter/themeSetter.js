import React, { useContext } from "react";
import classNames from "classnames";
import ThemeContext, { EXCLUDED_THEMES } from "../../context/theme";
import styles from "./themeSetter.module.scss";
import themes from "../../styles/themes.module.scss";

export default function ThemeSetter() {
    const { currentTheme, setTheme } = useContext(ThemeContext);
    const themeLayout = Object
        .keys(themes)
        .filter(theme => !(EXCLUDED_THEMES.has(theme)))
        .map(theme => (
            <React.Fragment key={theme}>
                /
                <button
                    onClick={() => setTheme(themes[theme])}
                    className={classNames(currentTheme === themes[theme] && themes.active)}
                >
                    {theme}
                </button>
            </React.Fragment>
        ));

    return <div className={styles.themesContainer}>{themeLayout}</div>;
}

const osThemeListener = () => {
    window.matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", e =>  e.matches ? "night" : "light");
};

export { osThemeListener };