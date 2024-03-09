import Widget from "resource:///com/github/Aylur/ags/widget.js";

export const MiddleHolderOne = () =>
  Widget.Box({
    homogeneous: true,
    className: "middle-holder-one",
    children: [
      Widget.Box({
        homogeneous: true,
        className: "time-box",
        vertical: true,
        spacing: f.toHx(15),
        children: [
          Widget.Box({
            homogeneous: true,
            className: "time-one",
            children: [
              Widget.Box({
                homogeneous: true,
                children: [
                  Widget.Label({
                    className: "time-hour",
                    vpack: "start",
                    setup: (self) =>
                      self.hook(v.date, (self) => {
                        self.label = `${v.date.value["hour"]}`;
                      }),
                  }),
                  Widget.Label({
                    className: "time-minute",
                    vpack: "end",
                    setup: (self) =>
                      self.hook(v.date, (self) => {
                        self.label = `${v.date.value["minute"]}`;
                      }),
                  }),
                ],
              }),
              Widget.Box({
                homogeneous: true,
                vertical: true,
                children: [
                  Widget.Label({
                    className: "time-mer",
                    vpack: "start",
                    hpack: "end",
                    setup: (self) =>
                      self.hook(v.date, (self) => {
                        self.label = `${v.date.value["meridian"]}`;
                      }),
                  }),
                  Widget.Label({
                    className: "time-day",
                    vpack: "end",
                    hpack: "end",
                    setup: (self) =>
                      self.hook(v.date, (self) => {
                        self.label = `${v.date.value["dayNameFull"]}`;
                      }),
                  }),
                ],
              }),
            ],
          }),
          Widget.Box({
            homogeneous: true,
            className: "time-two",
            children: [
              Widget.Label({
                className: "timer",
                label: "󰔛 ",
              }),
              Widget.Box({
                homogeneous: false,
                className: "uptime-holder",
                vertical: true,
                children: [
                  Widget.Label({
                    className: "uptime-hours",
                    setup: (self) =>
                      self.hook(v.uptime, (self) => {
                        self.label = `${v.uptime.value["hour"]} hours`;
                      }),
                  }),
                  Widget.Label({
                    className: "uptime-minutes",
                    setup: (self) =>
                      self.hook(v.uptime, (self) => {
                        self.label = `${v.uptime.value["minute"]} minutes`;
                      }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      Widget.Box({
        homogeneous: true,
        className: "temperature-box",
        vertical: true,
        children: [
          Widget.Box({
            homogeneous: true,
            hexpand: false,
            vexpand: false,
            children: [
              Widget.Label({
                className: "weather-icon",
                hpack: "start",
                setup: (self) =>
                  self.hook(v.weather, (self) => {
                    let weatherInfo = f.getWeatherInfo(v.weather.value["text"]);
                    self.label = `${weatherInfo[0]}`;
                    self.css = `color: ${weatherInfo[1]};`;
                  }),
              }),
              Widget.Label({
                className: "label-temperature",
                hpack: "end",
                setup: (self) =>
                  self.hook(v.weather, (self) => {
                    const weatherInfo = v.weather.value["temp"];
                    self.label = `${weatherInfo ? weatherInfo : ""}`;
                  }),
              }),
            ],
          }),
          Widget.Box({
            homogeneous: false,
            vertical: true,
            spacing: f.toHx(12),
            hpack: "center",
            children: [
              Widget.Label({
                className: "label-stat",
                setup: (self) =>
                  self.hook(v.weather, (self) => {
                    const weatherInfo = v.weather.value["text"].slice(0, 20);
                    self.label = `${weatherInfo ? weatherInfo : ""}`;
                  }),
              }),
              Widget.Label({
                className: "label-quote",
                setup: (self) =>
                  self.hook(v.weather, (self) => {
                    const weatherInfo = v.weather.value["loc"];
                    self.label = `Weather report for ${
                      weatherInfo ? weatherInfo : ""
                    }`;
                  }),
              }),
              Widget.Label({
                className: "label-quote",
                setup: (self) =>
                  self.hook(v.weather, (self) => {
                    const weatherInfo = [
                      v.weather.value["wind"],
                      v.weather.value["hum"],
                    ];
                    self.label = `Current wind is ${
                      weatherInfo[0] ? weatherInfo[0] : ""
                    }, with humidity being ${
                      weatherInfo[1] ? weatherInfo[1] : ""
                    }`;
                  }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
