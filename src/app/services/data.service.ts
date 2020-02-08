import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class DataService {
  
  constructor(private http: HttpClient) { }
    
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
    console.log(searchTerm)
    return this.http.get<any>(url,this.httpOptions)
  }
}
