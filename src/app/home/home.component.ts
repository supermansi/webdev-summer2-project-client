import { Component, OnInit } from '@angular/core';
import {SearchServiceClient} from '../services/search.service.client';
import {setRootDomAdapter} from '@angular/platform-browser/src/dom/dom_adapter';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  query;
  results = [];

  constructor(private searchService: SearchServiceClient) { }

  ngOnInit() {
  }

  search = query => {
    this.searchService
      .search(query)
      .then(results => this.results = results);
    console.log(this.results);
  }

}
