import App from "resource:///com/github/Aylur/ags/app.js";
import * as Utils from "resource:///com/github/Aylur/ags/utils.js";

export const data = App.configDir + "/data";
export const shell = `${data}/shell`;
export const city = "Valjevo"; // The city you live in

export const images = `${data}/images`;
export const icons = `${data}/icons`;
export const wb = `${shell}/wb.sh`;
export const open = `${shell}/opn.sh`;

export const commands = {
  cpu: "top -b -n 1",
  ram: "free",
  brightness: "brightnessctl i",
  uptime: "uptime",
  mails: `${shell}/mails.py`,
  freeSpace: `df -h /`,
  weather: `curl -s wttr.in/${city}?format="%C||%t||%l||%w||%h"`,
};

export const nixImage = `${icons}/nix.svg`;
export const firefoxImage = `${icons}/firefox.svg`;
export const lutrisImage = `${images}/lutris.png`;
export const discordImage = `${icons}/discord.svg`;
export const terminalImage = `${icons}/terminal.svg`;
export const leagueImage = `${images}/league.png`;
export const blenderImage = `${images}/blender.png`;
export const filesImage = `${icons}/files.svg`;
export const gimpImage = `${icons}/gimp.svg`;
export const libreImage = `${images}/libreoffice.png`;
export const musicImage = `${images}/youtube-music.png`;
export const musicBackground = `${images}/profile.jpg`;
export const thunderbirdImage = `${images}/thunderbird.png`;

const contents = Utils.readFile(App.configDir + "/scss/style.scss").split("\n");
export const width = Number(
  contents.find((line) => line.includes("$width: ")).slice(8, -1),
);
export const height = Number(
  contents.find((line) => line.includes("$height: ")).slice(9, -1),
);
export const full = width * height;

export const weatherIcons = {
  Clear: "󱓤 ",
  Sunny: "󰖙 ",
  Overcast: " ",
  "Partly cloudy": "󰖕 ",
  Cloudy: " ",
  "Light rain": " ",
  "Light rain, mist": " ",
  Rain: " ",
  "Light snow": "󰼴 ",
  "Light snow, mist": " ",
  "Light snow, snow": "󰖘 ",
  Snow: "󰖘 ",
  "Snow shower": "󰼶 ",
  Thunderstorm: "󰖓 ",
  Mist: " ", // 
  "Freezing fog": " ",
  "Patches of fog, mist, fog": "󰖑 ",
  "Patches of fog, mist, freezing fog": "󰖑 ",
  Default: " ",
};

export const weatherColors = {
  Clear: "#F4FAFC",
  Sunny: "#FDB813",
  Overcast: "#73A3D0",
  "Partly cloudy": "#C7C4BF",
  Cloudy: "#C7C4BF",
  "Light rain": "#A3C7A3",
  "Light rain, mist": "#D4D9CE",
  Rain: "#C4D3DF",
  "Light snow": "#FFFAFA",
  "Light snow, mist": "#E0FFFF",
  "Light snow, snow": "#FFFFFA",
  Snow: "#FFFAFA",
  "Snow shower": "#FFFAFA",
  Thunderstorm: "#2D3656",
  Mist: "#CDD8D9",
  "Freezing fog": "#DCDED8",
  "Patches of fog, mist, fog": "#ABAEB0",
  "Patches of fog, mist, freezing fog": "#ABAEB0",
  Default: "#FCBACB",
};
