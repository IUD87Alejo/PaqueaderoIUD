import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private url = 'https://localhost:44371';

  constructor() { }

  getUrl(): string {
    return `${this.url}/api`;
  }

  getBaseUrl(): string {
    return this.url;
  }
}
