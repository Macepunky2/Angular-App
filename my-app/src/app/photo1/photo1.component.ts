import { Component, OnInit } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Photo } from '../photo';
import { GalleryService } from '../services/gallery.service';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { User } from '../user';
import { Comment } from '../comment';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-photo1',
  templateUrl: './photo1.component.html',
  styleUrls: ['./photo1.component.scss']
})
export class Photo1Component implements OnInit {
  users: User[] = [];
  comments: Comment[] = [];
  photo: Photo;
  p: number = 1;
 
  constructor(private galleryService: GalleryService,
              private dataService: DataService, 
              private activatedRoute:ActivatedRoute, 
              private commentService:CommentService) { }

  ngOnInit() 
  {
    this.activatedRoute.params.subscribe(params => {
      this.getPhoto(params['id']);
      
    });
   this.dataService.getUsers().subscribe(users => {
    this.users = users; });

    this.commentService.getComments().subscribe(comments => {
      this.comments = comments;
    });
 
  }

  private getPhoto(id: number)
  {
    this.galleryService.getPhoto(id).subscribe(photo => {
      this.photo = photo;
    });
  }



}
