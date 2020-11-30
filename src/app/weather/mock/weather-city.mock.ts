import { WeatherCity } from '../models/weather.model';

export const ExpectedWeatherData: WeatherCity = {
  cnt: 4,
  list: [
    {
      coord: {
        lon: 30.52,
        lat: 50.43
      },
      sys: {
        country: 'UA',
        timezone: 7200,
        sunrise: 1606714541,
        sunset: 1606744685
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d'
        }
      ],
      main: {
        temp: -1.03,
        feels_like: -4.63,
        temp_min: -2,
        temp_max: 0,
        pressure: 1026,
        humidity: 92
      },
      visibility: 6000,
      wind: {
        speed: 1.88,
        deg: 283
      },
      clouds: {
        all: 11
      },
      dt: 1606727354,
      id: 703448,
      name: 'Kyiv'
    }
  ]
};
