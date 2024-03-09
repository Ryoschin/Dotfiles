import { execAsync } from "resource:///com/github/Aylur/ags/utils.js";
import App from "resource:///com/github/Aylur/ags/app.js";
import * as v from "./library/variables.js";
import * as f from "./library/functions.js";
import * as c from "./library/values.js";
import * as e from "./library/exes.js";
import { MenuW } from "./windows/menu/index.js";

globalThis.App = App;
globalThis.f = f;
globalThis.v = v;
globalThis.c = c;
globalThis.e = e;

// Applying SCSS
const scss = App.configDir + "/scss/style.scss";
const css = App.configDir + "/style.css";
execAsync(`sassc ${scss} ${css}`); // --watch
App.resetCss();
App.applyCss(`${css}`);

// Exporting the window
export default {
  style: css,
  windows: [MenuW()],
};
