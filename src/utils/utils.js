export const apKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

export const getCoords = () => {
  if ("geolocation" in navigator) {
    return new Promise((resolve, reject) => {
      window.navigator.geolocation.getCurrentPosition(
        (position) => resolve(position),

        (error) => reject(error)
      );
    });
  }
};

export const transformData = (weatherData) => {
  const data = {};

  for (let elem of weatherData.list) {
    const d = new Date(elem.dt_txt).setHours(0, 0, 0);
    const key = d.toString();

    if (!data[key]) {
      data[key] = [];
    }

    data[key].push(elem);
  }

  return data;
};

export const getDayOfWeek = (day, lang) => {
  let today = "";
  switch (day.toString()) {
    case "0":
      today = lang === "en" ? "Sunday" : "Неделя";
      break;
    case "1":
      today = lang === "en" ? "Monday" : "Понеделник";
      break;
    case "2":
      today = lang === "en" ? "Tuesday" : "Вторник";
      break;
    case "3":
      today = lang === "en" ? "Wednesday" : "Сряда";
      break;
    case "4":
      today = lang === "en" ? "Thursday" : "Четвъртък";
      break;
    case "5":
      today = lang === "en" ? "Friday" : "Петък";
      break;
    case "6":
      today = lang === "en" ? "Saturday" : "Събота";
      break;
    default:
      return null;
  }

  return today;
};

export const getWindDirection = (degree, language) => {
  const directions = {
    en: [
      "North",
      "North-East",
      "East",
      "South-East",
      "South",
      "South-West",
      "West",
      "North-West",
    ],
    bg: [
      "Север",
      "Североизток",
      "Изток",
      "Югоизток",
      "Юг",
      "Югозапад",
      "Запад",
      "Северозапад",
    ],
  };

  const index =
    Math.round(((degree %= 360) < 0 ? degree + 360 : degree) / 45) % 8;
  const direction =
    language === "bg" ? directions.bg[index] : directions.en[index];
  return direction;
};

export const formatHours = (date) => {
  if (date.getHours() === 0) return 12;
  return date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
};

export const getCurrentTime = (date) => {
  let h = date.getHours();
  let m = date.getMinutes();

  if (h < 10) h = "0" + h;
  if (m < 10) m = "0" + m;

  return h + ":" + m;
};

export const translate = (lang, bgWord, enWord) =>
  lang === "bg" ? bgWord : enWord;
