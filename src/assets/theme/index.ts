import createTheme from "styled-components-theme";

import CustomTheme from "./CustomTheme";

const Theme = createTheme(...Object.keys(CustomTheme));
export default Theme;
