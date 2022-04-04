import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IWeatherState, weatherKey } from '../index';
import { IForecastPageState } from './forecast-page.state';

export const selectWeather = createFeatureSelector(weatherKey);
export const selectForecastPage = createSelector(selectWeather, (state: IWeatherState) => state && state.forecastPage);
export const selectForecastList = createSelector(selectForecastPage, (state: IForecastPageState) => state && state.list);
export const selectForecastCity = createSelector(selectForecastPage, (state: IForecastPageState) => state && state.city);
