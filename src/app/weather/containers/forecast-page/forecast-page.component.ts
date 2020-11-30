import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ForecastPageFacadeService } from './forecast-page-facade.service';
import { Forecast, ForecastListItem } from '../../models/forecast.model';

@Component({
  selector: 'app-forecast-page',
  templateUrl: './forecast-page.component.html',
  styleUrls: ['./forecast-page.component.scss'],
})
export class ForecastPageComponent implements OnInit {
  public forecast: ForecastListItem[];

  constructor(
    public facade: ForecastPageFacadeService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    const cityName = this.route.snapshot.params.city;

    if (cityName) {
      this.facade.getForecast(cityName).subscribe((data: Forecast) => {
        this.forecast = data.list;
      });
    }
  }
}
