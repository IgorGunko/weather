import { IWeatherPageState } from './weather/weather-page.state';
import { IForecastPageState } from './forecast/forecast-page.state';
import { ActionReducerMap } from '@ngrx/store';
import { forecastPageReducer } from './forecast/forecast.reducer';
import { weatherPageReducer } from './weather/weather.reducer';
import { ForecastEffects } from './forecast/forecast.effects';
import { WeatherEffects } from './weather/weather.effects';

export interface IWeatherState {
  forecastPage: IForecastPageState;
  weatherPage: IWeatherPageState;
}

export const WEATHER_REDUCERS: ActionReducerMap<IWeatherState> = {
  forecastPage: forecastPageReducer,
  weatherPage: weatherPageReducer
};

export const weatherKey = 'weather';

export const WEATHER_EFFECTS = [ForecastEffects, WeatherEffects];
