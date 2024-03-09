import Widget from "resource:///com/github/Aylur/ags/widget.js";
import { PowerMenu } from "./power-menu.js";
import { Pages } from "./pages.js";

export const BoxThree = () =>
  Widget.Box({
    homogeneous: true,
    className: "box-three",
    vertical: true,
    children: [
      PowerMenu(),
      Pages(),
    ],
  });
