import Widget from "resource:///com/github/Aylur/ags/widget.js";

export const Pages = () =>
  Widget.Box({
    homogeneous: true,
    className: "pages",
    vertical: true,
    children: [
      Widget.Box({
        homogeneous: true,
        className: "disk-box",
        children: [
          Widget.Box({
            homogeneous: true,
            className: "disk-holder",
            children: [
              Widget.Button({
                className: "disk-icon",
                child: Widget.Label("󰋊"),
                onClicked: e.openDisk,
              }),
              Widget.Label({
                className: "disk-separator",
                label: "|",
              }),
            ],
          }),
          Widget.Label({
            className: "free-space",
            setup: (self) =>
              self.hook(v.freeSpace, (self) => {
                self.label = `${v.freeSpace.value}`;
              }),
          }),
        ],
      }),
      Widget.Box({
        homogeneous: true,
        className: "folders",
        vertical: true,
        children: [
          Widget.Box({
            homogeneous: false,
            className: "folder-one",
            hexpand: false,
            vexpand: false,
            children: [
              Widget.Button({
                className: "icon-folder",
                child: Widget.Label("󱂵  "),
                onClicked: e.openHome,
              }),
              Widget.Label({
                className: "folder",
                label: "Home",
              }),
            ],
          }),
          Widget.Box({
            homogeneous: false,
            className: "folder-two",
            hexpand: false,
            vexpand: false,
            children: [
              Widget.Button({
                className: "icon-folder",
                child: Widget.Label("󰉍  "),
                onClicked: e.openDownloads,
              }),
              Widget.Label({
                className: "folder",
                label: "Downloads",
              }),
            ],
          }),
          Widget.Box({
            homogeneous: false,
            className: "folder-three",
            hexpand: false,
            vexpand: false,
            children: [
              Widget.Button({
                className: "icon-folder",
                child: Widget.Label("󰉏  "),
                onClicked: e.openPictures,
              }),
              Widget.Label({
                className: "folder",
                label: "Pictures",
              }),
            ],
          }),
          Widget.Box({
            homogeneous: false,
            className: "folder-four",
            hexpand: false,
            vexpand: false,
            children: [
              Widget.Button({
                className: "icon-folder",
                child: Widget.Label("󱥾  "),
                onClicked: e.openProgramming,
              }),
              Widget.Label({
                className: "folder",
                label: "Programming",
              }),
            ],
          }),
          Widget.Box({
            homogeneous: false,
            className: "folder-five",
            hexpand: false,
            vexpand: false,
            children: [
              Widget.Button({
                className: "icon-folder",
                child: Widget.Label("󰉐  "),
                onClicked: e.openBinary,
              }),
              Widget.Label({
                className: "folder",
                label: "Binary",
              }),
            ],
          }),
          Widget.Box({
            homogeneous: false,
            className: "folder-six",
            hexpand: false,
            vexpand: false,
            children: [
              Widget.Button({
                className: "icon-folder",
                child: Widget.Label("󱁿  "),
                onClicked: e.openConfig,
              }),
              Widget.Label({
                className: "folder",
                label: "~/.config",
              }),
            ],
          }),
        ],
      }),
    ],
  });
