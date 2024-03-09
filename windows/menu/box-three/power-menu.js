import Widget from "resource:///com/github/Aylur/ags/widget.js";

export const PowerMenu = () =>
  Widget.Box({
    homogeneous: true,
    className: "power-menu",
    vertical: true,
    spacing: f.toHx(15),
    homogeneous: true,
    children: [
      Widget.Box({
        homogeneous: true,
        className: "power-box-parent",
        spacing: f.toWx(15),
        homogeneous: true,
        children: [
          Widget.Button({
            className: "log-out-box",
            child: Widget.Label(" "),
            onClicked: e.logOut,
          }),
          Widget.Button({
            className: "power-box",
            child: Widget.Label("󰐥 "),
            onClicked: e.powerOff,
          }),
        ],
      }),
      Widget.Box({
        homogeneous: true,
        className: "power-box-parent",
        spacing: f.toWx(15),
        homogeneous: true,
        children: [
          Widget.Button({
            className: "reboot-box",
            child: Widget.Label(" "),
            onClicked: e.reboot,
          }),
          Widget.Button({
            className: "sleep-box",
            child: Widget.Label(" "),
            onClicked: e.sleep,
          }),
        ],
      }),
    ],
  });
