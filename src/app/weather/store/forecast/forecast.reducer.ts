import { Action, createReducer, on } from '@ngrx/store';
import { IForecastPageState, INITIAL_FORECAST_PAGE_STATE } from './forecast-page.state';
import { FORECAST_REQUEST, FORECAST_REQUEST_FAIL, FORECAST_REQUEST_SUCCESS } from './forecast.actions';
import { StateStatus } from '../../../core/models/state-status';

const reducer = createReducer(INITIAL_FORECAST_PAGE_STATE,
  on(FORECAST_REQUEST, state => ({
    ...state,
    status: StateStatus.Loading
  })),
  on(FORECAST_REQUEST_SUCCESS, (state, {payload}) => ({
    ...state,
    list: payload,
    status: StateStatus.Loaded
  })),
  on(FORECAST_REQUEST_FAIL, state => ({
    ...state,
    status: StateStatus.Failed
  }))
);

export function forecastPageReducer(state: IForecastPageState, action: Action) {
  return reducer(state, action);
}
