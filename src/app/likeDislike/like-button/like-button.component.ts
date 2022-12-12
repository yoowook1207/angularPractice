import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.scss'],
  styles: [
    '.liked {color: blue; font-weight: 600}',
    '.disliked {color: red; font-weight: 600}',

  ]
})
export class LikeButtonComponent implements OnInit {
  likesCounter: number = 100;
  dislikesCounter: number = 25;

  constructor() {}

  ngOnInit(): void {}

  handleLike(event: any) {
    // event.stopPropagation()
    if (event.currentTarget.classList.contains('liked')) {
      this.likesCounter = this.likesCounter - 1;
      event.currentTarget.classList.remove('liked');
    } else {
      this.likesCounter = this.likesCounter + 1;
      event.currentTarget.classList.add('liked');
    }
  }

  handleDislike(event: any) {
    // event.stopPropagation()
    if (event.currentTarget.classList.contains('disliked')) {
      this.dislikesCounter = this.dislikesCounter - 1;
      event.currentTarget.classList.remove('disliked');
    } else {
      this.dislikesCounter = this.dislikesCounter + 1;
      event.currentTarget.classList.add('disliked');    }
  }
}
