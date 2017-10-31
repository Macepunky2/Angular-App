import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from '../user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class DataService {

  user: any;

  constructor(public http: Http) 
  { 
    console.log('data service connected...');
  }


  getUsers() : Observable<User[]>  //gets users from local json
  {
    return this.http.get('/json/users.json')
    .map(res => res.json());
  }

  getSingleUser(): Observable<any>
  {
    return Observable.of(this.user);
  }
  
  saveUser(user)
  {
    this.user = user;
  }
 

}

