import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Stock } from './stock'
import { AuthService } from './auth.service'

@Injectable({
  providedIn: 'root'
})
export class StockService {
  portfolio: Stock[] = []
  
  constructor(private http: HttpClient, private authService: AuthService) { }
    
  private stockUrl = `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary?region=US&symbol=`; 

  httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
	    "x-rapidapi-key": "e4dffe468dmsh42c7989faa629d1p108ffbjsncaaf58fa8293"
    })
  };


  getStock(searchTerm: string): Observable<any> {
    const url = `${this.stockUrl}${searchTerm}`;
    return this.http.get<any>(url,this.httpOptions)
  }

  addToPortfolio(stock: Stock) {
    this.portfolio.push(stock)
    this.authService.hasPortfolio = true
    localStorage.setItem('portfolio', JSON.stringify(this.portfolio))
  }

  getPortfolio() {
    if (localStorage.getItem('portfolio') !== null) {
      this.authService.hasPortfolio = true
      this.portfolio = JSON.parse(localStorage.getItem('portfolio'))
    }
    return this.portfolio
  }

  deletePortfolio() {
    this.authService.hasPortfolio = false
    window.localStorage.removeItem('portfolio')
    this.portfolio = []
  }
}
