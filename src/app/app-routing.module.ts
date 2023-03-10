import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataTransferComponent } from './dataTransfer/data-transfer/data-transfer.component';
import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms.component';
import { LikeButtonComponent } from './likeDislike/like-button/like-button.component';
import { ScrollingComponent } from './scrollingRenderer2/scrolling/scrolling.component';
import { SecondFormsComponent } from './second-forms/second-forms.component';
import { PureImpurePipesComponent } from './pure-impure-pipes/pure-impure-pipes.component';

const routes: Routes = [
  { path: 'dataTransfer', component: DataTransferComponent },
  { path: 'forms', component: ReactiveFormsComponent },
  { path: 'forms2', component: SecondFormsComponent },
  { path: 'likeButton', component: LikeButtonComponent },
  { path: 'scrolling', component: ScrollingComponent },
  { path: 'pipes', component: PureImpurePipesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
