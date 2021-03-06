import {NgModule} from '@angular/core';

import {BookListComponent} from './book-list/book-list.component';
import {BookDetailsComponent} from './book-details/book-details.component';
import {NewBookComponent} from './new-book/new-book.component';
import {EditBookComponent} from './edit-book/edit-book.component';

import {CommonModule} from '@angular/common';
import {BookRoutingModule} from './book-routing.module';
import {SharedModule} from '../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import {BookReviewsComponent} from './book-details/book-reviews/book-reviews.component';

@NgModule({
  declarations: [
    BookListComponent,
    BookDetailsComponent,
    NewBookComponent,
    EditBookComponent,
    BookReviewsComponent
  ],
  imports: [CommonModule, BookRoutingModule, SharedModule, ReactiveFormsModule]
})
export class BookModule {
}
