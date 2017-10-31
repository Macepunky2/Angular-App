import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PostComponent } from './components/post/post.component';
import { DigitalComponent } from './components/digital/digital.component';
import { PhotoComponent } from './components/photo/photo.component';
import { TodoComponent } from './components/todo/todo.component';
import { DrawComponent } from './components/draw/draw.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';


import { DataService } from './services/data.service';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { Photo1Component } from './photo1/photo1.component';
import { GalleryService } from './services/gallery.service';
import { CommentService } from './services/comment.service';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SidebarComponent,
    PostComponent,
    DigitalComponent,
    PhotoComponent,
    TodoComponent,
    DrawComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    PhotoListComponent,
    Photo1Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    NgxPaginationModule,
    ReactiveFormsModule

  ],
  providers: 
  [DataService,
  GalleryService,
  CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
