import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { Post } from '../../shared/models/post.model'
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-scroll-feed',
  templateUrl: './scroll-feed.component.html',
  styleUrls: ['./scroll-feed.component.css']
})
export class ScrollFeedComponent implements OnInit {
  private postsFromServer$: Observable<Post[]> 
  private postsList : Post[] 

  tagsList$: Observable<any[]>

  constructor(private service: DataService) { }

  ngOnInit() {

   this.postsFromServer$ = this.service.getPosts();
   this.postsFromServer$.subscribe(list => {
     this.postsList = list;
     console.log(this.postsList)
   });

   this.tagsList$ = this.service.getPostTags(1);

  }


  // getByPostId() {

  //  const postId = {
  //     likes : [],
  //     tags: []
  //   };

  //   for (let index = 0; index < this.postsList.length; index++) {
  //     const element = this.postsList[index];
  //     element.id
  //   }
  // }



  

}
