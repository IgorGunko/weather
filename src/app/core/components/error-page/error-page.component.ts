import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {
  public statusCode: number;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const code = Number(this.activatedRoute.snapshot.params.statusCode);

    this.statusCode = isNaN(code) ? 404 : code;
  }

}
