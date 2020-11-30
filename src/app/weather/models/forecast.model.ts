import { Coord, Weather, Wind } from './common.model';

export interface Forecast {
  list: ForecastListItem[];
  city: ForecastCity;
  message: string;
  cod: string;
  cnt: number;
}

export interface ForecastListItem {
  dt: number;
  dt_txt: string;
  main: Main;
  weather: Weather[];
  clouds: {
    all: number;
  };
  wind: Wind;
  visibility: number;
  pop: number;
  sys: {
    pod: string;
  };
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface ForecastCity {
  coord: Coord;
  id: number;
  name: string;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}
