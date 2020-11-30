import { Injectable } from '@angular/core';
import { WeatherServicesModule } from '../../services/weather-services.module';
import { Store } from '@ngrx/store';
import { IForecastPageState } from '../../store/forecast/forecast-page.state';
import { FORECAST_REQUEST } from '../../store/forecast/forecast.actions';
import { ForecastListItem } from '../../models/forecast.model';
import { selectForecastList } from '../../store/forecast/forecast.selectors';
import { Observable } from 'rxjs/index';

@Injectable({
  providedIn: WeatherServicesModule
})
export class ForecastPageFacadeService {
  public forecast$: Observable<ForecastListItem[]>;

  constructor(
    private store: Store<IForecastPageState>
  ) {
    this.forecast$ = this.store.select(selectForecastList);
  }

  getForecast(cityName): void {
    this.store.dispatch(FORECAST_REQUEST({cityName}));
  }
}
