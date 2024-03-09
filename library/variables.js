import Variable from "resource:///com/github/Aylur/ags/variable.js";
import { commands } from "./values.js";

const divide = ([total, free]) => free / total;
export const userName = Variable("", { listen: ["whoami"] });

export const cpu = Variable(0, {
  poll: [
    2000,
    commands["cpu"],
    (out) =>
      divide([
        100,
        out
          .split("\n")
          .find((line) => line.includes("Cpu(s)"))
          .split(/\s+/)[1]
          .replace(",", "."),
      ]),
  ],
});

export const ram = Variable(0, {
  poll: [
    2000,
    commands["ram"],
    (out) =>
      divide(
        out
          .split("\n")
          .find((line) => line.includes("Mem:"))
          .split(/\s+/)
          .splice(1, 2),
      ),
  ],
});

export const brightness = Variable(0, {
  poll: [
    100,
    commands["brightness"],
    (out) =>
      out
        .split("\n")
        .find((line) => line.includes("Current brightness"))
        .match(/\((.*?)\)/)[1],
  ],
});

export const date = Variable(
  {},
  {
    poll: [
      1000,
      () => {
        const currentDateTime = new Date();
        let hour = currentDateTime.getHours();
        let hours = hour % 12;
        hours = hours ? hours : 12; // If 0, make it 12

        return {
          year: currentDateTime.getFullYear() % 100,
          month: currentDateTime.getMonth() + 1, // Months are zero-based in JavaScript
          day: currentDateTime.getDate(),
          dayName: currentDateTime.toLocaleDateString("en-US", {
            weekday: "short",
          }),
          dayNameFull: currentDateTime.toLocaleDateString("en-US", {
            weekday: "long",
          }),
          hour: hours.toString().padStart(2, "0"),
          hourNormal: `${currentDateTime.getHours()}`.padStart(2, "0"),
          minute: currentDateTime.getMinutes().toString().padStart(2, "0"),
          second: currentDateTime.getSeconds(),
          meridian: hour >= 12 ? "PM" : "AM",
        };
      },
    ],
  },
);

export const uptime = Variable(
  {},
  {
    poll: [
      1000,
      commands["uptime"],
      (out) => {
        const uptimeString = out.split("up")[1].split(",")[0].trim();
        const uptime = uptimeString.split(":");

        return {
          hour: uptime[0],
          minute: uptime[1],
        };
      },
    ],
  },
);

export const mailsAmount = Variable(0, {
  poll: [60000, commands["mails"]],
});

export const freeSpace = Variable(0, {
  poll: [
    60000,
    commands["freeSpace"],
    (out) => out.split("\n")[1].split(/\s+/)[3].replace("G", "GB"),
  ],
});

export const weather = Variable(
  { text: "", temp: "" },
  {
    poll: [
      1800000,
      commands["weather"],
      (out) => {
        const data = out.split("||");
        return {
          text: data[0], // .substring(1),
          temp: data[1],
          loc: data[2].replace(",", " -"),
          wind: data[3],
          hum: data[4].replace(/"*$/, ""),
        };
      },
    ],
  },
);
