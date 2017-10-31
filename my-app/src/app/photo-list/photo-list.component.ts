import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../services/gallery.service';
import { Photo } from '../photo';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

  users: User[];

  photos : Photo[];
  
  constructor(private galleryService: GalleryService,
             private dataService: DataService,
             private activatedRoute:ActivatedRoute) { }
  
  ngOnInit() {
    this.galleryService.getPhotos().subscribe(photos => {
      this.photos = photos;

      
    });
    this.dataService.getUsers().subscribe(users => {
      this.users = users; });
  }

}
