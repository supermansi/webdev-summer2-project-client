import {Injectable} from '@angular/core';

@Injectable()
export class SearchServiceClient {

  API_URL = 'https://www.googleapis.com/books/v1/volumes?q=';

  search = query => {
    return fetch(this.API_URL + query)
      .then(response => response.json());
  }
}
