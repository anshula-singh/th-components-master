import { LabelsDict } from "./types";
import { label } from "./helpers";

const labels: LabelsDict = {
  en: {
    minute: "~%{n} min",
    minutes: "~%{n} mins",
    hour: "~%{n} hr",
    hours: "~%{n} hrs",
    hourMinute: "~%{n} hr %{n} min",
    hourMinutes: "~%{n} hr %{n} mins",
    hoursMinute: "~%{n} hrs %{n} min",
    hoursMinutes: "~%{n} hrs %{n} mins",

    minuteLeft: "~%{n} min left",
    minutesLeft: "~%{n} mins left",
    hourLeft: "~%{n} hr left",
    hoursLeft: "~%{n} hrs left",
    hourMinuteLeft: "~%{n} hr %{n} min left",
    hourMinutesLeft: "~%{n} hr %{n} mins left",
    hoursMinuteLeft: "~%{n} hrs %{n} min left",
    hoursMinutesLeft: "~%{n} hrs %{n} mins left"
  },
  es: {
    minute: "~%{n} minuto",
    minutes: "~%{n} minutos",
    hour: "~%{n} hora",
    hours: "~%{n} horas",
    hourMinute: "~%{n} hora %{n} minuto",
    hourMinutes: "~%{n} hora %{n} minutos",
    hoursMinute: "~%{n} horas %{n} minuto",
    hoursMinutes: "~%{n} horas %{n} minutos",

    minuteLeft: "~%{n} minuto restante",
    minutesLeft: "~%{n} minutos restantes",
    hourLeft: "~%{n} hora restante",
    hoursLeft: "~%{n} horas restantes",
    hourMinuteLeft: "~%{n} hora %{n} minuto restantes",
    hourMinutesLeft: "~%{n} hora %{n} minutos restantes",
    hoursMinuteLeft: "~%{n} horas %{n} minuto restantes",
    hoursMinutesLeft: "~%{n} horas %{n} minutos restantes"
  },
  de: {
    minute: "~%{n} min",
    minutes: "~%{n} min",
    hour: "~%{n} Std",
    hours: "~%{n} Std",
    hourMinute: "~%{n} Std %{n} min",
    hourMinutes: "~%{n} Std %{n} min",
    hoursMinute: "~%{n} Std %{n} min",
    hoursMinutes: "~%{n} Std %{n} min",

    minuteLeft: "~%{n} min verbleibt",
    minutesLeft: "~%{n} min verbleiben",
    hourLeft: "~%{n} Std verbleibt",
    hoursLeft: "~%{n} Std verbleiben",
    hourMinuteLeft: "~%{n} Std %{n} min verbleiben",
    hourMinutesLeft: "~%{n} Std %{n} min verbleiben",
    hoursMinuteLeft: "~Noch %{n} Stunden %{n} Minute",
    hoursMinutesLeft: "~%{n} Std %{n} min verbleiben"
  },
  fr: {
    minute: "%{n} min",
    minutes: "%{n} min",
    hour: "%{n} h",
    hours: "%{n} h",
    hourMinute: "%{n} h %{n} min",
    hourMinutes: "%{n} h %{n} min",
    hoursMinute: "%{n} h %{n} min",
    hoursMinutes: "%{n} h %{n} min",

    minuteLeft: "Il reste %{n} min",
    minutesLeft: "Il reste %{n} min",
    hourLeft: "Il reste %{n} h",
    hoursLeft: "Il reste %{n} h",
    hourMinuteLeft: "Il reste %{n} h %{n} min",
    hourMinutesLeft: "Il reste %{n} h %{n} min",
    hoursMinuteLeft: "Il reste %{n} h %{n} min",
    hoursMinutesLeft: "Il reste %{n} h %{n} min"
  },
  ja: {
    minute: "%{n} 分",
    minutes: "%{n} 分",
    hour: "%{n} 時間",
    hours: "%{n} 時間",
    hourMinute: "%{n} 時間 %{n} 分",
    hourMinutes: "%{n} 時間 %{n} 分",
    hoursMinute: "%{n} 時間 %{n} 分",
    hoursMinutes: "%{n} 時間 %{n} 分",

    minuteLeft: "残り %{n} 分",
    minutesLeft: "残り %{n} 分",
    hourLeft: "残り %{n} 時間",
    hoursLeft: "残り %{n} 時間",
    hourMinuteLeft: "残り %{n} 時間 %{n} 分",
    hourMinutesLeft: "残り %{n} 時間 %{n} 分",
    hoursMinuteLeft: "残り %{n} 時間 %{n} 分",
    hoursMinutesLeft: "残り %{n} 時間 %{n} 分"
  },
  pt: {
    minute: "~%{n}min",
    minutes: "~%{n}min",
    hour: "~%{n}h",
    hours: "~%{n}h",
    hourMinute: "~%{hours}h%{minutes}min",
    hourMinutes: "~%{hours}h%{minutes}min",
    hoursMinute: "~%{hours}h%{minutes}min",
    hoursMinutes: "~%{hours}h%{minutes}min",

    minuteLeft: "~%{n} minuto restantes",
    minutesLeft: "~%{n} minutos restantes",
    hourLeft: "~%{n}h restante",
    hoursLeft: "~%{n}h restantes",
    hourMinuteLeft: "~%{n}h%{n}min restante",
    hourMinutesLeft: "~%{n}h%{n}min restantes",
    hoursMinuteLeft: "~%{n}h%{n}min restante",
    hoursMinutesLeft: "~%{n}h%{n}min restantes"
  }
};

function hoursMinutesLabelArgs(timeInMinutes: number) {
  const hrs = Math.floor(timeInMinutes / 60);
  const mins = timeInMinutes % 60;

  let key = "";
  let values = [];

  if (hrs > 0) {
    values.push(hrs);
  }

  values.push(mins);

  if (hrs === 0 && mins === 0) {
    key = "minutes";
  }
  if (hrs === 0 && mins === 1) {
    key = "minute";
  }
  if (hrs === 0 && mins > 1) {
    key = "minutes";
  }
  if (hrs === 1 && mins === 0) {
    key = "hour";
  }
  if (hrs === 1 && mins === 1) {
    key = "hourMinute";
  }
  if (hrs === 1 && mins > 1) {
    key = "hourMinutes";
  }
  if (hrs > 1 && mins === 0) {
    key = "hours";
  }
  if (hrs > 1 && mins === 1) {
    key = "hoursMinute";
  }
  if (hrs > 1 && mins > 1) {
    key = "hoursMinutes";
  }

  return {
    key,
    values
  };
}

export function hoursMinutesLabel(lang: string, timeInMinutes: number) {
  let labelInfo = hoursMinutesLabelArgs(timeInMinutes);

  return timeInMinutes
    ? label(lang, labels, `${labelInfo.key}`, labelInfo.values)
    : "";
}

export function hoursMinutesLeftLabel(lang: string, timeInMinutes: number) {
  let labelInfo = hoursMinutesLabelArgs(timeInMinutes);

  return timeInMinutes
    ? label(lang, labels, `${labelInfo.key}Left`, labelInfo.values)
    : "";
}
