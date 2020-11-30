import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IWeatherState, weatherKey } from '../index';
import { IWeatherPageState } from './weather-page.state';

export const selectWeather = createFeatureSelector(weatherKey);
export const selectWeatherPage = createSelector(selectWeather, (state: IWeatherState) => state && state.weatherPage);
export const selectWeatherCity = createSelector(selectWeatherPage, (state: IWeatherPageState) => state && state.city);
