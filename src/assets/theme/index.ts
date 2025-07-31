import createTheme from "../../utils/styled-components-theme.ts";
import CustomTheme from "./CustomTheme";

const Theme = createTheme(...Object.keys(CustomTheme));
export default Theme;
