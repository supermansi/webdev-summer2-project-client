import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SearchServiceClient} from '../services/search.service.client';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  book = {}
  bookLoaded = false;

  constructor(private router: ActivatedRoute,
              private searchService: SearchServiceClient) { }

  ngOnInit() {
    this.router.params.subscribe(params =>
    this.searchService
      .search(params['bookId'])
      .then(book => {
        this.book = book;
        console.log(book);
        this.bookLoaded = true;
      }));
  }
}
