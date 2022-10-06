import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-grandparent',
  templateUrl: './grandparent.component.html',
  styleUrls: ['./grandparent.component.scss']
})
export class GrandparentComponent implements OnInit {

  posts: any = [];
  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com'; // URL to use for API

  constructor(private http: HttpClient) { }

  // The POSTS List
  ngOnInit(): void {
    this.posts = this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(data => {
      this.posts = data;
    });
  }

  // The TO-DO List...Activated on button click
  getTodos(): any {
    this.posts = this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe(data => {
      this.posts = data;
    });
  }

}
