import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Post } from './models/post.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  urlPostsServer : string = `http://localhost:5000/postsRoutes/posts/`;
  
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.urlPostsServer);
  }

  addPost(newPost: Post) : void {
    this.http.post(this.urlPostsServer, newPost); 
  }

  getPostTags(postId: number) : Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:5000/postsRoutes/posts/${postId}/tags`)
  }

  
} 