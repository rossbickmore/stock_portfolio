import { Injectable } from '@angular/core';
import { StockService} from './stock.service'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  hasPortfolio: boolean
  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor() { }

}
