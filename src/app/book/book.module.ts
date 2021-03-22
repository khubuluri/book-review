import {NgModule} from '@angular/core';

import {BookComponent} from './book.component';
import {BookListComponent} from './book-list/book-list.component';
import {BookDetailsComponent} from './book-details/book-details.component';
import {NewBookComponent} from './new-book/new-book.component';
import {EditBookComponent} from './edit-book/edit-book.component';

import {CommonModule} from '@angular/common';
import {BookRoutingModule} from './book-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    BookComponent,
    BookListComponent,
    BookDetailsComponent,
    NewBookComponent,
    EditBookComponent
  ],
  imports: [CommonModule, BookRoutingModule, SharedModule]
})
export class BookModule {
}
