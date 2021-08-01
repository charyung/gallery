import { createContext } from "react";
import themes from "../styles/themes.module.css";

const AVAILABLE_THEMES = themes;

const ThemeContext = createContext();

export { AVAILABLE_THEMES };
export default ThemeContext;