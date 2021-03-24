import {Component, Input, OnInit} from '@angular/core';
import {Review} from '../../interfaces';

@Component({
  selector: 'app-book-reviews',
  templateUrl: './book-reviews.component.html',
  styleUrls: ['./book-reviews.component.scss']
})
export class BookReviewsComponent implements OnInit {

  @Input() reviews: Review[];

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.reviews);
  }

  getInitials(fullName: string): string {
    const arr = fullName.split(' ');
    console.log(arr);
    const nameInitial = arr[0].substring(0, 1);
    const surnameInitial = arr[arr.length - 1].substring(0, 1);
    return nameInitial + surnameInitial;
  }
}
