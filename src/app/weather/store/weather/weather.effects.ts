import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, mergeMap, switchMap } from 'rxjs/internal/operators';
import { WeatherApiService } from '../../services/api/weather-api.service';
import { CURRENT_WEATHER_REQUEST_FAIL, CURRENT_WEATHER_REQUEST_SUCCESS, WeatherActions } from './weather.actions';
import { WeatherCity } from '../../models/weather.model';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class WeatherEffects {
  constructor(
    private actions$: Actions,
    private weatherApiService: WeatherApiService
  ) {

  }
  loadWeather$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WeatherActions.CURRENT_WEATHER_REQUEST),
      switchMap(() => this.weatherApiService.getCurrentWeather()),
      mergeMap((data: WeatherCity) => {
        return [CURRENT_WEATHER_REQUEST_SUCCESS({payload: data.list})];
      }),
      catchError((error: HttpErrorResponse) => [CURRENT_WEATHER_REQUEST_FAIL()])
    )
  );
}
