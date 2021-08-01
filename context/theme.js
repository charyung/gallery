import { createContext } from "react";

const EXCLUDED_THEMES = new Set(["active"]);

const ThemeContext = createContext();

export { EXCLUDED_THEMES };
export default ThemeContext;