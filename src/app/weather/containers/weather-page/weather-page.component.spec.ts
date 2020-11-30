import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherPageComponent } from './weather-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WeatherPageFacadeService } from './weather-page-facade.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { provideMockStore } from '@ngrx/store/testing';
import { WeatherApiService } from '../../services/api/weather-api.service';

describe('WeatherPageComponent', () => {
  let component: WeatherPageComponent;
  let fixture: ComponentFixture<WeatherPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherPageComponent ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        WeatherApiService,
        WeatherPageFacadeService,
        provideMockStore()
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
