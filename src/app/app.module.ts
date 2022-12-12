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

@NgModule({
  declarations: [
    AppComponent,
    DataTransferComponent,
    ChildComponentComponent,
    ReactiveFormsComponent,
    LikeButtonComponent
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
