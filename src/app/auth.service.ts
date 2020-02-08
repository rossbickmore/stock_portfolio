import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  hasPortfolio: boolean
  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor() { }

}
