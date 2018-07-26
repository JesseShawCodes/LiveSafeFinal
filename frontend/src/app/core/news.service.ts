import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { NewsItem } from './news-item.interface';

//Updated with Local Back End API Link - JS
export const API = 'http://localhost:3000/data';

@Injectable()
export class NewsService {
  constructor(private http: HttpClient) {}

  getNews(): Observable<NewsItem[]> {
    return this.http.get<NewsItem[]>(API);
  }
}
