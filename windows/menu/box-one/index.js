import Widget from "resource:///com/github/Aylur/ags/widget.js";
import { Profile } from "./profile.js";
import { System } from "./system.js";

export const BoxOne = () =>
  Widget.Box({
    homogeneous: true,
    className: "box-one",
    vertical: true,
    children: [
      Profile(),
      System(),
    ],
  });
