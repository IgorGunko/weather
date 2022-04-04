import { createAction, props } from '@ngrx/store';
import { Forecast, ForecastListItem } from '../../models/forecast.model';

export enum ForecastActions {
  FORECAST_REQUEST = '[FORECAST_PAGE] FORECAST_REQUEST',
  FORECAST_REQUEST_SUCCESS = '[FORECAST_PAGE] FORECAST_REQUEST_SUCCESS',
  FORECAST_REQUEST_FAIL = '[FORECAST_PAGE] FORECAST_REQUEST_FAIL'
}

export const FORECAST_REQUEST = createAction(ForecastActions.FORECAST_REQUEST,
  props<{cityName: string}>());
export const FORECAST_REQUEST_SUCCESS = createAction(ForecastActions.FORECAST_REQUEST_SUCCESS,
  props<{payload: Forecast}>());
export const FORECAST_REQUEST_FAIL = createAction(ForecastActions.FORECAST_REQUEST_FAIL);
