import { createAction, props } from '@ngrx/store';
import { CityItem } from '../../models/weather.model';

export enum WeatherActions {
  CURRENT_WEATHER_REQUEST = '[WEATHER_PAGE] CURRENT_WEATHER_REQUEST',
  CURRENT_WEATHER_REQUEST_SUCCESS = '[WEATHER_PAGE] CURRENT_WEATHER_REQUEST_SUCCESS',
  CURRENT_WEATHER_REQUEST_FAIL = '[WEATHER_PAGE] CURRENT_WEATHER_REQUEST_FAIL'
}

export const CURRENT_WEATHER_REQUEST = createAction(WeatherActions.CURRENT_WEATHER_REQUEST);
export const CURRENT_WEATHER_REQUEST_SUCCESS = createAction(WeatherActions.CURRENT_WEATHER_REQUEST_SUCCESS,
  props<{payload: CityItem[]}>());
export const CURRENT_WEATHER_REQUEST_FAIL = createAction(WeatherActions.CURRENT_WEATHER_REQUEST_FAIL);


