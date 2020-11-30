import { CityItem } from '../../models/weather.model';
import { StateStatus } from '../../../core/models/state-status';

export interface IWeatherPageState {
  city: CityItem[];
  status: StateStatus;
}

export const DEFAULT_STATE: IWeatherPageState = {
  city: undefined,
  status: StateStatus.Empty
};

export const INITIAL_WEATHER_PAGE_STATE = DEFAULT_STATE;
