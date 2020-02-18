import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { Post } from '../../shared/models/post.model'
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  lat: number;
  long: number;
  private postsFromServer$: Observable<Post[]>
  postsList: Post[] = [];

  constructor(private service: DataService) { }

  ngOnInit() {
    this.findPosition();
    this.postsFromServer$ = this.service.getPosts();
    this.postsFromServer$.subscribe(list => {
      this.postsList = list
    })
  }

  findPosition(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.long = position.coords.longitude;
      });
    }
    else {
      alert("not support!");
    }
  }

}
