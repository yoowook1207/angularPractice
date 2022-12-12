import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataTransferComponent } from './dataTransfer/data-transfer/data-transfer.component';
import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms.component';
import { LikeButtonComponent } from './likeDislike/like-button/like-button.component';

const routes: Routes = [
  { path: 'dataTransfer', component: DataTransferComponent },
  { path: 'forms', component: ReactiveFormsComponent },
  { path: 'likeButton', component: LikeButtonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
