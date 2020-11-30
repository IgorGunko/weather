import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ForecastPageFacadeService } from './forecast-page-facade.service';

@Component({
  selector: 'app-forecast-page',
  templateUrl: './forecast-page.component.html',
  styleUrls: ['./forecast-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForecastPageComponent implements OnInit {
  constructor(
    public facade: ForecastPageFacadeService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    const cityName = this.route.snapshot.params['city'];

    if (cityName) {
      this.facade.getForecast(cityName);
    }
  }
}
