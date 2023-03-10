import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTransferComponent} from './dataTransfer/data-transfer/data-transfer.component';
import { ChildComponentComponent } from './dataTransfer/child-component/child-component.component';
import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LikeButtonComponent } from './likeDislike/like-button/like-button.component';
import { ScrollingComponent } from './scrollingRenderer2/scrolling/scrolling.component';
import { ScrollTrackerDirective } from './scrollingRenderer2/scroll-tracker.directive';
import { SecondFormsComponent } from './second-forms/second-forms.component';
import { PureImpurePipesComponent } from './pure-impure-pipes/pure-impure-pipes.component';
import { UserOutputPipe } from './util/user-output.pipe';
import { UserOutputPurePipe } from './util/user-output-pure.pipe';



@NgModule({
  declarations: [
    AppComponent,
    DataTransferComponent,
    ChildComponentComponent,
    ReactiveFormsComponent,
    LikeButtonComponent,
    ScrollingComponent,
    ScrollTrackerDirective,
    SecondFormsComponent,
    PureImpurePipesComponent,
    UserOutputPipe,
    UserOutputPurePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
