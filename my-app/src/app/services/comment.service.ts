import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Comment } from '../comment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CommentService {

  constructor(public http: Http) 
  {
    console.log('comment service on!');
  }

   getComments(): Observable<Comment[]> {
    return this.http
      .get(`https://jsonplaceholder.typicode.com/comments`)
      .map(data => data.json());
}
}
