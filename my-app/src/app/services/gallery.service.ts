import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Photo } from '../photo';





@Injectable()
export class GalleryService {

  constructor(public http: Http) 
  { 
    console.log('gallery service connected...');
  }
  
  getPhotos() : Observable<Photo[]>    //gets the gallery imports from tipycode
  {
    return this.http.get('https://jsonplaceholder.typicode.com/photos')
    .map(res => res.json());
  }

  getPhoto(id: number): Observable<Photo>{
    return this.http.get('https://jsonplaceholder.typicode.com/photos/'+id) //gets specific item from gallery
    .map(data => data.json());
    
  }
}
