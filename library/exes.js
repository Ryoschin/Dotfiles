import { execAsync } from "resource:///com/github/Aylur/ags/utils.js";
import { open, wb } from "./values.js";

export const execute = (args) => {
  execAsync([`bash`, `-c`, `${args}`]).catch((reason) => {
    console.log(reason);
  });
};

// System
export const powerOff = () => execAsync("systemctl poweroff");
export const reboot = () => execAsync("systemctl reboot");
export const sleep = () => execAsync("systemctl suspend");
export const logOut = () => execAsync("ags -t menu");

// Web Pages
export const launchGitHub = () => execAsync(`${wb} github`);
export const launchReddit = () => execAsync(`${wb} reddit`);
export const launchTwitch = () => execAsync(`${wb} twitch`);
export const launchYoutube = () => execAsync(`${wb} youtube`);
export const launchGmail = () => execAsync(`${wb} gmail`);

// Applications
export const runFirefox = () => execAsync(`${open} firefox`);
export const runLutris = () => execAsync(`${open} lutris`);
export const runDiscord = () => execAsync(`${open} discord`);
export const runTerminal = () => execAsync(`${open}`);
export const runFiles = () => execAsync(`${open} nautilus`);
export const runBlender = () => execAsync(`${open} blender`);
export const runLeague = () => execAsync(`${open} league`);
export const runMusic = () => execAsync(`${open} music`);
export const runGimp = () => execAsync(`${open} gimp`);
export const runLibre = () => execAsync(`${open} libreoffice`);
export const runThunderbird = () => execAsync(`${open} thunderbird`);

// Folders
export const openDisk = () => execAsync(`${open} disk`);
export const openHome = () => execAsync(`${open} user`);
export const openDownloads = () => execAsync(`${open} downloads`);
export const openProgramming = () => execAsync(`${open} programming`);
export const openBinary = () => execAsync(`${open} cfbin`);
export const openConfig = () => execAsync(`${open} config`);
export const openPictures = () => execAsync(`${open} pictures`);
