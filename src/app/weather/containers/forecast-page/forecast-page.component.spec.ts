import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastPageComponent } from './forecast-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ForecastPageFacadeService } from './forecast-page-facade.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { provideMockStore } from '@ngrx/store/testing';

describe('ForecastPageComponent', () => {
  let component: ForecastPageComponent;
  let fixture: ComponentFixture<ForecastPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForecastPageComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [ForecastPageFacadeService, provideMockStore()],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
