import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) { }


  getIssues():Observable<any> {
    return this.http.get("https://localhost:44320/data");
  }

  getIssuesByFreeSearch(freeValue:string = ""):Observable<any> {
    return this.http.get("https://localhost:44320/data/search/"+freeValue);
  }
}