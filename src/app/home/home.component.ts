import { Component, OnInit } from '@angular/core';
import {SearchServiceClient} from '../services/search.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  query;
  results = {
    items: []
  };

  constructor(private searchService: SearchServiceClient,
              private router: Router,
              private route: ActivatedRoute) { }
  ngOnInit() {
  }

  search = query => {
    this.searchService
      .search(query)
      .then(results => this.results = results);
    console.log(this.results);
  }

  description = id => {
    this.router.navigate(['book/' + id]);
  }

}
