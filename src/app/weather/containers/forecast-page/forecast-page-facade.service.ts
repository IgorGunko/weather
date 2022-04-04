import { Injectable } from '@angular/core';
import { WeatherServicesModule } from '../../services/weather-services.module';
import { Store } from '@ngrx/store';
import { IForecastPageState } from '../../store/forecast/forecast-page.state';
import { FORECAST_REQUEST } from '../../store/forecast/forecast.actions';
import { ForecastCity, ForecastListItem } from '../../models/forecast.model';
import { selectForecastCity, selectForecastList } from '../../store/forecast/forecast.selectors';
import { Observable } from 'rxjs/index';
import { snapshot } from '../../../core/utils/snapshot.util';

@Injectable({
  providedIn: WeatherServicesModule
})
export class ForecastPageFacadeService {
  public forecast$: Observable<ForecastListItem[]>;
  public forecastCity: ForecastCity;

  constructor(
    private store: Store<IForecastPageState>
  ) {
    this.forecast$ = this.store.select(selectForecastList);
    this.forecastCity = snapshot(this.store.select(selectForecastCity));
  }

  getForecast(cityName): void {
    this.store.dispatch(FORECAST_REQUEST({cityName}));
  }
}
