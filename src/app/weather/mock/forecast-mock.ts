import { Forecast } from '../models/forecast.model';

export const ExpectedForecastData: Forecast = {
  cod: '200',
  message: '0',
  cnt: 5,
  list: [
    {
      dt: 1606737600,
      main: {
        temp: 0.99,
        feels_like: -2.26,
        temp_min: 0.99,
        temp_max: 1.51,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 1007,
        humidity: 84,
        temp_kf: -0.52
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d'
        }
      ],
      clouds: {
        all: 33
      },
      wind: {
        speed: 1.52,
        deg: 315
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd'
      },
      dt_txt: '2020-11-30 12:00:00'
    }
  ],
  city: {
    id: 703448,
    name: 'Kyiv',
    coord: {
      lat: 50.4333,
      lon: 30.5167
    },
    country: 'UA',
    population: 2514227,
    timezone: 7200,
    sunrise: 1606714543,
    sunset: 1606744685
  }
};
