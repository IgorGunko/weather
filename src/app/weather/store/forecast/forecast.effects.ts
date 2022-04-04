import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { WeatherApiService } from '../../services/api/weather-api.service';
import { catchError, mergeMap, switchMap } from 'rxjs/internal/operators';
import { FORECAST_REQUEST_FAIL, FORECAST_REQUEST_SUCCESS, ForecastActions } from './forecast.actions';
import { Forecast } from '../../models/forecast.model';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ForecastEffects {
  constructor(
    private actions$: Actions,
    private weatherApiService: WeatherApiService
  ) {

  }
  loadForecast$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ForecastActions.FORECAST_REQUEST),
      switchMap(({cityName}) => this.weatherApiService.getForecast(cityName)),
      mergeMap((payload: Forecast) => {
        return [FORECAST_REQUEST_SUCCESS({payload})];
      }),
      catchError((error: HttpErrorResponse) => [FORECAST_REQUEST_FAIL()])
    )
  );
}
