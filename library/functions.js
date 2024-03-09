export function toWx(/** @type {Number} */ value) {
  return (c.width * value) / 1366;
}

export function toHx(/** @type {Number} */ value) {
  return (c.height * value) / 768;
}

export function toFx(/** @type {Number} */ value) {
  return (c.full * value) / 1049088;
}

export function toggleMenu() {
  App.toggleWindow("menu");
}

export function getMusicButton(/** @type {Boolean} */ playing) {
  return playing ? " " : " ";
}

export function getWeatherInfo(/** @type {String} */ temp) {
  let key1 = c.weatherIcons[temp];
  key1 = key1 == undefined ? c.weatherIcons["Default"] : key1;
  let key2 = c.weatherColors[temp];
  key2 = key2 == undefined ? c.weatherColors["Default"] : key2;
  return [key1, key2];
}

export function getTrackTitle(/** @type {String} */ track, _artists) {
  return track.substring(0, 20);
}
