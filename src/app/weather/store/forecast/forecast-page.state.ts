import { ForecastCity, ForecastListItem } from '../../models/forecast.model';
import { StateStatus } from '../../../core/models/state-status';

export interface IForecastPageState {
  list: ForecastListItem[];
  city: ForecastCity;
  status: StateStatus;
}

export const DEFAULT_STATE: IForecastPageState = {
  list: undefined,
  city: undefined,
  status: StateStatus.Empty
};

export const INITIAL_FORECAST_PAGE_STATE = DEFAULT_STATE;
