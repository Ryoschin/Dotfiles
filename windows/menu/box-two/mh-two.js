import Widget from "resource:///com/github/Aylur/ags/widget.js";
import Mpris from "resource:///com/github/Aylur/ags/service/mpris.js";

export const MiddleHolderTwo = () =>
  Widget.Box({
    homogeneous: true,
    className: "middle-holder-two",
    children: [
      Widget.Box({
        homogeneous: true,
        className: "music-pages",
        vertical: true,
        children: [
          Widget.Box({
            homogeneous: true,
            className: "music-box",
            children: [
              Widget.Box({
                homogeneous: true,
                className: "music-picture",
                setup: (self) =>
                  self.hook(Mpris, (self) => {
                    const mpris = Mpris.getPlayer(""); // track_cover_url
                    const image = mpris ? mpris.cover_path : c.musicBackground;
                    self.css = `background-image: url('${image}');`;
                  }),
              }),
              Widget.Box({
                homogeneous: true,
                className: "music-control",
                vertical: true,
                children: [
                  Widget.Label({
                    className: "song-name",
                    setup: (self) =>
                      self.hook(Mpris, (self) => {
                        const mpris = Mpris.getPlayer("");
                        self.label = mpris
                          ? `${f.getTrackTitle(
                              mpris.trackTitle,
                              mpris.trackArtists,
                            )}`
                          : "Not playing";
                        if (self.label === "") self.label = "No track title";
                      }),
                  }),
                  Widget.Label({
                    className: "singer",
                    setup: (self) =>
                      self.hook(Mpris, (self) => {
                        const mpris = Mpris.getPlayer("");
                        self.label = mpris
                          ? `${mpris.trackArtists.join(", ").substring(0, 20)}`
                          : "Offline";
                        if (self.label === "") self.label = "No artists";
                      }),
                  }),
                  Widget.Box({
                    homogeneous: true,
                    className: "music-buttons",
                    children: [
                      Widget.Button({
                        className: "music-move",
                        child: Widget.Label("󰒮"),
                        on_clicked: () => {
                          const mpris = Mpris.getPlayer("");
                          if (mpris && mpris.can_go_prev) {
                            mpris.previous();
                          }
                        },
                      }),
                      Widget.Button({
                        className: "music-play",
                        on_clicked: () => Mpris.getPlayer("")?.playPause(),
                        child: Widget.Label({
                          setup: (self) =>
                            self.hook(Mpris, (self) => {
                              const mpris = Mpris.getPlayer("");
                              self.label = `${f.getMusicButton(
                                mpris
                                  ? mpris.play_back_status == "Playing"
                                  : false,
                              )}`;
                            }),
                        }),
                      }),
                      Widget.Button({
                        className: "music-move",
                        on_clicked: () => {
                          const mpris = Mpris.getPlayer("");
                          if (mpris && mpris.can_go_next) {
                            mpris.next();
                          }
                        },
                        child: Widget.Label("󰒭"),
                      }),
                    ],
                  }),
                  Widget.Slider({
                    className: "music-scale",
                    vpack: "center",
                    draw_value: false,
                    on_change: ({ value }) => {
                      let mpris = Mpris.getPlayer("");
                      if (!mpris) return;
                      mpris.position = value * mpris.length;
                    },
                    setup: (self) =>
                      self.poll(1000, (self) => {
                        const mpris = Mpris.getPlayer("");
                        if (!mpris) {
                          self.value = 1;
                          return;
                        }
                        const { position, length } = mpris;
                        if (position === -1 || length === -1) {
                          self.value = 0;
                          return;
                        }
                        self.value = position / length;
                      }),
                  }),
                ],
              }),
            ],
          }),
          Widget.Box({
            homogeneous: true,
            className: "web-box",
            spacing: f.toWx(15),
            children: [
              Widget.Button({
                className: "git-hub-page",
                child: Widget.Label(" "),
                onClicked: e.launchGitHub,
              }),
              Widget.Button({
                className: "reddit-page",
                child: Widget.Label(" "),
                onClicked: e.launchReddit,
              }),
              Widget.Button({
                className: "twitch-page",
                child: Widget.Label(" "),
                onClicked: e.launchTwitch,
              }),
              Widget.Button({
                className: "youtube-page",
                child: Widget.Label("󰗃 "),
                onClicked: e.launchYoutube,
              }),
            ],
          }),
        ],
      }),
      Widget.Box({
        homogeneous: true,
        className: "search-pages",
        vertical: true,
        children: [
          Widget.Box({
            homogeneous: true,
            className: "mail-box",
            children: [
              Widget.Button({
                className: "mail-icon",
                child: Widget.Label("󰊫 "),
                onClicked: e.launchGmail,
              }),
              Widget.Label({
                className: "mail-amount",
                setup: (self) =>
                  self.hook(v.mailsAmount, (self) => {
                    self.label = `${v.mailsAmount.value}`;
                  }),
              }),
            ],
          }),
          Widget.Box({
            homogeneous: true,
            className: "app-box",
            vertical: true,
            child: Widget.Box({
              homogeneous: true,
              className: "app-holder-box",
              vertical: true,
              spacing: f.toHx(20),
              children: [
                Widget.Box({
                  homogeneous: true,
                  className: "app-holder",
                  spacing: f.toWx(20),
                  homogeneous: true,
                  children: [
                    Widget.Button({
                      className: "app",
                      onClicked: e.runFirefox,
                      css: `background-image: url('${c.firefoxImage}');`,
                    }),
                    Widget.Button({
                      className: "app",
                      onClicked: e.runLutris,
                      css: `background-image: url('${c.lutrisImage}');`,
                    }),
                    Widget.Button({
                      className: "app",
                      onClicked: e.runDiscord,
                      css: `background-image: url('${c.discordImage}');`,
                    }),
                  ],
                }),
                Widget.Box({
                  homogeneous: true,
                  className: "app-holder",
                  spacing: f.toWx(20),
                  children: [
                    Widget.Button({
                      className: "app",
                      onClicked: e.runTerminal,
                      css: `background-image: url('${c.terminalImage}');`,
                    }),
                    Widget.Button({
                      className: "music-app",
                      onClicked: e.runMusic,
                      css: `background-image: url('${c.musicImage}');`,
                    }),
                    Widget.Button({
                      className: "app",
                      onClicked: e.runBlender,
                      css: `background-image: url('${c.blenderImage}');`,
                    }),
                  ],
                }),
                Widget.Box({
                  homogeneous: true,
                  className: "app-holder",
                  spacing: f.toWx(20),
                  children: [
                    Widget.Button({
                      className: "thunderbird-app",
                      onClicked: e.runThunderbird,
                      css: `background-image: url('${c.thunderbirdImage}');`,
                    }),
                    Widget.Button({
                      className: "app",
                      onClicked: e.runGimp,
                      css: `background-image: url('${c.gimpImage}');`,
                    }),
                    Widget.Button({
                      className: "libre-app",
                      onClicked: e.runLibre,
                      css: `background-image: url('${c.libreImage}');`,
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
