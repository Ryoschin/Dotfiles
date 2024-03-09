import Widget from "resource:///com/github/Aylur/ags/widget.js";
import { MiddleHolderOne } from "./mh-one.js";
import { MiddleHolderTwo } from "./mh-two.js";

export const BoxTwo = () =>
  Widget.Box({
    homogeneous: true,
    className: "box-two",
    vertical: true,
    children: [
      MiddleHolderOne(),
      MiddleHolderTwo(),
    ],
  });
