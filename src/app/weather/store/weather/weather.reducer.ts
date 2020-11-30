import { Action, createReducer, on } from '@ngrx/store';

import { StateStatus } from '../../../core/models/state-status';
import { INITIAL_WEATHER_PAGE_STATE, IWeatherPageState } from './weather-page.state';
import {
  CURRENT_WEATHER_REQUEST, CURRENT_WEATHER_REQUEST_FAIL,
  CURRENT_WEATHER_REQUEST_SUCCESS
} from './weather.actions';

const reducer = createReducer(INITIAL_WEATHER_PAGE_STATE,
  on(CURRENT_WEATHER_REQUEST, state => ({
    ...state,
    status: StateStatus.Loading
  })),
  on(CURRENT_WEATHER_REQUEST_SUCCESS, (state, {payload}) => ({
    ...state,
    city: payload,
    status: StateStatus.Loaded
  })),
  on(CURRENT_WEATHER_REQUEST_FAIL, state => ({
    ...state,
    status: StateStatus.Failed
  }))
);

export function weatherPageReducer(state: IWeatherPageState, action: Action) {
  return reducer(state, action);
}
