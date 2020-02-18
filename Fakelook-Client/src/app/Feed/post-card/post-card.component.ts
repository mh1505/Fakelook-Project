import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { Post } from '../../shared/models/post.model';
import { Observable, Subject } from 'rxjs';


@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

  private postsFromServer$: Observable<Post[]>
  private postsList: Post[]

  constructor(private service: DataService) { }

  ngOnInit() {
    this.postsFromServer$ = this.service.getPosts();
    this.postsFromServer$.subscribe(list => {
      this.postsList = list
    });
  }

}
