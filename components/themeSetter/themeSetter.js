import { useContext } from "react";
import classNames from "classnames";
import ThemeContext, { AVAILABLE_THEMES } from "../../context/theme";
import styles from "./themeSetter.module.css";

export default function ThemeSetter() {
    const { currentTheme, setTheme } = useContext(ThemeContext);
    const themeLayout = Object.keys(AVAILABLE_THEMES).map(theme => (
        <>
            /
            <button
                key={theme}
                onClick={() => setTheme(AVAILABLE_THEMES[theme])}
                className={classNames(currentTheme === AVAILABLE_THEMES[theme] && styles.active)}
            >
                {theme}
            </button>
        </>
    ));

    return <div className={styles.themesContainer}>{themeLayout}</div>;
}