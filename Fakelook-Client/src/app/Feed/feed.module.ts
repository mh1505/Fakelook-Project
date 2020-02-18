import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';

import { LayoutComponent } from '../Feed/layout/layout.component';
import { MapComponent } from '../Feed/map/map.component';
import { ScrollFeedComponent } from './scroll-feed/scroll-feed.component';
import { PostCardComponent } from './post-card/post-card.component';
import { PostFormComponent } from './post-form/post-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LayoutComponent,
    MapComponent,
    ScrollFeedComponent,
    PostCardComponent,
    PostFormComponent,
  ],
  exports: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBi2h4hrS_oumBoRwphc2WaBESEN71W1RI'
    }),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class FeedModule { }
