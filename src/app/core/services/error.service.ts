import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private router: Router) { }

  navigateToErrorPage(statusCode: number): Promise<boolean> {
    return this.router.navigate(['error', String(statusCode)]);
  }
}
