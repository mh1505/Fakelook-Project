import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Post } from '../../shared/models/post.model';
import { DataService } from '../../shared/data.service';


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  newPost: Post;

  postFormGroup = new FormGroup({
    photo: new FormControl(Validators.required),
    text: new FormControl(),
    tag: new FormControl(),
    taggedUser: new FormControl()
  })

  constructor(private service : DataService) {}

  @Output() 
  postToUpLoad = new EventEmitter<Post>()

  ngOnInit() {
    this.createNewPost();
  }

//לחיצה על כפתור הוספת פוסט חדש
   saveNewPost() : void {
    this.newPost = this.postFormGroup.value;
    this.newPost.date = new Date(); 
    //this.newPost.latitude = //למצוא איך עושים מיקום אוטומטי
    //this.newPost.longitude = //כנל
    //this.newPost.userId = user.id//לטפל כשיהיה יוזר
    // this.postToUpLoad.emit({...this.newPost})
   this.service.addPost({...this.newPost})
  }

  //יצירת מופע ריק של פוסט בקונסטרקטור
  createNewPost() : void {
    this.newPost = {
      photo: "",
      latitude: 0,
      longitude: 0,
      text: "",
      date: null,
      userId: 0
    }

  }

}
