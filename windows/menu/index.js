import Widget from "resource:///com/github/Aylur/ags/widget.js";
import { BoxOne } from "./box-one/index.js";
import { BoxTwo } from "./box-two/index.js";
import { BoxThree } from "./box-three/index.js";

export const MenuW = () =>
  Widget.Window({
    name: `menu`,
    className: "menu",
    exclusivity: "normal",
    visible: true,
    child: Widget.Box({
      className: "menu-bx",
      homogeneous: true,
      children: [BoxOne(), BoxTwo(), BoxThree()],
    }),
  });

export const MenuBottomW = () =>
  Widget.Window({
    name: `menu-bottom`,
    className: "menu",
    exclusivity: "normal",
    focusable: false,
    visible: false,
    layer: "bottom",
    child: Widget.Box({
      className: "menu-bx",
      homogeneous: true,
      children: [BoxOne(), BoxTwo(), BoxThree()],
    }),
  });
