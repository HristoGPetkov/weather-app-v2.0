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

export const apKey = "db22667d97bca1b4a8271f34ca5806dc";
