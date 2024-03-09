import Widget from "resource:///com/github/Aylur/ags/widget.js";

export const Profile = () =>
  Widget.Box({
    homogeneous: false,
    className: "profile",
    vertical: true,
    spacing: f.toHx(50),
    children: [
      Widget.Box({
        homogeneous: true,
        className: "picture",
        hpack: "center",
        css: `
          background-image: url('${c.nixImage}')
        `,
      }),
      Widget.Label({
        className: "system-name",
        label: "(User) NixOs",
      }),
      Widget.Label({
        className: "user-name",
        setup: (self) =>
          self.hook(v.userName, (self) => {
            self.label = `@${v.userName.value}`;
          }),
      }),
    ],
  });
