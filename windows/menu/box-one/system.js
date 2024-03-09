import Widget from "resource:///com/github/Aylur/ags/widget.js";
import Battery from "resource:///com/github/Aylur/ags/service/battery.js";

export const System = () =>
  Widget.Box({
    homogeneous: true,
    className: "system",
    vertical: true,
    child: Widget.Box({
      homogeneous: true,
      className: "system-holder",
      vertical: true,
      spacing: f.toHx(15),
      children: [
        Widget.Box({
          homogeneous: true,
          className: "cpu-option-holder",
          children: [
            Widget.Label({
              className: "cpu-icon",
              label: " ",
            }),
            Widget.ProgressBar({
              className: "cpu-bar",
              vpack: "center",
              setup: (self) =>
                self.hook(v.cpu, (self) => {
                  self.value = v.cpu.value <= 0.05
                    ? v.cpu.value + 0.05
                    : v.cpu.value;
                }),
            }),
          ],
        }),
        Widget.Box({
          homogeneous: true,
          className: "memory-option-holder",
          children: [
            Widget.Label({
              className: "memory-icon",
              label: " ",
            }),
            Widget.ProgressBar({
              className: "memory-bar",
              vpack: "center",
              setup: (self) =>
                self.hook(v.ram, (self) => {
                  self.value = v.ram.value;
                }),
            }),
          ],
        }),
        Widget.Box({
          homogeneous: true,
          className: "bright-option-holder",
          children: [
            Widget.Label({
              className: "bright-icon",
              label: " ",
            }),
            Widget.ProgressBar({
              className: "bright-bar",
              vpack: "center",
              setup: (self) =>
                self.hook(v.brightness, (self) => {
                  self.value = v.brightness.value.slice(0, -1) / 100;
                }),
            }),
          ],
        }),
        Widget.Box({
          homogeneous: true,
          className: "battery-option-holder",
          children: [
            Widget.Label({
              className: "battery-icon",
              label: "󱤁 ",
            }),
            Widget.ProgressBar({
              className: "battery-bar",
              vpack: "center",
              setup: (self) =>
                self.hook(Battery, (self) => {
                  self.value = Battery.percent / 100;
                }),
            }),
          ],
        }),
      ],
    }),
  });
