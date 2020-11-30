import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WeatherPageFacadeService } from './weather-page-facade.service';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherPageComponent {
  constructor(public facade: WeatherPageFacadeService) {}
}
