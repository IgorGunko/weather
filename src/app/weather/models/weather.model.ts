import { Coord, Weather, Wind } from './common.model';

export interface WeatherCity {
  cnt: number;
  list: CityItem[];
}

export interface CityItem {
  coord: Coord;
  sys: Sys;
  weather: Weather[];
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  id: number;
  name: string;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface Sys {
  country: string;
  timezone: number;
  sunrise: number;
  sunset: number;
}

interface Clouds {
  all: number;
}

