import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http: HttpClient) { }
    
  private stockUrl = `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/get-detail?region=US&lang=en&symbol=`; 

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
}
